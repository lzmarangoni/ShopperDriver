import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js'
import conectaNoDB from './config/dbConect.ts';


const conexao = await conectaNoDB()

conexao.on("error", (erro:any)=>{ 
  console.error("Erro de conexão", erro)
})
conexao.once("open", ()=>{
  console.log("Conexão com banco realizada com sucesso!")
})


dotenv.config();
const app = express();
routes(app)
  

export default app


