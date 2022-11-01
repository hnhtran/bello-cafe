import './MenuList.css'
import MenuListItem from '../MenuListItem/MenuListItem'

export default function MenuList({ menuItems, handleAddToCart }) {
    const items = menuItems.map(item => 
        <MenuListItem key={item.id} menuItem={item} handleAddToCart={handleAddToCart}/>
    )
    return (
        <main className='MenuList'>{items}</main>
    )
}