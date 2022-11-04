import router from '@/router'
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
      if(submenu.url == path) return submenu
    }
  }

  return undefined
}
