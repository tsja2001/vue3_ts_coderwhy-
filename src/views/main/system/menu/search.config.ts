export const searchConfig = {
  pageName: 'menu',
  formItems: [
    {
      type: 'input',
      label: '部门名称',
      placehoder: '请输入部门名称',
      prop: 'name',
      default: '',
    },
    {
      type: 'input',
      label: '领导',
      placehoder: '请输入领导',
      prop: 'leader',
    },
    {
      type: 'date-picker',
      label: '创建时间',
      prop: 'createAt',
    },
  ],
}
