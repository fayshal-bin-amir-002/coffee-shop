import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";
import CoffeeDetails from "../pages/CoffeeDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('http://localhost:3200/coffee')
        },
        {
          path: "/add-coffee",
          element: <AddCoffee></AddCoffee>
        },
        {
          path: "/update-coffee/:id",
          element: <UpdateCoffee></UpdateCoffee>,
          loader: ({params}) => fetch(`http://localhost:3200/coffee/${params.id}`)
        },
        {
          path: "/coffee-details/:id",
          element: <CoffeeDetails></CoffeeDetails>,
          loader: ({params}) => fetch(`http://localhost:3200/coffee/${params.id}`)
        }
      ]
    },
  ]);

export default router;