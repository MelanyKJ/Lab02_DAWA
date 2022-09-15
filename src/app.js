import express from "express";
import cors from "cors";
import { user } from "./components";
import { product } from "./components";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {res.send('Welcome')})
app.use("/clientes", user);
app.use("/productos",product);
