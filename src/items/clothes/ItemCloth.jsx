import '../item.css'
// import heartImg from './img/icons/heart.png'

const ItemCloth = ({cloth}) => {
  // console.log(el)
    return (
      <div className="content">
        <div key={cloth.id} className="item cloth">
          <img src={"./img/clothes/" + cloth.img} alt="a" className='img__product' />
          <div className="descr__title">
            <div className="top__title">
              <b className="item__price">
                  {new Intl.NumberFormat('ru-RU', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 0,
                  }).format(cloth.price)}
              </b>
              <a href="http://">
                <img src={'./img/icons.heart.png'} alt="" className='like__img' />
              </a>
            </div>
              <div className="title__name">
                  {cloth.title}
              </div>
              <div className="btn__buy">
                <a href="#!" className='item__btn'>Купить</a>
              </div>
          </div>
        </div>
      </div>
    )
}

export default ItemCloth