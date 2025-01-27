import "./Profile.css";
import React from "react";

 export default function Profile({name, picture, year, school}) {
        
     return (
         <section className="profile">
             <h2>{name}</h2>
             <img src={picture} />
             <p>{bio}</p>



         </section>
     );
 }