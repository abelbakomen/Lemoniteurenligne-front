import React, { Component } from 'react';

import './Formations.css';

import {apiBaseUrl} from '../../settings'

class Formations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			formations: []
		};
	}

	componentDidMount() {
		fetch('http://localhost:8000/api/formation');

		fetch(apiBaseUrl+"/formation", {
			headers:{"Access-Control-Allow-Origin":"*"}
		})
			.then(res => {
				res.headers.set("Access-Control-Allow-Origin","*");
				
				res.headers.set("access-control-allow-origin","*");
				
				console.log(res.headers.get("Access-Control-Allow-Origin"));
				
				res.json();
				
				return res;

			})
			.then(
				(result) => {
					//console.log(result);
					this.setState({
						isLoaded: true,
					    formations: result,
					});
				},
			// Remarque : il est important de traiter les erreurs ici
			// au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
			// des exceptions provenant de réels bugs du composant.
			(error) => {
				this.setState({
				    isLoaded: true,
				    error
			  	});
			}
		)
		
		
	}

	render() {
    	var { error, isLoaded, formations } = this.state;
    	
    	formations = formations.concat(formations.concat(formations));

		return (
		  <React.Fragment>

		  	<section className="formation-list">
				<div className="text-center container py-5">
				  <h4 className="mt-4 mb-5"><strong>Formations</strong></h4>

			    {(error) ?	
			      <div className="card">Erreur : {error.message}</div>
					: 
					(! isLoaded)?
			     		<div>Chargement…</div>
			     	:
				    
			   	  <div className="row">
				  	{formations.map(formation => (
				      <div className="col-lg-4 col-md-6 mb-4">
				        <div className="card ">
			        	 	<div className= "card-header bg-secondary text-white">
				              <h6 className="card-title mb-0 text-capitalize"> {formation.name}</h6>
			        	 	</div>
				        
				         	<div className="card-body bg-image hover-zoom ripple ripple-surface ripple-surface-light"
				            data-mdb-ripple-color="light">
					            <img className="img-responsive w-100" alt="" src={formation.featured_image}
					               />
					            
					            <p>{formation.description}</p>
					            
				          	</div>
				        </div>
				      
				      </div>
				    ))}


			      </div>
				}
		

				</div>
			</section>

	      </React.Fragment>
    	);
  }
}

export default Formations;
