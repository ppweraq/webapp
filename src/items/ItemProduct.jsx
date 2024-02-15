import { Link } from 'react-router-dom';
import LikeBtn from '../components/Button/LikeBtn';
import './item.css'


const ItemProduct = ({item}) => {

  
    return (
        <div className="content">
          <div key={item.id} className="item">
            <img src={"./img/" + item.img} alt="a" className='img__product' />
            <div className="descr__title">
              <div className="top__title">
                <b className="item__price">
                    {new Intl.NumberFormat('ru-RU', {
                      style: 'currency',
                      currency: 'RUB',
                      minimumFractionDigits: 0,
                    }).format(item.price)}
                </b>
                    <LikeBtn/>
              </div>
                <div className="title__name">
                    {item.title}
                </div>
                <div className="btn__buy">
                  <Link to={`/product/${item.id}`}  className='item__btn'>Купить</Link>
                </div>
            </div>
          </div>
        </div>
    )
}

export default ItemProduct