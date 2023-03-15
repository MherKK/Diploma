import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { dataRef } from "../../firebase";
import "./donatorlist.css"
export default function DonatorsList(){
    const imagePerRow = 8;
    let [donationDetails,setDonationDetails] = useState([]);
    let [filter,setFilter] = useState(true);
    useEffect(() =>{
        dataRef.ref().child("Donators").on('value', data =>{
            const getData = Object.values(data.val());            
                setDonationDetails(getData)
        })
    },[])
    let finalDetails = filter === true ? donationDetails.sort((a,b) => new Date(b.todaysDate) - new Date(a.todaysDate)) : donationDetails.sort((a,b) => b.kg - a.kg); 

    return (
        <div  className="donators-list-container">
            <div className="donators-list-filter">
                <button onClick={() =>{
                    setFilter(true)
                }}>MOST RECENT</button>
                <button onClick={(e) => {
                    setFilter(false)
            }}>MOST TRASH</button>
            </div>
            {finalDetails?.slice(0,imagePerRow).map(value => {
                return (
                    <div key={value.email} className="donatorslist-donators">
                        <div className="donatorslist-donators-top">
                            <h4>{value.displayName}</h4>
                            <p>{value.message}</p>
                        </div>
                        <div className="donatorslist-donators-bottom">
                            <h4>{value.kg} KGS</h4>
                            <p>{value.todaysDate}</p>
                        </div>
                    </div>
                )
            })}
            <div className="showmore-less-donators">
            {
                imagePerRow < finalDetails?.length && (
                    <Link
                      className="donatorlist-Link"
                      target="_blank" to="donatorfulllist"
                    >
                      Load more
                    </Link>
                  )
            }
            </div>
        </div>
    )
}