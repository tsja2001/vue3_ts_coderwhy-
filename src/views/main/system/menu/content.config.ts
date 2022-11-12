export const contentConfig = {
  pageName: 'menu',
  header: {
    title: '菜单列表',
    btnTitle: '新建菜单',
  },
  contentList: [
    {
      prop: 'name',
      aline: 'center',
      label: '菜单名称',
      type: 'default',
      width: '150px',
    },
    {
      prop: 'type',
      aline: 'center',
      label: '级别',
      type: 'default',
      width: '90px',
    },
    {
      prop: 'url',
      aline: 'center',
      label: '菜单url',
      type: 'default',
      width: '150px',
    },
    {
      prop: 'icon',
      aline: 'center',
      label: '菜单icon',
      type: 'default',
      width: '150px',
    },
    {
      prop: 'sort',
      aline: 'center',
      label: '排序',
      type: 'default',
      width: '150px',
    },
    {
      prop: 'permission',
      aline: 'center',
      label: '权限',
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
      type: 'handle',
      width: '170px',
      slotName: 'btn',
    },
  ],
  childrenTree: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  }
}
