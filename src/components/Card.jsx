
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import imagen2 from '../imagenes/imagen2.jpg';

function Card() {
    return (
        <div>
            <div className="card" style={{ width: '18rem' }}>
                <img src={imagen2} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}
 
export default Card;