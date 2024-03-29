import '../item.css'
import heartImg from '../../components/img/heart.png'

const ItemSneaker = ({sneaker}) => {
    return (
      <div className="container">
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
              <a href="http://">
                <img src={heartImg} alt="" className='like__img' />
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