/*
This index is for storing the information about the Portfolio.
For each Portfolio it can have Name of the Portfolio, brief description, screenshot, links to github and deployed. 
You can only focused on adding and modifying Portfolio's information.
This is not the decorating part.

        {
            projectName: "",
            description: "",
            screenshot: "",
            github: "",
            deployed: "",
        }

*/
import React from 'react';
import Project from '../Project';

const projects = [
    {
        projectName: "Bookemon",
        description: "It's a Reading gamification for both Pokemon and Book lovers. This app allows them to search for the book they currently reading and discover which pokemon happens to like that book you search",
        screenshot: "Bookemon.png",
        github: "https://github.com/JeanSuw/1-project-to-rule",
        deployed: "https://jeansuw.github.io/1-project-to-rule/",
        madeby: "Darryl Tillman, Jay Masters, Bryan Taylor, Nhan Tran and me."
    },
    {
        projectName: "Plentiful Pantry",
        description: "A hybrid of pantry and shopping list",
        screenshot: "PlentifulPantry.png",
        github: "https://github.com/JeanSuw/Plentiful_Pantry",
        deployed: "https://plentiful-pantry.herokuapp.com/api/users/login",
        madeby: "Darryl Tillman, Getnet Ali, Erin Wallace, and me"
    },
    {
        projectName: "Scribbles of the Frantics",
        description: "It's a simple text editor",
        screenshot: "Scribbles.png",
        github: "https://github.com/JeanSuw/scribbles-of-the-frantics",
        deployed: "https://scribbles-of-the-frantics.herokuapp.com/",
        madeby: "Me"
    },
    {
        projectName: "Madman's Password",
        description: "It's a random generated password based on criteria you as a user choose",
        screenshot: "MadmanPasswordGenerator.png",
        github: "https://github.com/JeanSuw/madman-password",
        deployed: "https://jeansuw.github.io/madman-password/",
        madeby: "Me"
    },
    {
        projectName: "Jean's work Portfolio (Early version)",
        description: "This is the early version of Jean's portfolio with no CSS frameworks",
        screenshot: "JeanPortfolioOldVers.png",
        github: "https://github.com/JeanSuw/Jean-Work-Portfolio",
        deployed: "https://jeansuw.github.io/Jean-Work-Portfolio/",
        madeby: "Me"
    }
];

function Myworks () {
    
    
    return (
        <section>
            <h2>My Projects</h2>
            <Project projects={projects} />
        </section>
    );
}


export default Myworks;