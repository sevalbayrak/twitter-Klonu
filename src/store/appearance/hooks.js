import {useSelector} from "react-redux";

export const useAppearance = () => useSelector(state => {
    return state.appearance})



