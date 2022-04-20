import React from "react";
import Comments from "../components/Comments/Comments.js";
import Contacts from "../components/Contacts/Contacts.js";
import Footer from "../components/Footer.js";
import Hero from "../components/Hero/Hero";
import HowWeWork from "../components/HowWeWork";
import Services from "../components/Services/Services";
import ShallowInfo from "../components/ShallowInfo";

export default function Home() {
    return (
        <div>
            <Hero />
            <main>
                <ShallowInfo />
                <Services />
                <HowWeWork />
                <Comments />
                <Contacts />
                <Footer />
            </main>
        </div>
    );
}
