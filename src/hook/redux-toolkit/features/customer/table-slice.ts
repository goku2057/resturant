import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    value: TableState;
}

type TableState = {
    status: string,
    tableName: number,
    seat: number,
}

const initialState = {
    value: {
        status: 'available',
        tableName: 0,
        seat: 0,
    } as TableState,
} as InitialState;

export const table = createSlice({
    name: 'table',
    initialState,
    reducers: {
        customerTouchTable: (state, action: PayloadAction<{status: string, tableName: number, seat: number}>) => {
            const {status, tableName, seat} = action.payload;

            state.value.status = status;
            state.value.tableName = tableName;
            state.value.seat = seat;
        },
    },
});

export const {customerTouchTable} = table.actions;
export default table.reducer;