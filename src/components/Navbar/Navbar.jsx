import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({user, setUser}) => {
    console.log(user)
    return (
        <nav>
            <Link to='/orders/new'>New Order</Link>
            &nbsp;|&nbsp;
            <Link to='/orders/history'>Order History</Link>
            &nbsp;|&nbsp;
            <span>Welcome, {user.name}</span>
        </nav>
    )
}

export default Navbar