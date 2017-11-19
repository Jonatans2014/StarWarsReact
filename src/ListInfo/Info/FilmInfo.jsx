import React, {Component} from 'react';

class FilmInfo extends Component {
   
    constructor(props){
        super(props); 


        this.state ={
            expanded: false,
        }
        

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }
    

    open(){
        this.setState({expanded: !this.state.expanded})
    }
    close(){
        this.setState({expanded: !this.state.expanded})
    }
    
    render(){
        const info = this.props.filmInfo;
        if(!this.state.expanded){
            return <p className="btn btn-info" onClick={this.open}>Show Film Information</p>
        }
        
        return(

            <div className="user-details">
                <p className="btn btn-danger" onClick={this.close}>Hide Film Information</p>
            <ul>
								<li><h2>Episode ID: {info.episode_id}</h2></li>
								<li><h2>Opening Crawl: {info.opening_crawl}</h2></li>
								<li><h2>Director: {info.director}</h2></li>
								<li><h2>Producer: {info.producer}</h2></li>
                <li><h2>Release Date: {info.release_date}</h2></li>
            </ul>
            </div>
        )    
    }
}

export default FilmInfo;