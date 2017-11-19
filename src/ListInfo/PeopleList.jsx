import React, {Component} from 'react';
import PeopleInfo from './Info/PeopleInfo';

class PeopleList extends Component{
    render(){
        const peopleList = this.props.people;
        
        return(
     
            <div>
                {
                    peopleList.map((p) => {
                        console.log(p);
                        return (
                            <div key={p.url}>
                                <h1 className="char-name">
                                    {p.name}
                                </h1>
                                <PeopleInfo peopleInfo={p}/>
                            </div>
                        )
                    })
                }
            </div>
           
        );
    }
}
export default PeopleList;