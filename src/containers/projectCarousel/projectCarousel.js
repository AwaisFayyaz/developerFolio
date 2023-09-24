import React from 'react';
import Carousel from '../../components/carousel/carousel';
import carousel_image_textBehind from "../../assets/images/TextBehind-img-1.jpg";
import carousel_image_WifiLink from "../../assets/images/WifiLink-img-1.jpg"

function ProjectCarousel() {
    const carouselData = [
        {
            id: 1, title: "TextBehind",
            description: "TextBehind® is a secure nationwide communication service for families, friends and TextPals (pen pals) to consistently stay in touch with their incarcerated loved ones conveniently and affordably.",
            img: carousel_image_textBehind, myRoleDescription: "Designed and developed this application from scratch, then published it on the App Store.",
            techUsed: "UIKit, SQLite, REST API Integration, Google Maps, FireBase, Push Notifications, Responsive UI, Third Party, Stripe Payment" 
            
        },
        {
            id: 2, title: "WifiLink",
            description: "WiFiLink is the first app to offer encrypted QR code and WiFi-Shake function for Internet connection sharing. Lets you easily share your Wi-Fi or hotspot connection without giving out your password!",
            img: carousel_image_WifiLink, myRoleDescription: "Revamped the User interface, Implemented speed test, QR Code scanning, and other features.",
            techUsed: "UIKit, SQLite, REST API Integration, Google Maps, FireBase, Push Notifications, Responsive UI, Third Party, Stripe Payment"
         }
    ]

    return (
        <div>
            <Carousel>
                {carouselData.map(carItem => (
                    <div className='projects-root' key={carItem.id}>
                        <div className='projects-left'>
                            <h2> {carItem.title} </h2>
                            <p className='project-description'>
                                {carItem.description}
                            </p>
                            
                            <h2>My Role</h2>
                            <p className='project-description'>
                                {carItem.myRoleDescription}
                            </p>

                            <h2>Tech Used</h2>
                            <p className='project-description'>
                                {carItem.techUsed}
                            </p>

                            </div>
                        <div className='projects-right'><img src={carItem.img} /></div>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default ProjectCarousel