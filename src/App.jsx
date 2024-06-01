import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from './components/Button';
import Header from './components/Header';
import Hero from './components/Hero';
import Planets from './pages/Planets';
import Characters from './pages/Characters';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Routes>
          <Route path="star-wars-web/" element={<Hero />} />
          <Route path="star-wars-web/planets" element={<Planets />} />
          <Route path="star-wars-web/characters" element={<Characters />} />
        </Routes>
      </div>
      <ButtonGradient />

    </>
  );
};

export default App;
