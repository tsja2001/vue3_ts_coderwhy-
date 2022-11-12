import type {
  IModalConfig,
  IModalConfigProp,
} from '@/components/PageModal/type'

export const modalConfig: IModalConfig = {
  pageName: 'role',
  headers: {
    new: '新建角色',
    edit: '编辑角色',
  },
  formItems: [
    {
      type: 'input',
      label: '角色名称',
      placehoder: '请输入角色名称',
      prop: 'name',
      default: '',
    },
    {
      type: 'input',
      label: '权限介绍',
      placehoder: '请输入权限介绍',
      prop: 'intro',
    },
    {
      label: '角色菜单',
      type: 'custom',
      slotName: 'menuList',
    },
  ],
}
