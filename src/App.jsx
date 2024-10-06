import { Routes, Route } from 'react-router-dom';
import Indexpage from './page/Indexpage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Indexpage />} /> {/* Route utama "/" untuk halaman Index */}

        <Route path="/indexpage" element={<Indexpage />} /> {/* Pastikan path sesuai keinginan */}
      </Routes>
    </div>
  );
}

export default App;
