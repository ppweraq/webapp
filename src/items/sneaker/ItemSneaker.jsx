import '../item.css'
// import heartImg from './img/icons/heart.png
import { useState } from 'react';


const ItemSneaker = ({sneaker}) => {

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  } 

    return (
        <div className="content">
          <div key={sneaker.id} className="item">
            <img src={"./img/sneaker/" + sneaker.img} alt="a" className='img__product' />
            <div className="descr__title">
              <div className="top__title">
                <b className="item__price">
                    {new Intl.NumberFormat('ru-RU', {
                      style: 'currency',
                      currency: 'RUB',
                      minimumFractionDigits: 0,
                    }).format(sneaker.price)}
                </b>
                <a href="#!">
                  <img onClick={toggleLike} src={liked ? './img/icons/overlay_heart.png' : './img/icons/heart.png'} alt="" className='like__img' />
                </a>
              </div>
                <div className="title__name">
                    {sneaker.title}
                </div>
                <div className="btn__buy">
                  <a href="#!" className='item__btn'>Купить</a>
                </div>
            </div>
          </div>
        </div>
    )
}

export default ItemSneaker