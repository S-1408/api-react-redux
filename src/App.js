import './App.css';
import ProductListing from './container/ProductListing';
import ProductDetailing from './container/ProductDetailing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignUp from './page/signup/signup';
import SignIn from './page/signIn';
import Navbar from './NavBar/Navbar';

function App() {
  return (
    <div className="App">
     
     <Router>
    <Navbar/>
       <Switch>
         <Route path='/productlist' component={ProductListing}/>
      <Route  path='/signup' component={SignUp}/>
         <Route exact path='/' component={SignIn}/> 

         <Route path='/product/:productId' component={ProductDetailing}/>
         <Route >Page not found</Route>
{/* <Route path=/> */}
       </Switch>
     </Router>
     
     
    </div>
  );
}

export default App;
