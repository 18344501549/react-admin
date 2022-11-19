import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
// import { getTagsView } from '../utils/tokenType';

export interface tagsViewList {
    path: string;
    name: string;
    affix?: boolean;
}

export interface tagsViewListState {
    tagsViewList: tagsViewList[];
    tagsViewRoutes: tagsViewList[]
};

const initialState: tagsViewListState = {
    tagsViewList: [{ path: '/admin/dashboard', name: '仪表盘', affix: true }],
    tagsViewRoutes: [
        {
            path: '/admin/dashboard',
            name: '仪表盘'
        },
        {
            path: '/admin/user/list',
            name: '用户列表'
        },
        {
            path: '/admin/user/add',
            name: '添加用户'
        },
        {
            path: '/admin/department/list',
            name: '部门列表'
        },
        {
            path: '/admin/department/add',
            name: '添加部门'
        },
        {
            path: '/admin/position/list',
            name: '职位列表'
        },
        {
            path: '/admin/position/add',
            name: '添加职位'
        },
        {
            path: '/admin/excusedabsence',
            name: '请假'
        },
        {
            path: '/admin/workovertime',
            name: '加班'
        }
    ]
};

export const tagsViewSlice = createSlice({
    name: 'tagsView',
    initialState,
    reducers: {
        // increments: state => {
        //      Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
        //      并不是真正的改变状态值，因为它使用了 Immer 库
        //      可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
        //      不可变的状态
        //     state.value += 1
        //     console.log(1);

        // },
        // 添加标签
        addTagsView: ({ tagsViewList }, action) => {
            //如果等于-1说明tabs不存在那么插入，否则什么都不做
            //findindex找角标，循环判断一下，如果等于那么就代表有相同的，就不必添加，如果找不到那就是-1.就添加
            let result = tagsViewList.findIndex(item => item.name === action.payload.name);
            if (result === -1) {
                tagsViewList.push(action.payload);
            };
            return;
        },
        //关闭标签
        deleteTags: ({ tagsViewList }, action) => {
            //同上，找角标，然后用角标的位置对应删除一位。splice：这是数组的删除方法
            let result = tagsViewList.findIndex(item => item.name === action.payload.name);
            tagsViewList.splice(result, 1);
        },

    }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { addTagsView, deleteTags } = tagsViewSlice.actions;

export const selectTagsView = (state: RootState) => state.tagsView.tagsViewList;

export const selectTagsViewRoutes = (state: RootState) => state.tagsView.tagsViewRoutes;

export default tagsViewSlice.reducer;