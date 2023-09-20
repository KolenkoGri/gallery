import Header from './components/Header';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {store} from './components/store';

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Main/>
    </Provider>
  );
}

export default App;