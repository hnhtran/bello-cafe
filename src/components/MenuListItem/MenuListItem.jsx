import './MenuListItem.css'

export default function MenuList({ menuItem, handleAddToCart }) {
    return (
        <div className="MenuListItem">
            <div className="emoji flex-ctr-ctr">{menuItem.emoji}</div>
            <div className="name">{menuItem.name}</div>
            <div className="buy">
                <span>${menuItem.price.toFixed(2)}</span>
                <button className="btn-sm" onClick={() => handleAddToCart(menuItem._id)}>ADD</button>
            </div>
        </div>
    )
}