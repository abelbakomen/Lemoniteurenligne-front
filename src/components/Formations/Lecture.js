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


function Lecture ({match}) {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [formation, setFormation] = useState({});
	const [lecture, setLecture] = useState({});

	let params = useParams();

/*class Lecture extends Component {
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
					fetch(apiBaseUrl+"/lecture/"+params.id)
					.then((response) => response.json())
					.then((actualData) => {
					console.log(actualData)
					
						setIsLoaded(true);
						setLecture( actualData);
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
										<Link  to= {(formation)? "/formations/"+formation.id: "/formations"}  href="#/" className="s-txt19 hov-color-main trans-02 ">
											<i className="fas fa-book"></i>
											{(formation)? formation.name: ""}
										</Link>	
										<span className="s-txt19 p-l-6 p-r-9"> {">"}  </span>
									</span>
									<span >
										<Link  to= {(lecture)? "/lecture/"+lecture.id: "/formations"}  href="#/" className="s-txt19 hov-color-main trans-02 ">
											<i className="fas fa-book"></i>
											{(lecture)? lecture.name: ""}
										</Link>	
									</span>
									
								</div>

								<div className="d-flex justify-content-around">
									<div className="text-center col-md-10 col-lg-8">
									<h5 className="text-warning"><strong>{(formation)? formation.name: "Formation Details"}</strong></h5>
									<h4 className="text-warning"><strong>{(lecture)? lecture.name: "Formation Details"}</strong></h4>
									
									</div>
								</div>
								<div className="d-flex justify-content-around pt-2 text-warning">
									<div className="col-md-10 col-lg-8">
										<span className=" p-2">
											<i className="fa fa-clock"></i>
											{(formation)? formation.duration: ""}
										</span>
										<span className=" p-2">
											<i className="fa fa-signal"></i>
											{(formation)? formation.level: ""}
										</span>
									</div>
								</div>
							</div>

						</div>
					</div>
				</section>
				<section className="row">
					<div className="">
						<ul class="list-group list-group-horizontal">
							<li class="list-group-item">First item</li>
							<li class="list-group-item">Second item</li>
							<li class="list-group-item">Third item</li>
							<li class="list-group-item">Fourth item</li>
						</ul> 
					</div>
				</section>
			
				<section className="row py-0 mb">
					<div className="col-md-3 d-none d-lg-block text-left py-5 px-3">
					<h5 className="card-title text-blue"><strong>Somaire</strong></h5>
						<AccordionLecture/>
						
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
									  <source src={lecture.video}  /> 
									</video> 
								</div>

								<div className="" style= {{"text-align": "justify" ,}}>
									<Markup content={lecture.introduction} />
									<p>ostrud qui velit do exercitation laborum non magna deserunt.</p>
									<p>Nostrud et sit velit commodo duis dolore eiusmod id consectetur cillum minim in ipsum. Officia excepteur quis et ut qui anim ea deserunt officia magna. Anim exercitation sint magna et dolore elit cillum sit nostrud ex velit nulla occaecat. Amet sit deserunt sunt ipsum deserunt qui aliqua cillum incididunt quis. Ea eiusmod exercitation nostrud et aliqua duis qui adipisicing laborum ipsum aliqua reprehenderit velit adipisicing. Ut dolore laborum sit ut dolore sit est do reprehenderit esse.</p>
								</div>		
				
								<hr/>		
	
								<div className="card-body" style= {{"text-align": "justify" ,}}>
									<h5 className="card-title text-blue"><strong> I- Partie 1</strong></h5>
									<div className="card-text">
									
									<p>
										Tempor nisi sint elit sunt minim aute excepteur laborum officia occaecat excepteur. Laboris consequat id proident excepteur ad. Qui deserunt ullamco laboris excepteur officia.
									</p>
									<p>Anim non aute proident ullamco aute adipisicing ut laborum nostrud aute. Ad ut nulla aute sit culpa velit magna occaecat deserunt. Ut occaecat deserunt duis tempor cillum voluptate ea qui aliquip quis pariatur dolore cupidatat sunt.</p>

									<Markup content={formation.competence} />
									
									</div>

								</div>

								
								<hr/>		
	
								<div className="card-body" style= {{"text-align": "justify" ,}}>
									<h5 className="card-title text-blue"><strong> II- Partie 2</strong></h5>
									<div className="card-text">
									
									<p>
										Tempor nisi sint elit sunt minim aute excepteur laborum officia occaecat excepteur. Laboris consequat id proident excepteur ad. Qui deserunt ullamco laboris excepteur officia.
									</p>
									<p>Anim non aute proident ullamco aute adipisicing ut laborum nostrud aute. Ad ut nulla aute sit culpa velit magna occaecat deserunt. Ut occaecat deserunt duis tempor cillum voluptate ea qui aliquip quis pariatur dolore cupidatat sunt.</p>

									<Markup content={formation.competence} />
									
									</div>

								</div>

								
								<hr/>		
	
								<div className="card-body" style= {{"text-align": "justify" ,}}>
									<h5 className="card-title text-blue"><strong> III- Partie 3</strong></h5>
									<div className="card-text">
									
									<Markup content={formation.competence} />
									
									</div>

								</div>

								
								<hr/>		
	
								<div className="card-body" style= {{"text-align": "justify" ,}}>
									<h5 className="card-title text-blue"><strong> IV- Partie 4</strong></h5>
									<div className="card-text">
										
										<p>
											Tempor nisi sint elit sunt minim aute excepteur laborum officia occaecat excepteur. Laboris consequat id proident excepteur ad. Qui deserunt ullamco laboris excepteur officia.
										</p>
										<p>Anim non aute proident ullamco aute adipisicing ut laborum nostrud aute. Ad ut nulla aute sit culpa velit magna occaecat deserunt. Ut occaecat deserunt duis tempor cillum voluptate ea qui aliquip quis pariatur dolore cupidatat sunt.</p>

										<Markup content={formation.competence} />
										
									</div>

								</div>
								
								
								<hr/>		
	
								<div className="card-body" style= {{"text-align": "justify" ,}}>
									<h5 className="card-title text-blue"><strong> Resumé de ce chapitre</strong></h5>
									<div className="card-text">
									<p>Eiusmod veniam officia excepteur incididunt proident fugiat aute occaecat amet irure. Proident aute ipsum consequat fugiat. Cupidatat dolor sunt dolor proident et cupidatat commodo aute voluptate culpa consequat sunt. Cupidatat commodo eiusmod adipisicing quis voluptate sint esse labore mollit non. Incididunt esse consequat deserunt occaecat. Qui enim irure aute pariatur dolor eiusmod. Reprehenderit nulla duis Lorem elit ex ullamco aliqua ex adipisicing tempor.</p>
									<Markup content={lecture.body} />
									
									</div>

								</div>
								
								<div className="d-flex justify-content-between py-4">
									<Button className="btn btn-primary"> <i class="fas fa-chevron-left"/> Leçon Précédante</Button>
									<Button className="btn btn-primary"> Leçon Suivante  <i class="fas fa-chevron-right"/> </Button>

								</div>
									
								

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

export default Lecture;
