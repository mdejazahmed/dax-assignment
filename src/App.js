import './App.css';
import { Bottom } from './components/bottom/Bottom';
import { Top } from './components/top/Top';

function App() {
  return (
    <div className="App">
    <div className="appWrpper">
    <Top/>
    <Bottom/>
    </div>
    </div>
  );
}

export default App;
