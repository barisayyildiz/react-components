import React, { useRef, useState } from 'react'
import './style.scss'

function BurgerMenu() {
	const myRef = useRef();
	const [menuOpen, setMenuOpen] = useState(false);

	const handleOnClick = () => {
		if(menuOpen){
			myRef.current.classList.add('open');
		}else{
			myRef.current.classList.remove('open');
		}
		setMenuOpen(!menuOpen);
	}

	return (
		<div ref={myRef} onClick={handleOnClick} className="burger-wrapper">
			<div className="burger-meat"></div>
		</div>
  );
}

export default BurgerMenu
