import {createStore} from 'redux';

import  reducers  from './reducer/index';
// creteStore take couple of argument 1st as combinedReducer file and 2nd state 
 const store = createStore(reducers,{})
 export default store;