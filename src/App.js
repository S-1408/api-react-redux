import './App.css';
import Header from './container/Header';
import ProductListing from './container/ProductListing';
import ProductDetailing from './container/ProductDetailing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
     <Router>
     <Header/>
       <Switch>
         <Route exact path='/' component={ProductListing}/>
         <Route path='/product/:productId' component={ProductDetailing}/>
         <Route >Page not found</Route>

       </Switch>
     </Router>
     
     
    </div>
  );
}

export default App;
