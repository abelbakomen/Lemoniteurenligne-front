import React from 'react';

import './Home.css';
import ControlledCarousel from './ControlledCarousel'


const Home = () => {
return (
	<React.Fragment>
		<section className= 'pb-5'>
	        
			<ControlledCarousel/>

		</section>
	</React.Fragment>
);
};

export default Home;