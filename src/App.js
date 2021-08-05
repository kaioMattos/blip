import './App.css';
import Header from './components/Header';
import Content from './components/home/Content';
import ContactDetail from './components/detailContact'
import Footer from './components/Footer';
import {Provider} from 'react-redux';
import store from './store'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header></Header>
            <Route exact path="/" component={Content} />
            <Route path="/ContactDetail/:idContact" component={ContactDetail} />          
          <Footer></Footer>
        </div>
      </Router>
    </Provider>
  );
}
export default App;
