export const contentConfig = {
  pageName: 'role',
  header: {
    title: '角色列表',
    btnTitle: '新建角色',
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
      label: '角色名称',
      type: 'default',
    },
    {
      prop: 'intro',
      aline: 'center',
      label: '权限介绍',
      type: 'default',
    },
    {
      prop: 'createAt',
      aline: 'center',
      label: '创建时间',
      type: 'timer',
      width: '210px',
    },
    {
      prop: 'updateAt',
      aline: 'center',
      label: '修改时间',
      type: 'timer',
      width: '210px',
    },
    {
      aline: 'center',
      label: '操作',
      type: 'handle',
      slotName: 'btn',
    },
  ],
}
