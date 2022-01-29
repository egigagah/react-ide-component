import logo from './logo.svg';
import './App.css';
import {IdeComponent} from 'devices-medias-component/dist/cjs'
import 'devices-medias-component/dist/cjs/index.css'

function App() {
  return (
    <div className="App">
      <h1>Place Component Here</h1>
      <h3>Ide Component</h3>
      <IdeComponent />
    </div>
  );
}

export default App;
