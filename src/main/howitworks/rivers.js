
import river from "../../Assets/thebigidea.png";
import research from "../../Assets/research.png";
import collecttrash from "../../Assets/collecttrash.png";
import emptyandrepeat from "../../Assets/emptyandrepeat.png";
export default function Rivers(){


    return(
        <div className="river-container">
            <div className="thebigidea">
                <img src={river} alt="" />
                <div>
                    <p>THE BIG IDEA</p>
                    <div>Rivers are a major source of ocean plastic pollution, with research showing that 1% of rivers account for nearly 80% of pollution flowing from rivers. #TeamARM will work with The Ocean Cleanup to tackle trash from these rivers with their Interceptor technologies.</div>
                </div>
            </div>
            <div className="thebigidea">
                <div>
                    <p>RESEARCH</p>
                    <div>Every river is unique, and for that reason, together with local partners, The Ocean Cleanup’s team will first conduct research to determine the most efficient solution to clean that specific river</div>
                </div>
                <img src={research} alt="" />
            </div>
            <div className="thebigidea">
                <img src={collecttrash} alt="" />
                <div>
                    <p>COLLECT TRASH</p>
                    <div>After conducting research and setting up the necessary local partnerships, it’s time to deploy and start intercepting trash!</div>
                </div> 
            </div>
            <div className="thebigidea">
                <div>
                    <p>EMPTY AND REPEAT</p>
                    <div>The collected trash is brought to shore to be properly disposed of by local waste management and then cleanup continues.</div>
                </div> 
                <img src={emptyandrepeat} alt="" />
            </div>
        </div>
    )
}