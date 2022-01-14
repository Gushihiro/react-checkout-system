import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
const CartItem = ({ item, addToCart, removeFromCart }) => {
  return (
    <div className="cartItemWrap">
      <Card.Title><h4>{item.title}</h4></Card.Title>
      <div className='information'>
        <p>Price: ${item.price}</p>
        <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        <Button
          onClick={() => removeFromCart(item.id)}
        >
           -
        </Button>
        {item.amount}
        <Button
          onClick={() => addToCart(item)}
        >
           +
        </Button>
      </div>
    <img src={item.image} alt={item.title} />
    </div>
  )
}

export default CartItem;