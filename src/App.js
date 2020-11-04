import React from 'react';
import './style.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

import './style.css'
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import Calendar from './components/Calendar/Calendar';
import Features from './components/Features/Features';
import { render } from '@testing-library/react';


class App extends React.Component{

	state = {
		rocket: 'Falcon 1',
	};

  render(){
	return (
		<React.Fragment>
		  <Header />
		  <Main rocket={this.state.rocket}/>
		  <Features />
		  <Footer />
		  </React.Fragment>
		);
  }
}

export default App;
