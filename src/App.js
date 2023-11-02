import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import store from './redux/store';
import { Provider } from 'react-redux';
function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Banner />
        <ProductList />
      </div>
    </Provider>
  );
}

export default App;
