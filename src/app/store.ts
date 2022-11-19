import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import tagsViewSlice from './tagsViewSlice/tagsViewSlice';
import breadcrumbSlice from './breadcrumbSlice/breadcrumbSlice';


export const store = configureStore({
    reducer: {
        tagsView: tagsViewSlice,
        breadcrumb: breadcrumbSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;