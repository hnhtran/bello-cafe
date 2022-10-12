import './OrderHistoryPage.css'
import { checkToken } from '../../utilities/users-service'

const OrderHistoryPage = () => {
    const handleCheckToken = async () => {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <>
            <h1>Order History Page</h1>
            <button onClick={handleCheckToken}>Check when my login expires</button>
        </>
    )
}

export default OrderHistoryPage