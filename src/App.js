import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Details from "./components/Details/Details";
import styles from "./App.module.css";

const App = () => {
    return (
        <div className={styles.main}>
            <Routes>
                <Route index element={<Navigate to={"/users"} replace/>}/>
                <Route path={"/users"} element={<Users/>}/>
                <Route path={"/users/:userId/posts"} element={<Posts/>}/>
                <Route path={"/users/:userId/posts/:postId/details"} element={<Details/>}/>
            </Routes>
        </div>
    );
};

export default App;