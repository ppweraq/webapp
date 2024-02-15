import './product.css'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackBtn from '../../components/Button/BackBtn';
const Product = () => {
    
    // const {category} = <ProductData/>
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
    setLiked(!liked);
  }

    const {id} = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        if(!id) return
        const fetchData = async () => {
        const response = await fetch (`https://65cc43dcdd519126b83e2b68.mockapi.io/product?id=${id}`)
        const data = await response.json()
    
          setItem(data[0])
        }
    
        fetchData()
      }, [id])

    return (
        <div>
            <BackBtn/>
            <div  key={item.id} className='product__head'>{item.title} </div>
                    <div className="product__img"> 
                        <img src={"../img/" + item.img} alt="" />
                    </div>
                <div className="container">
                    <div className="product__detail">
                        <div className="product__price">
                            <p>
                                {new Intl.NumberFormat('ru-RU', {
                                style: 'currency',
                                currency: 'RUB',
                                minimumFractionDigits: 0,
                                }).format(item.price)}
                            </p>
                                {/* <LikeBtn/> */}
                                <button>
                                <img onClick={toggleLike} src={liked ? '../img/icons/overlay_heart.png' : '../img/icons/heart.png'} alt="like"/>
                                </button>
                        </div>

                        <div className="product__size-title">
                            <p>Размер см</p>
                            <a href="#!">Таблица размеров</a>
                        </div>

                        <div className="product__sizes">
                            <button className='btn-sizes'>20</button>
                            <button className='btn-sizes'>21</button>
                            <button className='btn-sizes'>22.5</button>
                            <button className='btn-sizes'>23</button>
                            <button className='btn-sizes'>24</button>
                            <button className='btn-sizes'>25</button>
                            <button className='btn-sizes'>25.5</button>
                            <button className='btn-sizes'>26.5</button>
                            <button className='btn-sizes'>27</button>
                            <button className='btn-sizes'>28</button>
                            <button className='btn-sizes'>29</button>
                            <button className='btn-sizes'>29.5</button>
                        </div>

                        <div className="product__nav">
                            <div className="prod prod_under">
                                <a href="#!">Описание</a>
                            </div>
                            <div className="prod">
                                <a href="#!">Доставка</a>
                            </div>
                            <div className="prod">
                                <a href="#!">Возврат</a>
                            </div>
                        </div>

                        <div className="product__title">
                            <h4>Описание</h4>
                            <p>{item.description}`</p>
                        </div>
                        
                    </div>
                </div>
                <div className="product__btn">
                    <button>Оплатить</button>
                </div>
        </div>
    );
};

export default Product;