import React from "react";
import {Link, Outlet} from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <h1>Company Website</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

export const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Outlet />
        </div>
    )
}

export const Events = () => {
    return (
        <div>
            <h1>Events</h1>
        </div>
    )
}

export const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}

export const Services = () => {
    return (
        <div>
            <h1>Services</h1>
        </div>
    )
}

export const CompanyHistory = () => {
    return (
        <div>
            <h1>CompanyHistory</h1>
        </div>
    )
}

export const Location = () => {
    return (
        <div>
            <h1>Location</h1>
        </div>
    )
}



export const Whoops404 = () => {
    return (
        <div>
            <h1>This page does not exist!</h1>
        </div>
    )
}