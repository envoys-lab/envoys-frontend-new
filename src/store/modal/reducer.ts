import { createAction, createReducer } from "@reduxjs/toolkit";
import ModalList, { Modals } from "../../components/Modal/List";

const initalState = {
    view: ModalList.Unknown
};


export const modalSetAction = createAction<ModalList>("modal/set");
export const modalCloseAction = createAction("modal/close");


const modalReducer = createReducer(initalState, builder => {
    builder.addCase(modalSetAction, (state, action) => {
        state.view = action.payload;
    })
    .addCase(modalCloseAction, (state) => {
        state.view = ModalList.Unknown;
    })
});

export default modalReducer;