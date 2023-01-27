import "./FAQ.css"
import close from "./close.png"
export default function FAQ({setOPen,root}){
    return (
        <div className="faq">
            <div className="faq-top">
                <p>FREQUENTLY ASKED QUESTIONS</p>
                <img src={close} alt="" onClick={() => {
                    root.style.overflowY= "visible";
                    setOPen(false)
                }}/>
            </div>
            <div className="faq-container">
                <div className="faq-container_questions">
                    <h3>WHAT IS #TEAMARM?</h3>
                    <p>#TEAMARM is an Armenian campaign to raise $30M to remove 30M pounds of plastic and trash from our ocean, rivers and forests. 
                        It’s  the first wave of the largest creator-led fundraising campaign to ever hit the internet: #TeamArm. We will launch 
                        #TeamArm in 2023 with a goal of raising $20M to plant 20M trees if we first hit our goal for the #TeamArm. We’re here
                        to rally the internet’s passion and imagination in support of the environment.
                    </p>
                </div>
                <div className="faq-container_questions">
                    <h3>WHAT IS THE TIMING OF THE CAMPAIGN?</h3>
                    <p>We launched #TeamSeas on Friday, October 29th at 1PM PACIFIC TIME with a massive wave of online videos and we’ll continue to 
                        create content to rally our communities throughout the campaign. (If you’re reading this right now, and you love the ocean, 
                        we invite you to create something too). The $30M fundraising goal officially ends on January 1, 2022 at midnight PT, so we 
                        only have a short amount of time to raise the money. The funded cleanup work will begin in 2022 and is scheduled to conclude
                        in three years. We’ll keep the site up and running the whole time (and you can still plant a tree at TeamTrees.org!)
                    </p>
                </div>
                <div className="faq-container_questions">
                    <h3>WHAT HAPPENS TO THE MONEY?</h3>
                    <p>Every single dollar #TeamSeas raises toward the $30M will go to independently verified pounds of trash that have been removed from beaches, 
                        rivers or the ocean. When you donate, the funds go directly to the two not-for-profit organizations, Ocean Conservancy and The Ocean Cleanup.
                        They split the funds 50/50 and the money will be released when the trash is removed and verified: $1, one pound. Each non-profit is responsible 
                        for delivering on their half of the goal.
                    </p>
                </div>
                <div className="faq-container_questions">
                    <h3>WHAT HAPPENS TO THE TRASH?</h3>
                    <p>Great question! Wherever and whenever possible, items like cans, glass, and plastic beverage bottles will be separated and recycled. In cases where
                        contamination of the trash and/or lack of local recycling makes it impossible to reprocess, trash will go to a proper disposal site in accordance
                        with local regulations and capacity. That’s why we need to reduce the amount of plastic we use and waste we generate, period.
                    </p>
                </div>
                <div className="faq-container_questions">
                    <h3>WHO IS BEHIND #TEAMARM?</h3>
                    <p>Just like the original campaign that inspired it, #TeamSeas is being led by Mark (Rober), Jimmy (MrBeast) and Campaign Director, Matt Fitzgerald (@fitz350). 
                        We’ve reunited many of the world’s most popular content creators to help launch the campaign, add their creativity and invite their audience to power #TeamSeas
                        toward its ambitious 30M goal. At the end of the day, we hope to create a platform that you—anyone reading this—can genuinely claim as your own. Think of it as
                        a giant, global potluck for good. What would you like to bring to the party?
                    </p>
                </div>
                <div className="faq-container_questions">
                    <h3>WHICH NONPROFIT ORGANIZATIONS ARE YOU PARTNERING WITH?</h3>
                    <p>
                    For #TeamSeas, we’ve partnered up with Ocean Conservancy and The Ocean Cleanup. All donations to #TeamSeas will be split between the two organizations, 50/50.
                    </p>
                    <p>
                    Ocean Conservancy is #TeamSeas’s implementation partner for beaches and oceans. Ocean Conservancy champions science-based solutions
                    to tackle the largest ocean conservation challenges we face to strengthen the health of the ocean today and for the future. They mobilize
                    citizen advocates to facilitate change, and are committed to supporting efforts that benefit the people who depend on the ocean for food,
                    jobs and recreation. Ocean Conservancy facilitates the International Coastal Cleanup (ICC), one of the world’s 
                    largest volunteer cleanup efforts for the ocean. Ocean Conservancy is a US-based 501(c)(3) nonprofit (EIN 23-7245152) and is rated 4 stars (94/100) by Charity Navigator.
                    </p>
                    <p>
                    The Ocean Cleanup is #TeamSeas’s implementation partner for rivers. The Ocean Cleanup develops and scales technologies to clean up what is already polluting
                    our oceans and to intercept plastic on its way to the ocean via rivers. Their goal is to achieve a 90% reduction of floating ocean plastic by 2040. Founded
                    in 2013, The Ocean Cleanup has a proven commitment to the ambitious goal of ridding the world’s oceans of plastic. With their river systems, the Interceptors,
                    they are now helping to close the tap on a global scale, capturing plastic before it enters the oceans via rivers. The Ocean Cleanup is a registered ANBI
                        Foundation in the Netherlands, and their U.S. affiliate, The Ocean Cleanup North Pacific Foundation, is also a Gold-rated US 501(c)(3) nonprofit (EIN 81-5132355).
                    </p>
                </div>
                <div className="faq-container_questions">
                    <h3>WHAT’S THE DEAL WITH PLASTIC POLLUTION IN OUR WATER?</h3>
                    <p>
                    The ocean and the life within it are incredibly important. Aside from the water we drink, the ocean produces half the air we breathe every day. So it’s a no-brainer that 
                    keeping it clean and healthy is critical to our survival. Unfortunately our ocean—and the rivers that feed it—are full of plastic trash. It’s estimated that there are 
                    200M tons of plastic already circulating in marine environments, with an estimated 11M tons entering the ocean EVERY YEAR. Pollution from items like bottles, bags, straws
                    and abandoned fishing gear is a health crisis for our entire planet.
                    </p>
                </div>
                <div className="faq-container_questions">
                    <h3>HOW ARE WE ACTUALLY GOING TO CLEAN UP ALL THIS TRASH?</h3>
                    <p>We’re glad you asked. Because 30M pounds is A LOT of trash (roughly equivalent to 85 football fields covered a foot deep). We’re dividing our work among three point
                        s of intervention: beaches, rivers and oceans.
                    </p>
                    <h5>Rivers</h5>
                    <p>For our rivers, #TeamSeas will fund Interceptors™, The Ocean Cleanup’s river cleanup technologies that collect trash before it can reach the ocean. The Ocean Cleanup 
                        has several Interceptors already deployed in some of the world’s most polluted rivers to catch plastic and trash upstream. #TeamSeas will support the expansion 
                        and continued operation of this work as The Ocean Cleanup takes aim at the 1% of rivers which contribute 80% of the trash flowing into the ocean from rivers.
                    </p>
                </div>
                <div className="faq-container_questions">
                    <h3>HOW CAN I HELP?</h3>
                    <p>
                    We want you to do what you do best. Talk to a friend, organize your school or business, make some art, film a video, whatever makes sense to you and your community 
                    as we work toward 30M. For #TeamTrees, we saw artists draw comics for trees, ki
                    ds hold bakesales, and tech founders one-up each other on the Leaderboard. Whoever your team is, get them on #TeamSeas. You can create a Team during checkout 
                    or join one from Search.
                    </p>
                    <p>
                    We recommend you start by telling someone else about the mission, why you’re passionate about it, and invite them to get involved at TeamSeas.org. We also encourage 
                    you to engage with and amplify #TeamSeas content across the internet. We think you’ll be surprised at who else is on #TeamSeas and how many fascinating videos are out 
                    there for you to discover. As the campaign develops, we hope you’ll co-create it with us as we rally toward our shared 30M goal. One of the most exciting parts for us 
                    is that we have no idea what you’ll come up with, and we can’t wait to see it.
                    </p>
                </div>
                <div className="faq-container_questions">
                    <h3>IS CLEANUP REALLY THE BEST SOLUTION?</h3>
                    <p>
                    The plastic pollution problem is so big that no single solution will fix it at once. But we’ve got to start somewhere. 30M pounds of trash collected is 30M pounds of
                    trash that won’t come face to face with whales, dolphins, seabirds and other beloved wildlife, and that won’t keep breaking down into smaller and smaller pieces, ending 
                    up on our dinner plates. There are a lot of ways you can tackle the problem, and we think cleanups are complementary so long as they’re not excuses for delay. By reaching 
                    a billion people through #TeamSeas videos, and activating new generations of ocean advocates, we hope to inspire a movement and demand for solutions. Plastic and our oceans
                    don’t mix, and we’re here to do something about it.
                    </p>
                </div>
                <div className="faq-container_questions">
                    <h3>WHAT ABOUT CLIMATE CHANGE?</h3>
                    <p>
                    Plastic production and climate change are inextricably linked, and both are huge problems for the ocean. Every year, 11 million metric tons of plastics enter our ocean.
                    Nearly all of these plastics are made from fossil fuels including crude oil, natural gas liquids and coal. Ocean Conservancy has estimated that the crude oil needed to 
                    make that much plastic is over 800 times more than the amount spilled during the Exxon Valdez disaster! And the greenhouse gas emissions from the plastics sector are
                    about 2 gigatons, equivalent to the emissions of 370 million passenger cars. You can learn more about the plastics-climate connection here. There’s much more we need
                    to do to tackle the climate crisis, and we hope you bring this same #TeamSeas energy to other efforts to protect the ocean and the planet. 
                    </p>
                </div>

           

                
            </div>
        </div>
    )
}