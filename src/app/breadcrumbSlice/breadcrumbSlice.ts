import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
// import { getTagsView } from '../utils/tokenType';

export interface tagsViewListState {
    breadcrumbList: Record<string, string>;
};

const initialState: tagsViewListState = {
    breadcrumbList: {
        '/admin/dashboard': '仪表盘',
        '/admin/user': '用户管理',
        '/admin/user/list': '用户列表',
        '/admin/user/add': '添加用户',
        '/admin/department': '部门管理',
        '/admin/department/list': '部门列表',
        '/admin/department/add': '添加部门',
        '/admin/position': '职位管理',
        '/admin/position/list': '职位列表',
        '/admin/position/add': '添加职位',
        '/admin/excusedabsence': '请假',
        '/admin/workovertime': '加班',
    }
};

export const breadcrumbSlice = createSlice({
    name: 'breadcrumb',
    initialState,
    reducers: {
        // 添加标签
        addbreadcrumb: ({ breadcrumbList }, action) => {
            //如果等于-1说明tabs不存在那么插入，否则什么都不做
            //findindex找角标，循环判断一下，如果等于那么就代表有相同的，就不必添加，如果找不到那就是-1.就添加
            // let result = tagsViewList.findIndex(item => item.name === action.payload.name);
            // if (result === -1) {
            //     tagsViewList.push(action.payload);
            // };
            // return;
        },
    }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { addbreadcrumb } = breadcrumbSlice.actions;

export const selectBreadcrumb = (state: RootState) => state.breadcrumb.breadcrumbList;

export default breadcrumbSlice.reducer;