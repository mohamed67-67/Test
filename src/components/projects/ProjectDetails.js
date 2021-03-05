import React from 'react'
import {Redirect, Route, useParams} from 'react-router-dom'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import moment from 'moment'
const ProjectDetails=({projects,auth}) => {

    const {id} = useParams()
    
    if(! auth.uid) return <Redirect to='/signin' />
    return (
        <Route path={`/project/${id}`}>

            <div className="container section project-details">
                <div className="card z-depth-0">
                    {projects && projects.filter(project =>  project.id === id).map(project => {
                        return (
                            <div>
                                <div className="card-content">
                                    <span className="card-title"> {project.title}- { id } </span>
                                    <p> {project.content} </p>
                                </div>
                                <div className="card-action grey lighten-4 grey-text">
                                <div>{project.authorFirstName} {project.authorLastName} </div>
                                <div> {moment(project.createdAt.toDate()).calendar()} </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Route>
    )
}

const mapStateToProps = state => {
    return {
        projects : state.firestore.ordered.projects,
        auth : state.firebase.auth
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection : 'projects'}
    ])
) (ProjectDetails)
