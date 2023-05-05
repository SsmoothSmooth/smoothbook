import Horrorcat from './resources/Horrorcat.jpg';
import { AiFillVideoCamera, AiOutlineFileImage, AiOutlineMeh } from "react-icons/ai";

export default function(){
    return (
        <div className="feed">

        <div className="feedForm">
          <img src={Horrorcat} />
          <input type="text" placeholder="No que você está persando ?"/>
        </div>

        <div className="feedIcons">

          <div className="iconSingle">
            <AiFillVideoCamera />
            <span>Vídeo ao vivo</span>
          </div>

          <div className="iconSingle img">
            <AiOutlineFileImage />
            <span>Vídeo ao vivo</span>
          </div>

          <div className="iconSingle emoji">
            <AiOutlineMeh />
            <span>Vídeo ao vivo</span>
          </div>

        </div>

      </div>
    )
}