import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createStore, applyMiddleware, compose} from 'redux'
import RootReducer from './reducers/rootReducer';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore, getFirestore} from 'redux-firestore'
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import firebaseConfig from './config/fbConfig'

const store = createStore(RootReducer,
  compose(

  applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
  reactReduxFirebase(firebaseConfig, {useFirestoreForProfile: true, userProfile: 'users' ,attachAuthIsReady : true}),
  reduxFirestore(firebaseConfig)
  )
);

store.firebaseAuthIsReady.then(() => {
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <App/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );

})
