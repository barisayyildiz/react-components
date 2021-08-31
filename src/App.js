import './App.scss';
import React, { useState, useContext, useRef } from 'react';
import { Context } from './context'

import BurgerMenu from './components/BurgerMenu';

function App() {
	const myContext = useContext(Context);

  return (
		<div className="App">
			
			<BurgerMenu></BurgerMenu>

		</div>
  );
}

export default App;
