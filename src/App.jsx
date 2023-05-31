import './App.css';
import { Header } from './components/Header';
import { Description } from './components/Description';
import { Counter } from './components/Counter'

function App() {
  return (
    <div className="App">
      <Header />
      <Description />
      <Counter label="First"/>
      <Counter label="Second"/>
      <Counter label="Third"/>
    </div>
  );
}

export default App;
