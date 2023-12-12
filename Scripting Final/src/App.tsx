import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <Outlet />
      {/* <Footer /> */}
    </Provider>
  );
}

export default App;
