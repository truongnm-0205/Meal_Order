import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import { useContext} from 'react'
import CartItem from './CartItem'



const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const handleOnAddToCart = (item) => {
        cartCtx.addItem({...item, amount : 1})
    }
    const handleOnRemoveToCart = (id) => {
        cartCtx.removeItem(id)
    }

    

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    return (
        <Modal onCloseModal={props.onCloseCart}>
            <div className={classes.total}>
                <span>Phone Number</span>
                <input style={{width:"60%",padding:"10px",borderRradius:"10px"}} type="number" value={props.phone} onChange={props.onChangePhone}></input>
            </div>
            
            <ul className={classes['cart-items']}>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.amount}
                        onAdd={handleOnAddToCart.bind(null,item)}
                        onRemove={handleOnRemoveToCart.bind(null,item.id)}
                    >
                    </CartItem>
                ))}
            </ul>
            
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseCart}>Close</button>
                {hasItems && <button onClick={() => alert("Order successfully")} className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart