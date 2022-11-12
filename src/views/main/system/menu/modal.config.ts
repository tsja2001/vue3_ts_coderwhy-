import type { IModalConfig, IModalConfigProp } from "@/components/PageModal/type";

export const modalConfig:IModalConfig = {
  pageName: 'menu',
  headers: {
    new: '新建菜单',
    edit: '编辑菜单',
  },
  formItems: [
    {
      type: 'input',
      label: '菜单名称',
      placehoder: '请输入部门名称',
      prop: 'name',
      default: 'aaaaa',
    },
    {
      type: 'input',
      label: '领导',
      placehoder: '请输入领导',
      prop: 'leader',
    },
    {
      type: 'select',
      placehoder: '请选择上级部门',
      prop: 'parentId',
      label: '部门',
      options: [
        {
          label: '',
          value: '',
        },
      ],
    },
  ],
}
