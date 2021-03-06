import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Projects from './components/Projects'

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/intro" component={ Intro }></Route>
                    <Route path="/blog" component={ Blog }></Route>
                    <Route path="/resume" component={ Resume }></Route>
                    <Route path="/projects" component={ Projects }></Route>
                </Switch>
                <NavBar></NavBar>
            </Router>
            
        </div>
    );
}

export default App;
