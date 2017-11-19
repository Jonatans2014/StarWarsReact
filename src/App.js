import React, { Component } from 'react';
import PeopleList from './ListInfo/PeopleList';
import PlanetList from './ListInfo/PlanetList';
import FilmList from './ListInfo/FilmList';
import StarshipList from './ListInfo/StarshipList';
import VehicleList from './ListInfo/VehicleList';
import SpeciesList from './ListInfo/SpeciesList';
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);

		this.state = {show: true};
        this.switchStarshipsDiv = this.switchStarshipsDiv.bind(this)
        this.switchPeopleDiv = this.switchPeopleDiv.bind(this)
        this.switchPlanetsDiv = this.switchPlanetsDiv.bind(this)
        this.switchFilmsDiv = this.switchFilmsDiv.bind(this)
        this.switchVehiclesDiv = this.switchVehiclesDiv.bind(this)
        this.switchSpeciesDiv = this.switchSpeciesDiv.bind(this)


        this.state = {
            people: [],
            planets: [],
			films: [],
			starships: [],
			vehicles: [],
			species: [],
				}
		  }
			
			switchPeopleDiv = () =>{
				const {show1} = this.state;
				this.setState({show1 : !show1})
			}
			
			switchPlanetsDiv = () =>{
				const {show2} = this.state;
				this.setState({show2 : !show2})
			}
			
			switchFilmsDiv = () =>{
				const {show3} = this.state;
				this.setState({show3 : !show3})
			}
			
			switchStarshipsDiv = () =>{
				const {show4} = this.state;
				this.setState({show4 : !show4})
			}
			
			switchVehiclesDiv = () =>{
				const {show5} = this.state;
				this.setState({show5 : !show5})
			}
			
			switchSpeciesDiv = () =>{
				const {show6} = this.state;
				this.setState({show6 : !show6})
			}
			
		

    //retrieve the information from the API
    getPeopleInfo(){
        //returns a promise
        return axios.get("http://swapi.co/api/people")
            .then((response) => {
            console.log(response.data.results);

            this.setState({people: response.data.results})
        })
    }
    

    getPlanetsInfo(){
        //returns a promise
        return axios.get("http://swapi.co/api/planets")
            .then((response) => {
            console.log(response.data.results);

            this.setState({planets: response.data.results})
        })
    }
	

    getFilmsInfo(){

        return axios.get("http://swapi.co/api/films")
            .then((response) => {
            console.log(response.data.results);

            this.setState({films: response.data.results})
        })
    }
    
		//retrieve the information from the API
    getStarships(){
        //returns a promise
        return axios.get("http://swapi.co/api/starships")
            .then((response) => {
            console.log(response.data.results);
            //This changes the state and populates the people array with API info
            this.setState({starships: response.data.results})
        })
    }
	
		//retrieve the information from the API
    getVehicles(){
        //returns a promise
        return axios.get("http://swapi.co/api/vehicles")
            .then((response) => {
            console.log(response.data.results);
            //This changes the state and populates the people array with API info
            this.setState({vehicles: response.data.results})
        })
    }
    
		//retrieve the information from the API
    getSpecies(){
        //returns a promise
        return axios.get("http://swapi.co/api/species")
            .then((response) => {
            console.log(response.data.results);
            //This changes the state and populates the people array with API info
            this.setState({species: response.data.results})
        })
    }

    componentDidMount(){
        this.getPeopleInfo()
        this.getPlanetsInfo()
		this.getFilmsInfo()
		this.getStarships()
		this.getVehicles()
		this.getSpecies()
    }

    
    render() {
        
		const {people} = this.state;
		const {planets} = this.state;
		const {films} = this.state;
		const {starships} = this.state;
		const {vehicles} = this.state;
		const {species} = this.state;
			
				
       //Buttons implemented with bootstrap
        return (
            <div className="App">
							<div class='wrapper text-center'>
							<div class="btn-group-lg">
							<button onClick={this.switchPeopleDiv} type="button" class="btn btn-primary">People</button>
							<button onClick={this.switchPlanetsDiv} type="button" class="btn btn-primary">Planets</button>
							<button onClick={this.switchSpeciesDiv} type="button" class="btn btn-primary">Species</button>
							<button onClick={this.switchStarshipsDiv} type="button" class="btn btn-primary">Starships</button>
							<button onClick={this.switchVehiclesDiv} type="button" class="btn btn-primary">Vehicles</button>
							<button onClick={this.switchFilmsDiv} type="button" class="btn btn-primary">Films</button>
						</div>
					</div>
							{this.state.show1 && 
								<div>
									<PeopleList people={people}/>
								</div>
							}
					
							{this.state.show2 && 
								<div>
									<PlanetList planets={planets}/>
								</div>
							}	
							
							{this.state.show3 && 
								<div>
									<FilmList films = {films}/>
								</div>
							}
					
							{this.state.show4 && 
								<div>
									<StarshipList starships = {starships}/>
								</div>
							}
							
							{this.state.show5 && 
								<div>
									<VehicleList vehicles = {vehicles}/>
								</div>
							}
					
							{this.state.show6 && 
								<div>
									<SpeciesList species = {species}/>
								</div>
							}
            </div>
        );
    }
}






export default App;
