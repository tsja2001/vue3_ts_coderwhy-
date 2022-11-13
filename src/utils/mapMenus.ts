import router from '@/router'
import { toRaw } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

export function loadLoaclRouters() {
  // 1. 先获取所有路由映射
  const localRoutes: RouteRecordRaw[] = []
  const files: Record<string, any> = import.meta.glob(
    '../router/main/**/*.ts',
    { eager: true }
  )
  // 2. 将获取到的添加到localRoutes中
  for (const key in files) {
    const module = files[key]
    localRoutes.push(module.default)
  }

  return localRoutes
}

// 初次进入, 展示的页面
export let firstUrl = ''

export function mapMenuToRouters(userMenu: any[]) {
  const localRoutes = loadLoaclRouters()

  const routes: RouteRecordRaw[] = []
  // 3. 匹配服务器返回的路由, 注册路由
  for (const menu of userMenu) {
    for (const submenu of menu.children) {
      const currentRouter = localRoutes.find(
        (item) => item.path == submenu.url
      )
      if (currentRouter) {
        if (firstUrl == '') firstUrl = currentRouter.path

        routes.push(currentRouter)
        if (
          routes.find((item) => item.path == submenu.url)
        ) {
          routes.push({
            path: menu.url,
            redirect: currentRouter.path,
          })
        }
      }
    }
  }

  return routes
}

export function mapPathToMenu(
  path: string,
  userMenu: any[]
) {
  for (const menu of userMenu) {
    for (const submenu of menu.children) {
      if (submenu.url == path) return submenu
    }
  }

  return undefined
}

// 处理面包屑数据
type IBreadcrubsReturn = { name: string; path: string }[]
type IBreadcrubsProps = (
  path: string,
  userMenus: any[]
) => IBreadcrubsReturn

export const mapPathToBreadcrumbs: IBreadcrubsProps = (
  path,
  userMenu
) => {
  const returnData: IBreadcrubsReturn = []
  for (const menu of userMenu) {
    for (const submenu of menu.children) {
      if (submenu.url == path) {
        returnData.push({
          path: menu.url,
          name: menu.name,
        })
        returnData.push({
          path: submenu.url,
          name: submenu.name,
        })
      }
    }
  }

  return returnData
}

// 根据返回的菜单list, 拿到菜单id
export const mapMenuListToMenuId = (menuList: any[]) => {
  const idList: number[] = []

  const mapFn = (childList: any[]) => {
    childList.forEach((item) => {
      if (item.children && item.children.length) {
        mapFn(item.children)
      } else {
        idList.push(item.id)
      }
    })
  }

  mapFn(menuList)

  return idList
}

// 根据用户菜单获取按钮权限
export const mapMenuToPermission = (menus: any[]) => {
  const permissionList: string[] = []

  const menusMap = (menu: any[]) => {
    menu.forEach((item) => {
      if (item.children) {
        menusMap(item.children)
      } else if(item.type === 3){
        permissionList.push(item.permission)
      }
    })
  }

  menusMap(menus)

  return permissionList
}
