/*
ALGORITHM:
    -Route to the paths created in the UserNav.js module, showing only
    to the users/bands, and call each function to display information on the new pages
*/

import { Outlet, Route, Routes } from "react-router-dom"
import { AlumniLineupList } from "../bands/AlumniLineupList"
import { CurrentLineupList } from "../bands/CurrentLineupList"
import "./Views.css"

export const UserViews = () => {

    return(
    <Routes>
            <Route path="/" element={
                <>
                    <h1 className="header">Threat Fest</h1>
                    <div className="tagline">Nashville. Music. Community.</div>

                    <Outlet />
                </>
            }>

                <Route path="lineup" element={ <CurrentLineupList/> } />
				<Route path="alumni" element={ <AlumniLineupList/> } />
                <Route path="application" element={ <></> } />
                <Route path="updates" element={ <></> } />

            </Route>
        </Routes>
    )
}

/*
<h1 className="header">Threat Fest</h1>
                    <div className="tagline">Nashville. Music. Community.</div>

                    <h2 className="header">About the Fest:</h2>
                    <section className="about__container">
                        <img className="about__photo" src="https://boropulse.com/wp-content/uploads/2018/07/29497466_358395467992967_6903584969638019072_n.jpg"></img>
                        <div className="about__info">After a successful Idle Threat release show, Ernie Fabian, Zeke McKinney and Justin Jones—the three musicians behind Idle Threat's melodic hardcore sound—founded Threat Fest to build a community with other music scenes in Middle Tennessee while encouraging artistic growth and prosperity.<br/><br/>
                        "What really inspired us to actually go through with Threat Fest was our first EP release show,” McKinney said. “We thought that it would be worth it to just give throwing our own festival a shot.”<br/><br/>
                        Threat Fest has no shortage of good artistry. The show pulls from a dense pool of the best musicians in the area. Some of the bands on the lineup include Bloom, Early Humans, Ghost Key, Pumpkinseed, Short Term and West Means Home. The festival will also feature Abbi Knell, Kevin Schlereth, Nicholas Wall and many other solo artists piled on to its impressive roster of local bands.<br/><br/>
                        Threat Fest's DIY atmosphere is sprouting into a keystone festival for rock, hardcore, indie, metal and other genres in Middle Tennessee. In fact, the festival outgrew its former location and is now held at Carpe Artista to cater to its sizable headcount. The wide range of variety should bring plenty of diehard music fans back to Threat Fest in 2018.<br/><br/>
                        The music industry can be a competitive playground in which to maneuver, and there are few events that celebrate the hard work of being a musician. Instead of stepping on one another to move forward, Threat Fest gives bands a stage ripe with positivity and acceptance. Sharing the stage, instead of taking it, is what Threat Fest is all about, organizers say.</div>
                    </section>
*/
