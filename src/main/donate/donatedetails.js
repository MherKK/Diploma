export default function DonateDetails(){
    return(
        <div className="donate-details">
            <div className="donate-details-p">
                <p >Details</p>
            </div>
            <form className="donate-details-formcontainer">
                <div className="donate-details-formdiv">
                    <label>Display Name*</label>
                    <input type="text" />
                </div>
                <div className="donate-details-formdiv">
                    <label>Email Address*</label>
                    <input type="email" />
                </div>
                <div className="donate-details-formdiv">
                    <label>Mobile Phone*</label>
                    <input type="number" />
                </div>
                <div className="donate-details-formdiv">
                    <label>Message</label>
                    <textarea placeholder="Message (140 characters max)"></textarea>
                </div>
                <div>
                    <input type="checkbox" />
                    <label>Please keep my donation anonymous</label>
                </div>
                <div className="donate-details-bottom">
                    <button>Back</button>
                    <button>Next</button>
                </div>
            </form>
        </div>
    )
}