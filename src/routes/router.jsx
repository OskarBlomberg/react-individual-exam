import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App/App";
import EventsPage from "../pages/EventsPage/EventsPage";
import SingleEventPage from "../pages/SingleEventPage/SingleEventPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import TicketsPage from "../pages/TicketsPage/TicketsPage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
]);

export default router;
