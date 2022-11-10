interface IUserList {
  id: number;
  name: string;
  realname: string;
  cellphone: number;
  enable: number;
  departmentId: number;
  roleId: number;
  createAt: Date;
  updateAt: Date;
}

export type IState = {
  totalCount: number,
  userList: IUserList[]
  list: IUserList[]
}
