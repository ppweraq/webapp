import ItemSneaker from './ItemSneaker'
import '../item.css'
import { sneakers } from '../../sneakers.data';

const ItemsSneakers = () => {
    return (
        <main>
          {sneakers.length ? (
            sneakers.map(sneaker => <ItemSneaker key= {sneaker.id}  sneaker = {sneaker}/>)
          ) : (
            <p>no sneakers available</p>
          )}
            
        </main>
    )

}

export default ItemsSneakers