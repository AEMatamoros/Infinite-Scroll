import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then(async connection => {

    console.log("Conected to DB");
    
}).catch(error => console.log(error));

export const conection = createConnection;