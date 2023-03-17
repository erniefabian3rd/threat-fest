/*
GOAL:
    Create the About the Fest information page that appears when the
        signed in user logs into the application
ALGORITHM:
    -Create and export a function that returns the html
    -Import it and create a new route in both the UserViews.js
        and AdminViews.js modules before the other routes
*/

import "./About.css"

export const About = () => {
    return <>
            <section className="about__container">
                <h1 className="header">Nashville | Music | Community</h1>
                    <section className="about__info__container">
                        <img className="about__photo" src="https://boropulse.com/wp-content/uploads/2018/07/29497466_358395467992967_6903584969638019072_n.jpg"></img>
                        <div className="about__info">After a successful Idle Threat release show, Ernie Fabian, Zeke McKinney and Justin Jones—the three musicians behind Idle Threat's melodic hardcore sound—founded Threat Fest to build a community with other music scenes in Middle Tennessee while encouraging artistic growth and prosperity.<br/><br/>
                        "What really inspired us to actually go through with Threat Fest was our first EP release show,” McKinney said. “We thought that it would be worth it to just give throwing our own festival a shot.”<br/><br/>
                        Threat Fest has no shortage of good artistry. The show pulls from a dense pool of the best musicians in the area. Some of the bands on the lineup include Bloom, Early Humans, Ghost Key, Pumpkinseed, Short Term and West Means Home. The festival will also feature Abbi Knell, Kevin Schlereth, Nicholas Wall and many other solo artists piled on to its impressive roster of local bands.<br/><br/>
                        Threat Fest's DIY atmosphere is sprouting into a keystone festival for rock, hardcore, indie, metal and other genres in Middle Tennessee. In fact, the festival outgrew its former location and is now held at Carpe Artista to cater to its sizable headcount. The wide range of variety should bring plenty of diehard music fans back to Threat Fest in 2018.<br/><br/>
                        The music industry can be a competitive playground in which to maneuver, and there are few events that celebrate the hard work of being a musician. Instead of stepping on one another to move forward, Threat Fest gives bands a stage ripe with positivity and acceptance. Sharing the stage, instead of taking it, is what Threat Fest is all about, organizers say.</div>
                    </section>
            </section>
        </>
}