import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/MainLayout";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import UpdateCoffee from "../pages/UpdateCoffee";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/add-coffee",
          element: <AddCoffee></AddCoffee>
        },
        {
          path: "/update-coffee",
          element: <UpdateCoffee></UpdateCoffee>
        }
      ]
    },
  ]);

export default router;