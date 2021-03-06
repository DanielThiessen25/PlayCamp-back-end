import express from 'express';
import cors from 'cors';
import { handlePostSignup } from './handlers/handleSignup.js';
import { handlePostSignin } from './handlers/handleSignin.js';
import { handlePostLogout } from './handlers/handleLogout.js';
import { handleCreation } from './handlers/handleCreation.js';
import { handleLoad } from './handlers/handleLoad.js';
import { handlePostSale } from './handlers/handleSale.js';


const app = express();
app.use(cors());
app.use(express.json());

app.post("/signup", async (req, res) => await handlePostSignup(req, res));
app.post("/signin", async (req, res) => await handlePostSignin(req, res));
app.post("/logout", async (req, res) => await handlePostLogout(req, res));
app.post("/addgame", async (req, res) => await handleCreation(req, res));
app.get("/games", async (req, res) => await handleLoad(req, res));
app.post("/endsale", async (req, res) => await handlePostSale(req, res));


export default app;