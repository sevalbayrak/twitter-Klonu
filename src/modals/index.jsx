import { useModal } from "~/store/auth copy/hooks"
import modalss from "~/rouder/Modal";
import { removeModal } from "~/store/auth copy/actions";

export default function Modal(){
    const modal = useModal();
    const currrentModal = modalss.find(m=> m.name === modal.name)
    return(
        <div className="fixed inset-0  bg-[color:var(--background-modal)] flex items-center justify-center z-20">
        <div className="bg-[color:var(--background-primary)]  max-w[600px] max-h[90vh] overflow-auto rounded-2xl">
        {currrentModal && <currrentModal.element close={removeModal}/>}
        </div>
        </div>
    )
}