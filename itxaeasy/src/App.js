import logo from './logo.svg';
import './App.css';
import AllRoutes from './Routes/AllRoutes';
import Navbar from './Components/Navbar';
import HRAForm from './Components/GptForm';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HRAForm /> */}

      <AllRoutes />
    </div>
  );
}

export default App;
