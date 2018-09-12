import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import DataManager from './modules/DataManager'
import Homepage from './components/homepage/Homepage'
import Login from './components/login/Login'
import Register from './components/register/Register'
import MangaList from './components/manga/MangaList'
import MangaDetail from './components/manga/MangaDetail'

export default class ApplicationViews extends Component {

    isAuthenticated = () => localStorage.getItem("credentials") !== null

    state = {
        users: [],
        manga: [],
        image: {},
        isLoaded: false
    }

    addUser = users => DataManager.add("users", users)
        .then(() => DataManager.getAll("users"))
        .then(users => this.setState({
            users: users
        }))

    deleteUser = id => DataManager.delete("user", id)
        .then(() => DataManager.getAll("user"))
        .then(user => this.setState({
            user: user
        }))

    editUser = (id, user) => DataManager.edit("user", id, user)
        .then(() => DataManager.getAll("user"))
        .then(user => this.setState({
            user: user
        }))

    componentDidMount() {

        const newState = {}

        DataManager.getAll("users")
            .then(allUsers => {
                newState.users = allUsers
            }).then(() => {
                DataManager.getAll("manga")
                    .then(allManga => {
                        newState.manga = allManga
                    })
                    .then(() => {
                        this.setState(newState)
                        console.log(newState)
                    })
            })
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" render={(props) => {
                    return <Register {...props}
                        addUser={this.addUser}
                        users={this.state.users} />
                }} />
                <Route exact path="/manga" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <MangaList {...props}
                            manga={this.state.manga} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />
                <Route exact path="/manga/:mangaId" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <MangaDetail {...props}
                            manga={this.state.manga} />
                    } else {
                        return <Redirect to="/" />
                    }
                }} />
            </React.Fragment >
        )

    }
}