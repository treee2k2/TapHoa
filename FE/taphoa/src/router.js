
import Homepage from "./pages/user/homepage";
import ProfilePage from "./pages/user/profilePage";
import MasterLayout from "./pages/user/theme/masterLayout";
import { ROUTERS } from "./utils/router";
import { Routes, Route } from "react-router-dom";
const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: <Homepage />,
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />,
        },
        {
            path: ROUTERS.USER.PRODUCTS,
            component: <ProfilePage />,
        },
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
}
export default RouterCustom;