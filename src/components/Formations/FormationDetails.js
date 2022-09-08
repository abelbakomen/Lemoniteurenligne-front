//import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';

import { Link} from 'react-router-dom';
import { useParams} from 'react-router';
import { Markup } from 'interweave';

import './Formations.css';

import {apiBaseUrl} from '../../settings';
import AccordionLecture from './AccordionLecture';
import AccordionMenu from '../AccordionMenu';

import 'holderjs';


function FormationsDetails ({match}) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [formation, setFormation] = useState({});

	let params = useParams();

/*class FormationsDetails extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.id);
		this.state = {
			error: null,
			isLoaded: false,
			formation:{},		
			formations: []
		};
	}

	componentDidMount() {
*/		    

  		useEffect(() => {
				if(!isLoaded){
					fetch(apiBaseUrl+"/formation/"+params.id)
					.then((response) => response.json())
					.then((actualData) => {
					//console.log(actualData)
					
						setIsLoaded(true);
						setFormation( actualData);
					},
				// Remarque : il est important de traiter les erreurs ici
				// au lieu d'utiliser un bloc catch(), pour ne pas passer à la trappe
				// des exceptions provenant de réels bugs du composant.
					(error) => {
						this.setIsLoaded(true);
						this.setError(error);
									
					}
					)
				}
			});

	//render() {
    	//var { error, isLoaded, formation } = this.state;
    	
		return (
		  <React.Fragment>

			{/*<!-- Title page -->*/}
				<section >
					<div className="bg-secondary px-5 text-white">
						<div className="flex-w flex-sb-m ">
							<div className="pb-0">
								<div className="inner-menu flex-w p-b-9 d-none d-lg-block" variant='dark'>
									<span>
										<Link  to="/"  href="#/" className="s-txt19 hov-color-main trans-02">
										      <i className="fas fa-home"></i>
										      Acceuil
										    </Link>
										<span className="s-txt19 p-l-6 p-r-9"> {">"} </span>
									</span>

									<span>
										<span className="s-txt19">
											<Link  to="/formations"  href="#/formations" className="">
												<i className="fas fa-university"></i>
												Formations
											</Link>
										</span>
										<span className="s-txt19 p-l-6 p-r-9"> {">"}  </span>
									</span>								

									<span >
										<Link  to= {(isLoaded)? "/formations/"+formation.id: "/formations"}  href="#/" className="s-txt19 hov-color-main trans-02 ">
											<i className="fas fa-book"></i>
											{(isLoaded)? formation.name: ""}
										</Link>
										
											
									</span>
									
								</div>

								<div className="d-flex justify-content-around">
									<div className="text-center col-md-10 col-lg-8">
										<h3 className="text-warning"><strong>{(isLoaded)? formation.name: "Formation Details"}</strong></h3>
										<span className="text-sm">
											sous-titre
											{(isLoaded)? formation.description: ""}
										</span>
									</div>
								</div>
								<div className="d-flex justify-content-around pt-2 text-warning">
									<div className="col-md-10 col-lg-8">
										<span className=" p-2">
											<i className="fa fa-clock"></i>
											{(isLoaded)? formation.duration: ""}
										</span>
										<span className=" p-2">
											<i className="fa fa-signal"></i>
											{(isLoaded)? formation.level: ""}
										</span>
									</div>
								</div>
							</div>

						</div>
					</div>
				</section>

				<section className="row ">
					<div className="col-md-3 d-none d-lg-block text-left py-5 px-3">
					
						<AccordionMenu/>
						
					</div>
					<div className=" col-*md-8 col-lg-6 text-left py-5 px-3">
						
						{(error) ?	
							<div className="card">Erreur : {error.message}</div>
						: 
						(! isLoaded)?
								<div>Chargement…</div>
							:

							<div className="row">
								<div className="col " >
									<hr/>
									<h5 className="card-title text-blue"><strong> Introduction</strong></h5>
									<video controls autoplay className="w-100 p-2">
									  <source src={formation.video}  /> 
									</video> 
								</div>

								<div className="" style= {{"text-align": "justify" ,}}>
									<Markup content={formation.introduction} />
									
								</div>		
				
								<hr/>		
	
								<div className="card-body" style= {{"text-align": "justify" ,}}>
									<h5 className="card-title text-blue"><strong> Competences Visées</strong></h5>
									<div className="card-text">
									
									<Markup content={formation.competence} />
									
									</div>

								</div>
								
								<hr/>		
	
								<div className="card-body" style= {{"text-align": "justify" ,}}>
									<h5 className="card-title text-blue"><strong> Préquis</strong></h5>
									<div className="card-text">
									<Markup content={formation.prerequis}/>
									</div>

								</div>
								<hr/>		
	
								<div className="card-body" style= {{"text-align": "justify" ,}}>
									<h5 className="card-title text-blue"><strong> Coût et Durée de la Formation</strong></h5>
									<div className="card-text px-4">
										<p>  Coût: <Markup content={formation.cost}/></p>
										<p>  Durée: <Markup content={formation.duration}/></p>
									</div>

								</div>
									
								<div className="d-flex flex-row-reverse py-3">
									<Button className="btn btn-primary"> Commencer la Formation</Button>
								</div>
									
								<hr/>
								<div className="card-body tab-matieres" style= {{"text-align": "justify" ,}}>
									<h5 className="card-title text-blue"><strong> Table de Matières</strong></h5>
									<div >
										<AccordionLecture lectures={formation.lecture_set}  />
									</div> 
									
												
								</div>	
								
						
								<div className="card-body " style= {{"text-align": "justify" ,}}>
									<hr />	
									
									<h5 className="card-title text-blue"><strong> Instructeurs</strong></h5>
									<div className=" row">
										<div className="col-lg-4  col-md-4 col-sm-4 p-2">
											<img
											  className="d-block w-100 rounded-circle"
											  src="https://i.pravatar.cc/300?img=5"
											  alt="Instructeur 1"
											/>
											<p  className="text-muted">Lorem ipsum in quis nisi nostrud tempor ea consequa	</p>	
										</div>
										
										<div className="col-lg-4  col-md-4 col-sm-4 p-2">
											<img
											  className="d-block w-100 rounded-circle"
											  src="https://i.pravatar.cc/300?img=4"
											  alt="Instructeur 2"
											/>
											<p className="text-muted"> consectetur ut dolore officia eu non eia	</p>	
										</div>
										
										
										<div className="col-lg-4  col-md-4 col-sm-4 p-2">
											<img
											  className="d-block w-100 rounded-circle"
											  src="https://i.pravatar.cc/300?img=1"
											  alt="Instructeur 3"
											/>
											<p  className="text-muted">Lorem ipsum in quis nisi nostrud tempor ea consequa	</p>	
										</div>
									</div>

								</div>
								
									
								<div className="d-flex justify-content-around py-4">
									<Button className="btn btn-primary"> Commencer la Formation</Button>

								</div>
									
								{/*

									formation.lecture_set.map(lecture => (
										<div className="card mb-3" >
											<div className="row g-0">
												<div className="col-md-4">
													<img src={lecture.featured_image} className="img-fluid rounded-start" alt="..."/>
												</div>
												<div className="col-md-8">
													<div className="card-body">
														<h5 className="card-title text-blue"> <strong>{ lecture.name } </strong></h5>
														<p className="card-text">{lecture.description}</p>
														<p className="card-text"><small className="text-muted"> lectures</small></p>
													</div>
												</div>
											</div>
										</div>



									))

									*/
								}


							</div>
					}

					</div>
					
					<div className="col-md-3 d-none d-md-block text-left py-5 px-3">
					 <nav class="navbar navbar-expand-*">

						  <div class="container-fluid">

						    <ul class="navbar-nav">
						      <li class="nav-item">
							<a class="nav-link" href="#">Formation  1</a>
						      </li>
						      <li class="nav-item">
							<a class="nav-link" href="#">Formation  2</a>
						      </li>
						      <li class="nav-item">
							<a class="nav-link" href="#">Formation  3</a>
						      </li>
						      <li class="nav-item">
							<a class="nav-link" href="#">Formation  4</a>
						      </li>
						      <li class="nav-item">
							<a class="nav-link" href="#">Formation  5</a>
						      </li>
						    </ul>
						  </div>

						</nav>
					</div>
				</section>

	      </React.Fragment>
    	);
}

export default FormationsDetails;
