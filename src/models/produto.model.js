import { DataTypes } from "sequelize"
import { sequelize } from "../config/database"

const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING(150),
        allowNull: false,
        validate: {
            notEmpty: {msg: "Nome do Produto é obrigatório"},
            len: {
                args:[3, 150],
                msg: "Nome deve ter entre 3 e 250 caracteres"
            }
        }
    },
    descricao: {
        type: DataTypes.STRING(250),
        allowNull: true
    },
    
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate: {
            isDecimal: {msg: 'Preço inválido'},
            min: {
                args: [0],
                msg: "O Preço deve ser maior ou igual a zero."
            }
        }
    },

     estoque: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: {
                args: [0],
                msg: "Estoque não pode ser negativo"
            }
        }
    },

     image_url: {
        type: DataTypes.STRING[250],
        allowNull: false,
        validate: {
            isUrl: {
                msg: "URL da imagem inválida"
            }
        }
    }
})