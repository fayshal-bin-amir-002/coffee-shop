import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
import Users from "../components/Users";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://coffee-store-server-theta-ten.vercel.app/coffee')
        },
        {
          path: "/add-coffee",
          element: <AddCoffee></AddCoffee>
        },
        {
          path: "/update-coffee/:id",
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({params}) => fetch(`https://coffee-store-server-theta-ten.vercel.app/coffee/${params.id}`)
        },
        {
          path: "/coffee-details/:id",
          element: <CoffeeDetails></CoffeeDetails>,
          loader: ({params}) => fetch(`https://coffee-store-server-theta-ten.vercel.app/coffee/${params.id}`)
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        },
        {
          path: "/signin",
          element: <SignIn></SignIn>
        },
        {
          path: "/user",
          element: <Users></Users>,
          loader: () => fetch('https://coffee-store-server-theta-ten.vercel.app/user')
        }
      ]
    },
  ]);

export default router;