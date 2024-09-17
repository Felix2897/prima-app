import React from 'react'
import { Link } from 'react-router-dom';

import './GridView.css';




const GridView = ({ id, img, nome, genere }) => {
    const alt = "product";
    const color = {
      color: "white"
    };

    return (
      <article>
        <div className="card">
          <img className='getty' src={img} alt={alt} />
          <div className='card_body'>
            <h4 className='film-title'>{nome}</h4>
            <p style={color}><strong>{genere}</strong></p>
            <Link to={`/details/${id}`}>
              <button className='list-button'>Info</button>
            </Link>
          </div>
        </div>
      </article>
    );
  }
export default GridView;
