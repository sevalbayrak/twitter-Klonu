import { useDispatch } from "react-redux";
import store from "~/store";
import {_setModal , _removeModal} from "~/store/auth copy";

export const setModal = (name,data=false) => store.dispatch(_setModal({name,data}));
export const removeModal =()=> store.dispatch(_removeModal())
 