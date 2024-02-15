import '../item.css'
import { useEffect, useState } from 'react';
import ItemProduct from '../ItemProduct';

const ItemsClothes = () => {

  const [items, setItems] = useState([])

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch ('https://65cc43dcdd519126b83e2b68.mockapi.io/product-clothes')
      const data = await response.json()

      setItems(data)
    }

    fetchData()
  }, [])

    return (
        <main>
          {items.length ? (
            items.map(item => <ItemProduct key= {item.id}  item = {item}/>)
          ) : (
            <p>no clothes available</p>
          )}
            
        </main>
    )

}

export default ItemsClothes 