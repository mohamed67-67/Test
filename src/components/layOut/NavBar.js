import React from 'react'
import {Link} from 'react-router-dom'
import SignedEndLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'

const NavBar = (props) => {
    const {profile} = props;
    return ( 
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className='brand-logo'>MarioPlan</Link>
                {props.auth.isEmpty ? <SignedOutLinks/> : <SignedEndLinks profile={profile} />  }
                
                
            </div>
        </nav>
     );
}
 

const mapStateToProps = (state) => {
    return{
        auth : state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps) (NavBar);