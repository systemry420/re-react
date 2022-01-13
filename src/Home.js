import React, { Fragment } from 'react'
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import App from './App'
import Page1 from './pages/page1';

const Home = () => {
    return (
        <Router>
           <Fragment>
               <ul>
                   <li>
                       <Link to={'/'}>App</Link>
                   </li>
                   <li>
                       <Link to={'/p'}>Page 1</Link>
                   </li>
               </ul>
                <Routes>
                    <Route exact path='/' element={<App />}/>
                    <Route exact path='/p' element={<Page1 />}/>
                </Routes>
           </Fragment>
        </Router>
    )
}

export default Home
