import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import modal from "./auth copy";
import appearance from "./appearance";


const store = configureStore({
	reducer: {
        auth,
		modal,
		appearance,
	}
})

console.log(store.getState().auth);


export default store