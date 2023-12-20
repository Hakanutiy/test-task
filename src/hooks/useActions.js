import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actions } from "@/store/reducers/modal.slice.js";

const rootActions = {
    ...actions
};

export const useActions = () => {
    const dispatch = useDispatch();

    return useMemo(() => {
        return bindActionCreators(rootActions, dispatch);
    }, [dispatch]);
};
