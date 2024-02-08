import React, {useState} from 'react';
import './product.css'
import heartImg from '../img/heart.png'
import heartImgOverlay from '../img/overlay_heart.png'

const Product = () => {

    const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  }

    return (
        <div>
            <div className='product__head'>Nike Dunk Low Premium Tartan </div>
                    <div className="product__img">
                        <img src='./img/sneaker/blazeo_black.png' alt="" />
                    </div>
                <div className="container">
                    <div className="product__detail">
                        <div className="product__price">
                            <p>
                                {new Intl.NumberFormat('ru-RU', {
                                style: 'currency',
                                currency: 'RUB',
                                minimumFractionDigits: 0,
                                }).format(19600)}
                            </p>
                            <button>
                                <img onClick={toggleLike} src={liked ? heartImg : heartImgOverlay} alt="like"/>
                            </button>
                        </div>

                        <div className="product__size-title">
                            <p>Размер см</p>
                            <a href="#!">Таблица размеров</a>
                        </div>

                        <div className="product__sizes">
                            <ul>20</ul>
                            <ul>21</ul>
                            <ul>22.5</ul>
                            <ul>23</ul>
                            <ul>24</ul>
                            <ul>25</ul>
                            <ul>25.5</ul>
                            <ul>26.5</ul>
                            <ul>27</ul>
                            <ul>28</ul>
                            <ul>29</ul>
                            <ul>29.5</ul>
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
                            <p>Dunk Low Premium “Tartan Plaid” – заниженный релиз от всемирно известного бренда, выполнен из кожи белого цвета. Текстильные вставки из клетчатого материала в зеленом и красном колорвее придают модели стильный и необычный образ.</p>
                        </div>
                        
                        <div className="product__btn">
                            <button>Оплатить</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Product;