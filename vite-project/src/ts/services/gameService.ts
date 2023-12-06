import { getGame } from "./serviceBase"; 

export const getData = async () => {
    const url = "https://swapi.dev/api/people";
    const games = await getGame(url);
return games
}