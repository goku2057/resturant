import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './features/admin/table-slice';
import orderReducer from './features/admin/order-slice';
import customerTableReducer from './features/customer/table-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        tableReducer,
        orderReducer,
        customerTableReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;