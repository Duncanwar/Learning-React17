//Dependencies
import { Request, Response, NextFunction } from "express";

//Lib
import { getUserData } from "../jwt";

export const isConnected =
  (isLogged = true, privileges = ["user"], redirectTo = "/") =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    //Getting the user information by passing our 'at' cookie
    const user = await getUserData(req.cookies.at);

    if (!user && !isLogged) {
      // This is to allow No connected users
      return next();
    }

    //Allowing just connected users and validating privileges...
    if (user && isLogged) {
      // If user is connected and is super-admin
      if (
        privileges.includes("super-admin") &&
        user.privilege === "super-admin"
      ) {
        return next();
      }
      //If user is connected and is admin...
      if (privileges.includes("admin") && user.privilege === "admin") {
        return next();
      }

      // If user is connected and is not super-admin or admin.
      res.redirect(redirectTo);
    } else {
      // If user is not connected
      res.redirect(redirectTo);
    }
  };
