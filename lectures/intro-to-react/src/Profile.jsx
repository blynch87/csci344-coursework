import "./Profile.css";
import React from "react";

 export default function Profile({name, year, school}) {
        
     return (
         <section className="profile">
             <h3>{name}</h3>
             <p>{year}</p>
             <p>{school}</p>
         </section>
     );
 }