import './NewOrderPage.css'
import { useState, useEffect, useRef } from 'react'
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo/Logo'
import MenuList from '../../components/MenuList/MenuList'
import OrderDetail from '../../components/OrderDetail/OrderDetail'
import CategoryList from '../../components/CategoryList/CategoryList'
import UserLogOut from '../../components/UserLogOut/UserLogOut'

const NewOrderPage = ({user, setUser}) => {
    const [menuItems, setMenuItems] = useState([])
    const [activeCat, setActiveCat] = useState('')
    const [cart, setCart] = useState(null)
    const categoriesRef = useRef([])
    const navigate = useNavigate()

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

        async function getCart() {
            const cart = await ordersAPI.getCart()
            setCart(cart)
        }
        getCart()
    }, [])

    async function handleAddToCart(itemId) {
        const updatedCart = await ordersAPI.addItemToCart(itemId)
        setCart(updatedCart)
    }

    async function handleChangeQty(itemId, newQty) {
        const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty)
        setCart(updatedCart)
    }

    async function handleCheckout() {
        await ordersAPI.checkout()
        navigate('/orders')
    }

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
                handleAddToCart={handleAddToCart}
                />
            <OrderDetail order={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout}/>
        </main>
    )
}

export default NewOrderPage