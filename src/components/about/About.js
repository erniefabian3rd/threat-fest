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
import { useState, useEffect } from "react";
import image1 from "../../images/slideshow_1.jpg"
import image2 from "../../images/slideshow_2.jpg"
import image3 from "../../images/slideshow_3.jpg"
import image4 from "../../images/slideshow_4.jpg"
import image5 from "../../images/slideshow_5.jpg"
import image6 from "../../images/slideshow_6.jpg"
import image7 from "../../images/slideshow_7.jpg"
import image8 from "../../images/slideshow_8.jpg"
import image9 from "../../images/slideshow_9.jpg"
import image10 from "../../images/slideshow_10.jpg"
import about_image from "../../images/about_image.jpg"

export const About = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const nextSlide = () => {
        const next = currentSlide === 9 ? 0 : currentSlide + 1
        setCurrentSlide(next)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide()
        }, 4000)

        return () => {
            clearInterval(intervalId)
        }
    }, [currentSlide])

    return (
        <>
            <section className="slideshow__container">
                <div className="slideshow__info__container">
                    <h2 className="header">Nashville. <br />Music. <br /> Community. <br /></h2>
                </div>
                <img className="landing__image__top" src={
                    currentSlide === 0 ? image1 :
                        currentSlide === 1 ? image2 :
                            currentSlide === 2 ? image3 :
                                currentSlide === 3 ? image4 :
                                    currentSlide === 4 ? image5 :
                                        currentSlide === 5 ? image6 :
                                            currentSlide === 6 ? image7 :
                                                currentSlide === 7 ? image8 :
                                                    currentSlide === 8 ? image9 :
                                                        image10
                } alt={`Slide ${currentSlide + 1}`} />
            </section>
            <section className="about__container">
                <img className="about__image" src={about_image}></img>
                <div className="text__container">
                    <h3 className="about__info__header">Threat Fest</h3>
                    <p className="about__info">Threat Fest is an annual, two-night DIY music festival in Middle Tennessee comprised of the most talented and hard working bands/musicians from both Nashville and beyond. What began as a simple effort amongst friends to put together a great weekend event has transformed over time to become much more.<br/><br/>With a strong emphasis on community and the encouragement from peers, Threat Fest has become a safe space for musicians of all beliefs and backgrounds to freely pursue their passion for music and creativity. For this group, it's about <b>community</b> over <s>competition</s>.<br/><br/>Whether you have played one of the three stages, displayed your paintings or graphic art, set up a booth to promote your business, or merely attended as a fan, you are part of the Threat Fest family, and <b>you will always have a place you <u>belong</u></b>.</p>
                </div>
            </section>
            <section className="about__details__container">
                <div className="details">
                    <h2 id="detail__header">Nashville</h2>
                    <p className="detail__text">On any given night in Music City the streets of downtown are filled with the sounds of performers and showgoers alike. Often overlooked, however, are the same sounds coming from basements and independent music venues on the outskirts of town. This is where some of the most passionate and talent-filled performances take place.<br/><br/> Threat Fest has always aimed to bring underground Nashville and regional bands to the forefront of the conversation.   </p>
                </div>
                <div className="details">
                    <h2 id="detail__header">Music</h2>
                    <p className="detail__text">For many of us, music is the ultimate outlet for creativity. Throughout all of time, people have been expressing themselves through this special artform. Music has the ability to captivate us and bring us together in ways that very few activites do. However, it is often underfunded and overlooked, making it increasingly difficult to make a living.<br/><br/>Threat Fest prides itself on providing an opportunity for many bands to play the biggest show of their career, in turn inspiring them to continue the pursuit of their dream.</p>
                </div>
                <div className="details">
                    <h2 id="detail__header">Community</h2>
                    <p className="detail__text">The music industry can be a cuthroat and often discouraging place in which to operate. With the large amount of people trying to "make it", competition can feel intimidating and overwhelming. However, through encouragment and the idea that if one of us succeeds then we all succeed, true musicianship and creativity can flourish.<br/><br/>Threat Fest creates an even playing field for all levels of artistry and stands firm on the foundational belief that each of us has something to offer to our scene.</p>
                </div>
            </section>
        </>
    )
}

