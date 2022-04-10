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
  deleteAccount = '/system/deleteAccount',
  IsAccountExist = '/system/accountExist',
  DeptList = '/system/getDeptList',
  updateDept = '/system/updateDept',
  deleteDept = '/system/deleteDept',
  setRoleStatus = '/system/setRoleStatus',
  MenuList = '/system/getMenuList',
  RolePageList = '/system/getRoleListByPage',
  GetAllRoleList = '/system/getAllRoleList',
  updateRole = '/system/updateRole',
  deleteRole = '/system/deleteRole',
}

export const getAccountList = (params: AccountParams) =>
  defHttp.get<AccountListGetResultModel>({ url: Api.AccountList, params });

export const deleteAccount = (id) => defHttp.delete({ url: Api.deleteAccount, params: { id: id } });

export const isAccountExist = (account: string) =>
  defHttp.post({ url: Api.IsAccountExist, params: { account } }, { errorMessageMode: 'none' });

export const getDeptList = (params?: DeptListItem) =>
  defHttp.get<DeptListGetResultModel>({ url: Api.DeptList, params });

export const updateDept = (data) => defHttp.post({ url: Api.updateDept, params: data });

export const deleteDept = (id) => defHttp.delete({ url: Api.deleteDept, params: { id: id } });

export const getMenuList = (params?: MenuParams) =>
  defHttp.get<MenuListGetResultModel>({ url: Api.MenuList, params });

export const getRoleListByPage = (params?: RolePageParams) =>
  defHttp.get<RolePageListGetResultModel>({ url: Api.RolePageList, params });

export const getAllRoleList = (params?: RoleParams) =>
  defHttp.get<RoleListGetResultModel>({ url: Api.GetAllRoleList, params });

export const setRoleStatus = (id: number, status: string) =>
  defHttp.post({ url: Api.setRoleStatus, params: { id, status } });

export const updateRole = (data) => defHttp.post({ url: Api.updateRole, params: data });

export const deleteRole = (id) => defHttp.delete({ url: Api.deleteRole, params: { id: id } });
