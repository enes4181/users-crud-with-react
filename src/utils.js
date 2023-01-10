import store from "./store";
import { closeModal, openModal } from "./store/modal";


export const modalClose = () =>{
    store.dispatch(closeModal())
}
export const modal = ( name,data=false)=>{
    store.dispatch(openModal({
        name,data
    }))
}
