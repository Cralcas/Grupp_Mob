import axios from "axios";
import { IResults } from "../models/Results";


export const getGame = async(url:string) => {
    const response = await axios.get<IResults>(url)
    console.log(response.data.results); 

// response.data.forEach((character) => {
//     character.name
//     character.gender
//     character.mass
//     character.skin_color
//     character.birth_year

//     console.log(character)
// });
}

