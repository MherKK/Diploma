import river from "../../Assets/thebigidea.png";
import map from "../../Assets/map.png";
import removal from "../../Assets/removal.png";
import recycle from "../../Assets/recycle.png";
export default function Lakes(){


    return(
        <div className="river-container">
            <div className="thebigidea">
                <img src={river} alt="" />
                <div>
                    <p>THE BIG IDEA</p>
                    <div>Lost, abandoned and discarded fishing gear – or ghost gear – is some of the deadliest lake trash, and super tricky to recover. Experts with their special tools will be able to remove those deadliest lake trash.</div>
                </div>
            </div>
            <div className="thebigidea">
                <div>
                    <p>MAPPING</p>
                    <div>#TeamARM will work with its team members and partners on the water to identify ghost gear graveyards around Armenia.</div>
                </div>
                <img src={map} alt="" />
            </div>
            <div className="thebigidea">
                <img src={removal} alt="" />
                <div>
                    <p>REMOVAL</p>
                    <div>Specially trained experts will grapple or float the gear to the surface, where the gear will be hooked onto boat cranes and lifted out of the ocean. (Yes, it’s a very cool process.)</div>
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