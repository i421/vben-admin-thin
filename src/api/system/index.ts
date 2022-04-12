import {
  AccountParams,
  DeptListItem,
  MenuParams,
  RoleParams,
  RolePageParams,
  MenuListGetResultModel,
  DeptListGetResultModel,
  AccountListGetResultModel,
  RolePageListGetResultModel,
  RoleListGetResultModel,
} from './model/systemModel';
import { defHttp } from '/@/utils/http/axios';

enum Api {
  AccountList = '/system/getAccountList',
  updateAccount = '/system/updateAccount',
  updatePassword = '/system/updatePassword',
  deleteAccount = '/system/deleteAccount',
  IsAccountExist = '/system/accountExist',

  DeptList = '/system/getDeptList',
  updateDept = '/system/updateDept',
  deleteDept = '/system/deleteDept',

  MenuList = '/system/getMenuList',
  updateMenu = '/system/updateMenu',
  deleteMenu = '/system/deleteMenu',

  RolePageList = '/system/getRoleListByPage',
  setRoleStatus = '/system/setRoleStatus',
  GetAllRoleList = '/system/getAllRoleList',
  updateRole = '/system/updateRole',
  deleteRole = '/system/deleteRole',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const updateAccount = (data) => defHttp.post({ url: Api.updateAccount, params: data });

export const updatePassword = (data) => defHttp.post({ url: Api.updatePassword, params: data });

export const deleteAccount = (id) => defHttp.delete({ url: Api.deleteAccount, params: { id: id } });

export const isAccountExist = (account: string, userId: number) =>
  defHttp.post(
    { url: Api.IsAccountExist, params: { account, userId } },
    { errorMessageMode: 'none' },
  );

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const updateDept = (data) => defHttp.post({ url: Api.updateDept, params: data });

export const deleteDept = (id) => defHttp.delete({ url: Api.deleteDept, params: { id: id } });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const updateMenu = (data) => defHttp.post({ url: Api.updateMenu, params: data });

export const deleteMenu = (id) => defHttp.delete({ url: Api.deleteMenu, params: { id: id } });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const updateRole = (data) => defHttp.post({ url: Api.updateRole, params: data });

export const deleteRole = (id) => defHttp.delete({ url: Api.deleteRole, params: { id: id } });
