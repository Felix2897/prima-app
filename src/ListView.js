import React from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';


const ListView = ({ id, img, nome, genere }) => {
  return (
    <div className="list-item">
      <img className="list-img" src={img} alt={nome} />
      <div className="list-content">
        <h4 className="list-title">{nome}</h4>
        <p className="list-genre">{genere}</p>
      </div>
      <Link to={`/details/${id}`}>
        <button className="list-button">Info</button>
      </Link>
    </div>
  );
};
export default ListView;
