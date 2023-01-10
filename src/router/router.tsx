import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import CardById from '../components/CardById';
import Home from '../Home';

const Routter = () => {
  return (
    <BrowserRouter>
      <header className='App-header'>
        <h1>
          <img
            src='https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png'
            alt='Wild Code School logo'
          />
          Les Argonautes
        </h1>
        <nav>
          <NavLink to='/'>Home</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/argonaute/:idEquipage" element={<CardById />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Routter;
