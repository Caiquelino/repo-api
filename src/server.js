import express from 'express';
import { log } from "node:console";

const HOST = '127.0.0.1'
const PORT = '5000'

const app = express();

app.use(express.json())

app.get('/', (req, res) =>{
    res.set('API de Produtos funcionando')
})



try {
    await sequelize.authenticate()
    console.log('Conectado ao banco de dados!');
    
} catch (error) {
    console.error('Erro ao conectar ao banco')
    
}
