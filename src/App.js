import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './component/Pages/Home';
import AboutUs from './component/Pages/AboutUs'
import Footer from './component/Footer';
import Services from './component/Pages/Services';
import StudyAbroad from './component/Pages/StudyAbroad';
import Testimonial from './component/Pages/Testimonial';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us'  component={AboutUs} />
          <Route path='/services'  component={Services} />
          <Route path='/study-abroad' component={StudyAbroad} />
          <Route path='/testimonial' component={Testimonial} />
        </Switch>
        <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
