import React, {Component} from 'react';
import VehicleInfo from './Info/VehicleInfo';

class VehicleList extends Component{
    render(){
        const vehiclesList = this.props.vehicles;
        
        return(
     
            <div>
                {
                    vehiclesList.map((p) => {
                        console.log(p);
                        return (
                            <div key={p.url}>
                                <h1 className="char-name">
                                    {p.name}
                                </h1>
                                <VehicleInfo vehicleInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
           
        );
    }
}
export default VehicleList;