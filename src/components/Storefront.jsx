import { Link } from 'react-router-dom'
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Item from './Item'

const Storefront = ({ data, setCartItems }) => {

  const getTotalItems = (items) => items.reduce((ack, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if(isItemInCart) {
        return prev.map(
          item => item.id===clickedItem.id 
            ? { ...item, amount: item.amount + 1}
            : item
        )
      }
      return [...prev, { ...clickedItem, amount: 1}];
    });
  };

  return (
    <CardGroup>
      <Link to={'/cart'}><h3>Click for Cart</h3></Link>
      <Row xs={1} md={3} lg={5}>
        {data?.map(item => (
          <Col key={item.id}>
            <Item item={item} addToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </CardGroup>
  )
}

export default Storefront;