import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import GridView from './GridView';
import ListView from './ListView';
import FilmDetail from './FilmDetail';
import lista from './lista.json';

import Fuse from 'fuse.js';

function App() {
  const [view, setView] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [filterKey, setFilterKey] = useState('');

  const fuse = new Fuse(lista, {
    keys: ['nome', 'descrizione'],
    threshold: 0.3
  });

  const filteredList = searchTerm
    ? fuse.search(searchTerm).map(result => result.item)
    : lista;

  const genreFilteredList = filterKey
    ? filteredList.filter(item => item.genere === filterKey)
    : filteredList;

  const sortedList = [...genreFilteredList].sort((a, b) => {
    if (sortKey === 'nome') {
      return a.nome.localeCompare(b.nome);
    } else if (sortKey === 'genere') {
      return a.genere.localeCompare(b.genere);
    }
    return 0;
  });

  return (
    <Router>
      <Routes>

        <Route path="/" element={
          <>
            <h1 className="title">Lista di film e serie TV</h1>


            <div className="controls-container">
              <input
                type="text"
                placeholder="Cerca..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <select
                className="sort-select"
                value={sortKey}
                onChange={e => setSortKey(e.target.value)}
              >
                <option value="">Ordina per...</option>
                <option value="nome">Nome</option>
                <option value="genere">Genere</option>
              </select>
              <select
                className="filter-select"
                value={filterKey}
                onChange={e => setFilterKey(e.target.value)}
              >
                <option value="">Filtra per genere...</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Azione">Azione</option>
                <option value="Commedia">Commedia</option>
                <option value="Serie TV">Serie TV</option>
                <option value="Cartoni Animati">Cartoni Animati</option>
              </select>
              <button className="toggle-button" onClick={() => setView(view === 'grid' ? 'list' : 'grid')}>
                {view === 'grid' ? 'Mostra come lista' : 'Mostra come griglia'}
              </button>
            </div>




            <section className={` ${view === 'grid' ? 'grid' : 'list list-item'}`}>
              {view === 'grid' ? (
                sortedList.map(item => (
                  <GridView key={item.id} {...item} />
                ))
              ) : (
                sortedList.map(item => (
                  <ListView key={item.id} {...item} />
                ))
              )}
            </section>
          </>
        } />


        <Route path="/details/:id" element={<FilmDetail lista={lista} />} />
      </Routes>
    </Router>
  );
}

export default App;
