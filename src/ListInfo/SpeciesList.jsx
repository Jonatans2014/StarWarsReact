import React, {Component} from 'react';
import SpeciesInfo from './Info/SpeciesInfo';

class SpeciesList extends Component{
    render(){
        const SpeciesList = this.props.species;
        
        return(
     
            <div>
                {
                    SpeciesList.map((p) => {
                        console.log(p);
                        return (
                            <div key={p.url}>
                                <h1 className="char-name">
                                    {p.name}
                                </h1>
                                <SpeciesInfo speciesInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
           
        );
    }
}
export default SpeciesList;