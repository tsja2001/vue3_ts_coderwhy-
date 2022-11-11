export const contentConfig = {
  pageName: 'department',
  header: {
    title: '部门列表',
    btnTitle: '新建部门',
  },
  contentList: [
    {
      prop: 'name',
      aline: 'center',
      label: '序号',
      type: 'index',
      width: '90px',
    },
    {
      prop: 'name',
      aline: 'center',
      label: '选择',
      type: 'selection',
      width: '50px',
    },
    {
      prop: 'name',
      aline: 'center',
      label: '部门名称',
      type: 'default',
      width: '150px',
    },
    {
      prop: 'leader',
      aline: 'center',
      label: '领导',
      type: 'default',
      width: '150px',
    },
    {
      prop: 'createAt',
      aline: 'center',
      label: '创建时间',
      type: 'timer',
      width: '170px',
    },
    {
      prop: 'updateAt',
      aline: 'center',
      label: '修改时间',
      type: 'timer',
      width: '170px',
    },
    {
      aline: 'center',
      label: '操作',
      type: 'custom',
      width: '170px',
      slotName: 'btn',
    },
    {
      aline: 'center',
      label: '操作',
      type: 'handle',
      width: '170px',
      slotName: 'btn',
    },
  ],
}