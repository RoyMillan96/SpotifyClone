import "./NavigationBar.css"
import * as Routes from "../../constants/routes"
import {Link} from 'react-router-dom'

const NavigationBar = () => {
    return (
        <header className="NavigationBar">
            <nav>
            <ul>
                <Link to={Routes.HOME}>
                    <li>Home</li>
                </Link>
                <Link to={Routes.SIGN_UP}>
                    <li>Sign Up</li>
                </Link>
                <Link to={Routes.LOGIN}>
                    <li>login</li>
                </Link>
            </ul>
            </nav>
        </header>
    )
}

export default NavigationBar;