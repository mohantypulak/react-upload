import logo from './logo.svg';
import './App.css';
import PizzaHut from "./components/PizzaHut";
import {Provider} from 'react-redux'
import {store} from './redux/store'

function App() {
  return (
    <div className="App">
     <nav className="navbar navbar-nav bg-primary">
        <a href="/" className="navbar-brand text-white">React redux</a>
     </nav>
        <Provider store={store}>
            <PizzaHut/>
        </Provider>
    </div>
  );
}

export default App;
