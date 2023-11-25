import {useSelector} from "react-redux";




export const useAccount = () => useSelector(state => {
    console.log(state.auth.currentAccount)
    return state.auth.currentAccount;
});
export const useAccounts = () => useSelector(state =>{
    console.log(state.auth.accounts)
    return state.auth.accounts
} );




