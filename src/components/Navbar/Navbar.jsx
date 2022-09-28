import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <Link to='/orders/new'>New Order</Link>
            &nbsp;|&nbsp;
            <Link to='/orders/history'>Order History</Link>
        </nav>
    )
}

export default Navbar