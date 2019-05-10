import React from 'react';
import './App.css';
import PostsComponent from "./components/PostsComponent";
import SomeComponent from "./components/SomeComponent";


const App: React.FC = () => {

    console.log("logging from App.tsx")

    return (
        <div className="App">
            <SomeComponent defaultName={"Posts"} title={"all posts"}/>
            <PostsComponent/>
        </div>
    );
}

export default App;
