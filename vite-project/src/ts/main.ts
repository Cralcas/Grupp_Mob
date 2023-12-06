import './../scss/style.scss'
import { getData } from './services/gameService'

const getDataList = await getData();

console.log(getDataList)




