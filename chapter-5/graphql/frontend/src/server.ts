// Dependencies
import express, { Request, Response, NextFunction } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import cors from "cors";
import session from "express-session";

//Middleware
import { isConnected } from "./middlewares/user";

//Config
import config from "./config";

// Express app
const app = express();
const port = process.env.NODE_PORT || 3000;
const DIST_DIR = path.dirname(__dirname, "../dist");
const HTML_FILE = path.join(DIST_DIR, "index.html");

// Making the dist directory static
app.use(express.static(DIST_DIR));

// Middlewares
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: config.security.secretKey,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(config.security.secretKey));
app.use(cors({ credentials: true, origin: true }));

// Routes
app.get(
  "/dashboard",
  isConnected(
    true,
    ["super-admin", "admin"], // Those are allowed permissions
    `/login?redirectTo=/dashboard`
  ),
  (req: Request, res: Response, next: NextFunction) => {
    // If the user isConnected then we allow the access to the dashboard page otherwise to /login
    next();
  }
);

// Forcing only No connected users to access to /login, if a connected user
// try to access will be directed to the homepage
app.get('/login',isConnected(false), (req:Request, res:Response, next: NextFunction)=>{
    next()
})

app.get(`logout`, (req:Request, res:Response)=>{
    // This will clear our "at" cookie and redirect to home
    res.clearCookie('at')
    res.redirect('/')
})

app.get('*', (req:Request, res:Response)=>{
    // We render our React application
    res.sendFile(HTML_FILE)
})

// Listening
app.listen(port, ()=> console.log(`Running at http://localhost:${port}`))