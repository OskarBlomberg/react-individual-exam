import { createBrowserRouter } from "react-router-dom";
import App from "../pages/app/App";
import EventsPage from "../pages/eventsPage/EventsPage";
import SingleEventPage from "../pages/singleEventPage/SingleEventPage";
import OrderPage from "../pages/orderPage/OrderPage";
import TicketsPage from "../pages/ticketsPage/TicketsPage";
import ErrorPage from "../pages/errorPage/ErrorPage";

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
