import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Item = ({ item, addToCart }) => {
  return(

  <div className="itemWrap">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Title>{item.title}</Card.Title>
      <Card.Body>
        <Card.Subtitle>
          <h4>$ {item.price}</h4>
        </Card.Subtitle>
        <Button 
          variant="primary"
          onClick={()=>addToCart(item)}
        >Add to Cart</Button>
      </Card.Body>
    </Card>
  </div>
  )
}

export default Item