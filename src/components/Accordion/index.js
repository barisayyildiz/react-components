import React, { useState } from 'react'
import './style.scss'

function Accordion({items}) {
	const [activeItem, setActiveItem] = useState(null);

	const handleClickEvent = (e) => {
		const node = e.currentTarget
		if(node.classList.contains("active")){
			setActiveItem(null)
		}else{
			const newIndex = node.getAttribute("data-key")
			setActiveItem(Number(newIndex))
		}
	}

	return (
		<div className="accordion-wrapper">
			{
				items.map((item, key) => {
					return(
						<div onClick={(e) => handleClickEvent(e)} data-key={key} className={`accordion-item` + (activeItem==key ? ' active' : '')}>
							<div className="accordion-item-title-wrapper">
								<h3 className="accordion-item-title">{item.title}</h3>
								{
									(activeItem == key ? <i class="fas fa-minus"></i> : <i class="fas fa-plus"></i>)
								}
							</div>
							<div className="accordion-item-info">
								<p>{item.info}</p>
							</div>
						</div>
					)
				})
			}			
		</div>
	)
}

export default Accordion
