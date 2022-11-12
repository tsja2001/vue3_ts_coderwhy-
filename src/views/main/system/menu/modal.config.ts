import type { IModalConfig, IModalConfigProp } from "@/components/PageModal/type";

export const modalConfig:IModalConfig = {
  pageName: 'department',
  headers: {
    new: '新建部门',
    edit: '编辑部门',
  },
  formItems: [
    {
      type: 'input',
      label: '部门名称',
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
