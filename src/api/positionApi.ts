import { request } from '../utils/request';
import { positionType, positionListType } from '../components/position/positionType'

/**
 * 添加职位
 */
export const PositionAddApi = <T>(params: positionType) => request.post<T>('/job/add/', params, { timeout: 15000 });


/**
 * 职位列表
 */
export const PositionListApi = <T>(params: positionListType) => request.post<T>('/job/list/', params, { timeout: 15000 });