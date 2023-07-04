import React, {lazy, useEffect} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainerConnect} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {initializeAppTC} from "./redux/app-reducer";
import {StateType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer")
    .then(({DialogsContainer}) => ({default: DialogsContainer})));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer")
    .then(({ProfileContainer}) => ({default: ProfileContainer})));

function App() {
    const dispatch = useDispatch()
    const isInitialized = useSelector<StateType, boolean>(state => state.app.initialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <Preloader/>
    } else {
        return (

            <div className="app-wrapper">
                <HeaderContainerConnect/>
                <Navbar/>
                <div className={"app-wrapper-content"}>
                    <Routes>
                        <Route path="/profile" element={
                            <React.Suspense fallback={<div>Loading...</div>}><ProfileContainer/></React.Suspense>
                        }>
                            <Route path=":userId" element={<ProfileContainer/>}/>
                        </Route>
                        <Route path="/messages" element={
                            <React.Suspense fallback={<div>Loading...</div>}><DialogsContainer/></React.Suspense>
                        }/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>

        );
    }
}


export default App;
