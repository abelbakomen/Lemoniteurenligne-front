import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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

		fetch(apiBaseUrl+"/formation")
			.then((response) => response.json())
			.then((actualData) => {
				console.log(actualData)
				
				this.setState({
					isLoaded: true,
					formations: actualData,
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

			{/*<!-- Title page -->*/}
				<section className="bg-img-1 bg-overlay-3" styles="background-image: url('images/bg-title-01.jpg');">
					<div className="">
						<div className="flex-w flex-sb-m ">
							<div className="pb-3">
								<div className="flex-w px-5  s-txt19">
									<span>
										<Link  to="/"  href="#/" className="s-txt19 hov-color-main trans-02">
					                      <i className="fas fa-home"></i>
					                      Acceuil
					                    </Link>
										<span className="s-txt19 p-l-6 p-r-9"> / </span>
									</span>

									<span>
										<span className="s-txt19">
											<Link  to="/formations"  href="#/formations" className="">
												<i className="fas fa-university"></i>
												Formations
											</Link>
										</span>
									</span>
								</div>

								<h3 className="text-center"><strong>Nos Formations</strong></h3>

							</div>

						</div>
					</div>
				</section>

				<section className="formation-list">
				<div className="text-center container py-5">
				
				  
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
								<Link  to={"/formations/"+formation.id } params={{ id: formation.id }} className="s-txt19 hov-color-main trans-02">	
			        	 	<div className= "card-header bg-secondary text-white">
				            <h6 className="card-title mb-0 text-capitalize"> {formation.name}</h6>
			        	 	</div>
				        
				         	<div className="card-body bg-image hover-zoom ripple ripple-surface ripple-surface-light"
				            data-mdb-ripple-color="light">
										<img className="img-responsive w-50" alt="" src={formation.featured_image} />
										
										<p>{formation.description}</p>
					            
				          </div>
								</Link>
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
