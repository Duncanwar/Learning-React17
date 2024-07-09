// Dependencies
import { FC, ReactElement, useContext } from "react";
// Contexts
import { UserContext } from "../../contexts/user";
// Components
import Login from "./Login";
// Interfaces
interface IProps {
  currentUrl: string;
}

const Layout: FC<IProps> = ({ currentUrl }): ReactElement => {
  const { login } = useContext(UserContext);
  return <Login login={login} currentUrl={currentUrl} />;
};

export default Layout;
