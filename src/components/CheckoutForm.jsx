import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
const CheckoutForm = () => {
  return (
    <div>
      Checkout Form...<Link to={'/'}><Button>Return to Storefront</Button></Link>
    </div>
  )
}

export default CheckoutForm;