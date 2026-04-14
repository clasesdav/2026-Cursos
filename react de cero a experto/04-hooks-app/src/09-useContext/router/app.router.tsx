import { createBrowserRouter, Navigate } from "react-router";
import { AboutPage } from '../pages/about/AboutPage';
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";
import { PrivateRoute } from "./PrivateRoute";


export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/profile",
    // element: <ProfilePage></ProfilePage>,
    element: <PrivateRoute element={<ProfilePage />} />,
    // children:
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "*",
    element: <Navigate to='/' />,
  },
]);