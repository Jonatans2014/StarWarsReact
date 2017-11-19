import React, {Component} from 'react';
import PlanetInfo from './Info/PlanetInfo';

class PlanetList extends Component{
    render(){
        const PlanetList = this.props.planets;
        
        return(
     
            <div>
                {
                    PlanetList.map((p) => {
                        console.log(p);
                        return (
                            <div key={p.url}>
                                <h1 className="char-name">
                                    {p.name}
                                </h1>
                                <PlanetInfo planetInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
           
        );
    }
}
export default PlanetList;