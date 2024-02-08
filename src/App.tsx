import React from 'react';
import HomePage from './components/Home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonDetails from './components/PokemonDetails/PokemonDetails';
import { Container } from 'react-bootstrap';
// import './App.css'

const App: React.FC = () => {
  const url: string = 'https://pokeapi.co/api/v2/pokemon';
  return (
    <Container fluid="sm">
      <BrowserRouter>
        <Routes>
          <Route path="/pokemon" element={<HomePage url={url} />} />
          <Route path="/pokemon/:idx" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
};

export default App;
