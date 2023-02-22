import river from "../../Assets/thebigidea.png";
import map from "../../Assets/map.png";
import removal from "../../Assets/removal.png";
import recycle from "../../Assets/recycle.png";
import forest from "../../Assets/forest.jpg";
export default function Forests(){


    return(
        <div className="river-container">
            <h1 style={{color:"greenyellow"}}>FORESTS</h1>
            <img  alt="" src={forest} />
            <div className="thebigidea">
                <img src={river} alt="" />
                <div>
                    <p>THE BIG IDEA</p>
                    <div>Ending deforestation is our best chance to conserve wildlife and defend the rights of forest communities. On top of that, it’s one of the quickest and most cost effective ways to curb global warming. That’s why we’re campaigning for a deforestation-free future.</div>
                </div>
            </div>
            <div className="thebigidea">
                <div>
                    <p>MAPPING</p>
                    <div>#TeamARM will work with its team members and partners  to identify dirtiest Forests/Gardens in Armenia.</div>
                </div>
                <img src={map} alt="" />
            </div>
            <div className="thebigidea">
                <img src={removal} alt="" />
                <div>
                    <p>REMOVAL</p>
                    <div>#TeamARM will partner with volunteers like you to remove millions of kilograms of trash from the Forests/Gardens and weigh the total trash collected at the end of each cleanup.</div>
                </div> 
            </div>
            <div className="thebigidea">
                <div>
                    <p>RECYCLING [IF APPLICABLE]</p>
                    <div>TeamARM will work with local authorities to make sure any labeled, working gear is returned to local fishers. Remaining gear will be recycled– when possible – and the remainder properly disposed of.</div>
                </div> 
                <img src={recycle} alt="" />
            </div>
        </div>
    )
}