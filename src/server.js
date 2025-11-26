import { Sequelize } from "sequelize"   
import express from 'express';
import { log } from "node:console";

const HOST = '127.0.0.1'
const PORT = '5000'

const app = express();

app.use(express.json())

app.get('/', (req, res) =>{
    res.set('API de Produtos funcionando')
})

const sequelize = new Sequelize(
  "postgresql://neondb_owner:npg_ojQJVrn9Ha0i@ep-damp-forest-ae78clxf-pooler.c-2.us-east-2.aws.neon.tech/planteidb?sslmode=require&channel_binding=require",
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
    logging: true,
  }
);

try {
    await sequelize.authenticate()
    console.log('Conectado ao banco de dados!');
    
} catch (error) {
    console.error('Erro ao conectar ao banco')
    
}
