import { createBrowserRouter } from "react-router-dom";
import Layouts from "../components/Layouts";
import App from "../pages/App/App";
import EventsPage from "../pages/EventsPage/EventsPage";
import SingleEventPage from "../pages/SingleEventPage/SingleEventPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import TicketsPage from "../pages/TicketsPage/TicketsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/events/:id",
        element: <SingleEventPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
      {
        path: "/tickets",
        element: <TicketsPage />,
      },
    ],
  },
]);

export default router;
