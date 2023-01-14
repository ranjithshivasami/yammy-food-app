import logo from '../images/logo.png';
const Header = () => {
    return <div className='container header'>
            <a href="/">
                <img src={logo} width="100" alt="Food Logo" /></a>
            <ul className="nav">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Blog</li>
            </ul>
        </div>
}

export default Header;