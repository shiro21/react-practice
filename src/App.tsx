import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Guard
import { ProtectRouter } from './ProtectRouter';

// Components
import { Login } from './components/login/Login';
import { Main } from './components/main/Main';
import { CRUD } from './components/crud/CRUD';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectRouter />}>
          <Route path="/" element={<Main />} />
          <Route path="/crud" element={<CRUD />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
