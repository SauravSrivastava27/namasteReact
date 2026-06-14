import { HEADER_LOGO_URL } from '../utils/constant';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={HEADER_LOGO_URL} alt="google logo" />
            </div>
            <div className="menu-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;