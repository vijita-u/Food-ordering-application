import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import ErrorBoundary from "./components/ErrorBoundary";
// import AboutPage from "./components/AboutPage";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// const AboutPage = lazy(() => import("./components/AboutPage"));

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="bg-background font-body font-normal tracking-wider w-dvw h-auto pb-10 px-10">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

// Configure the Router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      // {
      //   path: "/about",
      //   element: <Suspense fallback={<h1>Loading...</h1>}><AboutPage /></Suspense>,
      // },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorBoundary />,
  },
]);

// Configure the router -> Provide this router config to our app

const root = ReactDOM.createRoot(document.getElementById("root"));

// Instead of directly rendering the <App /> component, we are going to PROVIDE the component using react router
// root.render(<App />);

root.render(<RouterProvider router={appRouter} />);
