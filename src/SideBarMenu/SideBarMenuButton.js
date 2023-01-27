
import bar from "./side-bar.png"
import "./sidebar.css";
export default function SideBar({setBar}){

    let root2 = document.body;
    return (
        <div>
            <button onClick={() =>{
                root2.style.overflowY = "hidden";
                setBar(false)
            }} className="sidebar"><img alt="" src={bar} /></button>
        </div>
    )
}