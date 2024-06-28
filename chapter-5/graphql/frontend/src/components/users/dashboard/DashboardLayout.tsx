// Dependencies
import { FC, ReactElement, useContext } from "react";
// Contexts
import { UserContext } from "../../../contexts/user";
// Components
import Dashboard from "./Dashboard";

const Layout: FC = (): ReactElement => {
  const { connectedUser } = useContext(UserContext);

  // We only render the Dashboard if the user is connected
  if (connectedUser) {
    return <Dashboard connectedUser={connectedUser} />;
  }
  return <div />;
};

export default Layout;
