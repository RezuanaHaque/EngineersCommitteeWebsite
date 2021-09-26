import './App.css';
import Faculties from './components/Faculties/Faculties';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="bodyColor">
      <div>
        <Header></Header>
      </div>
      <div className="faculty-section">
        <Faculties></Faculties>
      </div>
    </div>
  );
}

export default App;
