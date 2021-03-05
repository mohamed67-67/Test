
import {combineReducers} from 'redux'
import AuthReducer from './authReducer'
import ProjectReducer from './ProjectReducer'
import { firestoreReducer } from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const RootReducer = combineReducers({
    project: ProjectReducer,
    auth : AuthReducer,
    firestore: firestoreReducer ,
    firebase : firebaseReducer
})

export default RootReducer;