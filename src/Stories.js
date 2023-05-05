import Horrorcat from './resources/Horrorcat.jpg';

export default function(){
    return (
    
        <div className="stories">
        
        <div className="storiesCard" style={{backgroundImage:`url(${Horrorcat})`}}>
          <p>Smoothing</p>
        </div>
        <div className="storiesCard" style={{backgroundImage:`url(${Horrorcat})`}}>
          <p>Smoothing</p>
        </div>
        <div className="storiesCard" style={{backgroundImage:`url(${Horrorcat})`}}>
          <p>Smoothing</p>
        </div>
        <div className="storiesCard" style={{backgroundImage:`url(${Horrorcat})`}}>
          <p>Smoothing</p>
        </div>
        <div className="storiesCard" style={{backgroundImage:`url(${Horrorcat})`}}>
          <p>Smoothing</p>
        </div>
        
      </div>
    );
}