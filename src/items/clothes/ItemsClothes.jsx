import ItemCloth from './ItemCloth'
import '../item.css'
import { clothes } from '../../clothes.data';

const ItemsClothes = () => {
  // console.log(clothes)
    return (
        <main>
          {clothes.length ? (
            clothes.map(cloth => <ItemCloth key= {cloth.id}  cloth = {cloth}/>)
          ) : (
            <p>no clothes available</p>
          )}
            
        </main>
    )

}

export default ItemsClothes 