import React from 'react';
import Cards from './Cards';

const CardList = ({robots}) => {
	return (
		<div>
		{
			robots.map((user,i) => {
				return (
					<Cards 
					key={i}
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email}
					/>
				)	
			})
		}				
		</div>	
		);
	}
	export default CardList;



{/* <OR>
const CardList = ({robots}) => {
	const cardArray=
		 robots.map((user,i) => {
				return 
					<Cards 
					key={i}
					id={robots[i].id} 
					name={robots[i].name} 
					email={robots[i].email} />
					
	})
	 return(
		 <div>
		 {cardArray}
		 </div>
	 );
}
</OR> */}


