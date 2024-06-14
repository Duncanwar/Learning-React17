// Dependencies
import dotenv from "dotenv";
//Configuration
import config from './config/config.json';
//Loading .env vars
dotenv.config()

//Types
type DB = {
    dialect: string
    host: string
    port: string
    database: string
    usernames: string
    password: string
}

type Security = {
    secretKey: string
    expiresIn: string
}

type Server = {
    port: number
}