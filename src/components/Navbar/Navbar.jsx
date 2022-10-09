import './Navbar.css'
import { Link } from 'react-router-dom'
import * as usersService from '../../utilities/users-service'

const Navbar = ({user, setUser}) => {
    // console.log(user)
    return (
        <nav>
            <Link to='/orders/new'>New Order</Link>
            &nbsp;|&nbsp;
            <Link to='/orders/history'>Order History</Link>
            &nbsp;|&nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp;|&nbsp;
            <Link to='' onClick={() => {
                setUser(null)
                usersService.logOut()
                }}>Log Out</Link>
        </nav>
    )
}

export default Navbar