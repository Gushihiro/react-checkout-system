import { Outlet, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CartItem from './CartItem';

const Cart = ({ cartItems, addToCart, removeFromCart }) => {

  const calculateTotal = (items) => items.reduce((ack, item) => ack + item.amount * item.price, 0)
  

  return (
    <div className="cartWrap">
      <Card>
        <Card.Header>
          Shopping Cart
          <Link to={"/"}><Button>Continue Shopping</Button></Link>
        </Card.Header>
        {cartItems.length === 0? <p>No Items in Cart</p>: null}
        {cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
        <Card.Footer>
          <h5>Total: $ {calculateTotal(cartItems).toFixed(2)}</h5>
          <Link to={"/checkout"}><Button>Checkout</Button></Link>
        </Card.Footer>
      </Card>
      <Outlet />
    </div>
  )
}

export default Cart;