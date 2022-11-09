import { request } from '../utils/request';
import { departmentType } from '../components/department/departmentType';

/**
 * 添加部门
 */
export const DepartmentAddApi = <T>(params: departmentType) => request.post<T>('/department/add/', params, { timeout: 15000 });

/**
 * 部门列表
 */
export const DepartmentListApi = <T>() => request.post<T>('/department/departmentList/', { timeout: 15000 });