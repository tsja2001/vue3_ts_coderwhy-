export const searchConfig = {
  pageName: 'role',
  formItems: [
    {
      type: 'input',
      label: '角色名称',
      placehoder: '请输入部门名称',
      prop: 'name',
      default: ''
    },
    {
      type: 'input',
      label: '权限介绍',
      placehoder: '请输入权限介绍',
      prop: 'intro',
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt',
    },
  ]
}

