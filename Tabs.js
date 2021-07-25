import React, { useState } from 'react';

const Tabs = () => {
    const options = ["Lunch", "Dinner", "Brunch"]
    const imgLunch = "https://www.qantas.com/content/travelinsider/en/eat-and-drink/how-not-to-overeat-at-an-italian-long-lunch/_jcr_content/parsysTop/hero.img.full.medium.jpg/1532411132220.jpg";
    const imgDinner = "https://s27363.pcdn.co/wp-content/uploads/2018/05/Best-Views-of-Italy.jpg.optimal.jpg";
    const imgBrunch = "https://assets-global.website-files.com/5dd5d96cb04202979d27778b/5f906e8a4c349a012af03349_italian-red-wine-2.jpg";
    const descLunch = "Our lunch menu is served Monday-Friday from 11am - 3pm. All entrees come with a side of our House Italian Salad and your choice of soup.Our goal is to have you leave happy no matter the time of the day!";
    const descDinner = "Come join us for an unforgettable dinner here at Alessandro's! You will find something you like on our menu, we guarantee it with choices such as our Seven Layer Lasagna, our Caprese Pizza, our Melanzane di Parmigiana, and more!"
    const descBrunch = "The best way to soak up the weekend is with a family breakfast with out house specialties! Served only on Saturdays and Sundays, with dynamic specials!"
    const [active, setActive] = useState("")

    return (
        <>
            <div class="time-tab">
                <div className="times" style={{ display: "contents"}}>
                    {options.map(option => (
                        <button
                            style={{ fontSize: "2rem" }}
                            type="button"
                            key={option}
                            classname={"menus"}
                            onClick={() => setActive(option) }
                            
                        >  
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            <div class="take-full" style={{display: "flex"}}>
                <div className="menu-times">
                    {active  === "Lunch" && <TimeOfDay src={imgLunch} description={descLunch} />} 
                    {active === "Dinner" && <TimeOfDay src={imgDinner} description={descDinner}/>}
                    {active === "Brunch" && <TimeOfDay src={imgBrunch} description={descBrunch} />}
                </div>
            </div>
            
        </>
        )
    }
 const TimeOfDay = ({ src, description }) => {
    
     return (
            <div className="current-menu-times" style={{display: "flex"}}>
                <div style={{maxWidth: "450px", maxHeight: "450px"}}> 
                    <img src={src} alt="" style={{ width: "450px", height: "450px", float: "right" }} />
                </div>
                <div className="wording" style={{ textAlign: "left", maxHeight: "450px"}}>
                    <h1 style={{ margin: "25px", maxHeight: "450px"}}>{description}</h1>
                </div>
            </div>
     )
 }
export default Tabs
