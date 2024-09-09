import React from 'react';
import Stars from "./Stars";

type CardProps = {
    title: string,
    img: string
}
const Card: React.FC<CardProps> = ({ title, img }) => {
    return (
        <div>
            <div className='container__card'>
                <div className='card'>
                    <img src={img} width='200' alt=""/>
                    <div className='card__detail'>
                        <h2 className='card__detail-title'>{title}</h2>
                        <Stars prop={3}/>
                        <div className='card__detail-btn'>
                            <a className='card__detail-btn-buy'>Купить</a>
                            <a className='card__detail-btn-all'>Подробнее</a>
                        </div>
                        <div className='card__detail-soc'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
