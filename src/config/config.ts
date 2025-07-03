import {Sequelize} from 'sequelize';
import dotenv from "dotenv";
import path from "path";

dotenv.config({path: path.join((process.cwd(), ".env"))});

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


const config = {
    port: process.env.PORT,
}

export {
    sequelize,
    config
}