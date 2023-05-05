import { FaFacebook, FaSearch, FaAlignJustify } from "react-icons/fa";
import { TbCircleLetterS, TbCircleLetterM, TbCircleLetterO, TbCircleLetterT, TbCircleLetterH} from "react-icons/tb";


export default function(){
    return (
        <div className="header">

        <div className="headerLeft">
            {/* Icons */}
            <div className="logo-sb">
                <div>
                    <TbCircleLetterS />
                    <TbCircleLetterM/>
                    <TbCircleLetterO/>
                    <TbCircleLetterO/>
                    <TbCircleLetterT/>
                    <TbCircleLetterH/>
                </div>
            </div>
            <div className="search-sb">
            <FaSearch />
            </div>
            <div className="menu-sb">
            <FaAlignJustify />
            </div>
        </div>

        <div className="headerRight">
            <div className="plus-btn">
            +
            </div>
        </div>

        </div>
    );
}