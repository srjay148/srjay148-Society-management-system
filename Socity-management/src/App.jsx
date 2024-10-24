import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './component/pages/Registration';
import Login from './component/pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
