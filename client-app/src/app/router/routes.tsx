import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activites/dashboard/ActivityDashboard";
import ActivityForm from "../../features/activites/form/ActivityForm";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '', element: <HomePage /> },
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'createActivity', element: <ActivityForm /> },
        ]
    }
]
export const router = createBrowserRouter(routes)


