import './OrderHistoryPage.css'

const OrderHistoryPage = () => {
    const handleCheckToken = async () => {
        alert('clicked')
    }

    return (
        <>
            <h1>Order History Page</h1>
            <button onClick={handleCheckToken}>Check when my login expires</button>
        </>
    )
}

export default OrderHistoryPage