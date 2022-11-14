import { request } from '../utils/request';
import { departmentType, departmentListType } from '../components/department/departmentType';

/**
 * 添加部门
 */
export const DepartmentAddApi = <T>(params: departmentType) => request.post<T>('/department/add/', params, { timeout: 15000 });

/**
 * 部门列表
 */
export const DepartmentListApi = <T>(params: departmentListType) => request.post<T>('/department/list/', params, { timeout: 15000 });

/**
 * 删除部门
 */
export const DelectDepartmentApi = <T>(params: any) => request.post<T>('/department/delete/', params, { timeout: 15000 });

/**
 * 部门禁启用
 */
export const StatusDepartmentApi = <T>(params: any) => request.post<T>('/department/status/', params, { timeout: 15000 });