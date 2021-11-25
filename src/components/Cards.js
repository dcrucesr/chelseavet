import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

export const Cards = () => {
    return (
        <div className="cards">
            <h1>Revisa lo que tenemos para tu mascota.</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/producto01.png"
                            text="El alimento seco para perros Hill's Science Diet Adult está especialmente formulado para abastecer las necesidades de energía de los perros durante la mejor época de su vida. Hecho con ingredientes de alta..."
                            label="Destacado"
                            path="/services"
                        />
                        <CardItem
                            src="images/producto02.png"
                            text="El alimento seco para perros Hill's Science Diet Large Breed Adult 6+ está formulado para las necesidades específicas del envejecimiento para perros de razas grandes. Proporciona nutrición fácil de digerir con una mezcla..."
                            label="Agotado"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/producto01.png"
                            text="El alimento seco para perros Hill's Science Diet Adult está especialmente formulado para abastecer las necesidades de energía de los perros durante la mejor época de su vida. Hecho con ingredientes de alta..."
                            label="Destacado"
                            path="/services"
                        />
                        <CardItem
                            src="images/producto02.png"
                            text="El alimento seco para perros Hill's Science Diet Large Breed Adult 6+ está formulado para las necesidades específicas del envejecimiento para perros de razas grandes. Proporciona nutrición fácil de digerir con una mezcla..."
                            label="Agotado"
                            path="/services"
                        />
                        <CardItem
                            src="images/producto02.png"
                            text="El alimento seco para perros Hill's Science Diet Large Breed Adult 6+ está formulado para las necesidades específicas del envejecimiento para perros de razas grandes. Proporciona nutrición fácil de digerir con una mezcla..."
                            label="Agotado"
                            path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}
