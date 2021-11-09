import * as dotenv from "dotenv";
import express,{Request,Response} from "express";
import cors from "cors";

//Routes
import { publicationRouter } from './routes/publication-router';
//init
dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/publication', publicationRouter);



app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
})