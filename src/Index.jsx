import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';
import './index.css' // tailwind css

import Home from './pages/Home.jsx';
import ChallengeOne from './pages/challenges/Challengeone.jsx';
import ChallengeTwo from './pages/challenges/ChallengeTwo.jsx';
import ChallengeThree from './pages/challenges/ChallengeThree.jsx';
import ChallengeFour from './pages/challenges/ChallengeFour.jsx';

const root = createRoot(document.querySelector('#root'))
root.render(
  <StrictMode>
    <BrowserRouter basename='/reactjs/'>
      <ScrollToTop />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/c1" element={<ChallengeOne />} />
            <Route path="/c2" element={<ChallengeTwo />} />
            <Route path="/c3" element={<ChallengeThree />} />
            <Route path="/c4" element={<ChallengeFour />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)