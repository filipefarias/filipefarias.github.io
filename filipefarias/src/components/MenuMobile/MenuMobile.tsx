import Menu from '../Aside/Navigation/navigation'
import './MenuMobile.css'

interface ModalType {
    isOpen: boolean,
    toggle: () => void
}

function MenuMobile(props: ModalType): JSX.Element {
    return (
        <>
            {props.isOpen && (
                <div className="modal-overlay" onClick={props.toggle} >
                    <div className="modal-box">
                       <Menu />
                    </div>
                </div>
            )}
        </>
    )
}

export default MenuMobile