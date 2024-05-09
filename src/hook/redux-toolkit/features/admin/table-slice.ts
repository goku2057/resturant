import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: TableState;
}

type TableState = {
    status: string,
    tableName: string,
    dish: string[],
}

const initialState = {
    value: {
        status: 'available',
        tableName: 'Table',
        dish: ['dishItem'],
    } as TableState,
} as InitialState;

export const table = createSlice({
    name: 'table',
    initialState,
    reducers: {
        touchTable: (state, action: PayloadAction<{status: string, tableName: string, dish: string[]}>) => {
            const {status, tableName, dish} = action.payload;

            state.value.status = status;
            state.value.tableName = tableName;
            state.value.dish = dish;
        },
    },
});

export const {touchTable} = table.actions;
export default table.reducer;