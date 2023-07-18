import Social from '../Aside/Social/social'
import useModal from '../../hooks/useModal'
import MenuMobile from '../MenuMobile/MenuMobile'
import './Header.css'

interface Props {
    title: string
}

function Header(props: Props): JSX.Element {
    const {isOpen, toggle } = useModal()
    return <header className="site-header">
        <div className="menu-nav">
        <button id='menu-nav' className="fa-solid fa-bars" onClick={toggle}></button>
        <MenuMobile isOpen={isOpen} toggle={toggle} />
        <h1>{props.title}</h1>
        </div>
        <Social />
    </header>
}

export default Header