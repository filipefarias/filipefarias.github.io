import './Social.css'

function Social(): JSX.Element {
    return <div className="social-info">
        <a href="https://api.whatsapp.com/send?phone=5551981666171&text=Olá, gostaria de conversar com você" target="_blank" rel="noopener"><i className="fa-brands fa-whatsapp"></i></a>
        <a href="https://github.com/filipefarias" target="_blank"><i className="fa-brands fa-square-github"></i></a>
        <a href="https://www.linkedin.com/in/filipefarias/?locale=en_US" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
    </div>
}

export default Social