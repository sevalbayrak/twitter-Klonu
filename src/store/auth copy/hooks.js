import {useSelector} from "react-redux";




export const useModal = () => useSelector(state => {
    
    return state.modal.modal;
});





