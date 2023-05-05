import Horrorcat from './resources/Horrorcat.jpg';

export default function(props){
    return(
        <div className="feedPosts">
        <div className="feedPostSingle">

          <div className="feedPost_profile">
            <img src={Horrorcat} />
            <h3>{props.nome}<br/> <span>{props.horario}</span></h3>
          </div>

          <div className="feedPost_content"> 
            <p>{props.conteudo}</p>
            <img src="https://www.thesprucecrafts.com/thmb/KuV8d-kp_v100bPm9a9HkOcJWig=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-892678906-5b92ddffc9e77c0050f1659e.jpg" />
          </div>

        </div>    
      </div>
    )
}