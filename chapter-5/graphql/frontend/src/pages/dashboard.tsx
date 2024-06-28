// Components
import DashboardLayout from '../compoents/dashboard/DashboardLayout';

//Contexts
import UserProvider from '../contexts/user';

const Page = () => (
    <UserProvider>
        <DashboardLayout />
    </UserProvider>
)

export default Page;