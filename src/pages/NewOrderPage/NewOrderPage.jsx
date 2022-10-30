import './NewOrderPage.css'
import { useState, useEffect, useRef } from 'react'
import * as itemsAPI from '../../utilities/items-api'
import { Link } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import MenuList from '../../components/MenuList/MenuList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import CategoryList from '../../components/CategoryList/CategoryList'
import UserLogOut from '../../components/UserLogOut/UserLogOut'

const NewOrderPage = () => {
    const [menuItems, setMenuItems] = useState([])
    const [activeCat, setActiveCat] = useState('')
    const categoriesRef = useRef([])

    useEffect(() => {
        async function getItems() {
            const items = await itemsAPI.getAll()
            categoriesRef.current = items.reduce((cats, item) => {
                const cat = item.category.name
                return cats.includes(cat) ? cats : [...cats, cat]
            }, [])
            setActiveCat(categoriesRef.current[1])
            setMenuItems(items)
        }
        getItems()
    }, [])
    return (
        <main className='NewOrderPage'>
            <aside>
                <Logo />
                <CategoryList
                    categories={categoriesRef.current}
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
                    />
                    <Link to='/orders/history' className='button btn-sm'>Previous Orders</Link>
                    <UserLogOut user={user} setUser={setUser}/>
            </aside>
            <MenuList
                menuItems={menuItems.filter(item => item.category.name === activeCat)}
                />
            <OrderDetail />
        </main>
    )
}

export default NewOrderPage