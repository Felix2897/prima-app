import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FilmDetail.css';

const FilmDetail = ({ lista }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const film = lista.find(item => item.id === parseInt(id));

  if (!film) {
    return <div>Film non trovato</div>;
  }

  return (
    <div className="film-detail">
      <img className="film-img" src={film.img} alt={film.nome} />
      <div className="film-info">
        <h2>{film.nome}</h2>
        <p><strong>Genere:</strong> {film.genere}</p>
       <p><strong>Rating utenti:</strong> 4.5/5</p>

        <button className="back-button" onClick={() => navigate(-1)}>
          Lista Film e serie Tv
        </button>
      </div>
    </div>
  );
};


export default FilmDetail;
