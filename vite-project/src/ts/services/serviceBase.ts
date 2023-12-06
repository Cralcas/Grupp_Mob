import axios from "axios";
import { IResults } from "../models/Results";


export const getGame = async(url:string) => {
    const response = await axios.get<IResults>(url)
    console.log(response.data.results); 

response.data.results.forEach((character) => {
    const container = document.getElementById("app") as HTMLDivElement;
    const personCard = document.createElement("div");

    const header = document	.createElement("h3");
    const details = document.createElement("p");
    personCard.className = 'personCard'
    header.innerHTML = character.name;
    details.innerHTML = character.gender + " " + character.mass + " " + character.skin_color + " " + character.birth_year ;
   
container.appendChild(personCard);
personCard.appendChild(header)
personCard.appendChild(details);
    console.log(character.name)
});
}

