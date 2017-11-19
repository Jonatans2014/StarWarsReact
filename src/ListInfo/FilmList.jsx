import React, {Component} from 'react';
import FilmInfo from './Info/FilmInfo';

class FilmList extends Component{
  render(){

    const filmList = this.props.films;
        
    return(
      <div>
      {
        filmList.map((p) => {
        console.log(p);
        return (
        <div key={p.url}>
        	<h1 className="char-name">
        		{p.title}
        	</h1>
        	<FilmInfo filmInfo={p}/>
      	</div>
     			)
  			})
       }
       </div>
       );
    }
}
export default FilmList;