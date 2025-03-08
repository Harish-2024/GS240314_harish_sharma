import { createBrowserRouter, Navigate } from "react-router-dom";
import Store from "../pages/store";
import Sku from "../pages/sku";
import Planning from "../pages/planning";
import Charts from "../pages/charts";
import MainLayout from "../layouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/store" replace />
            },
            {
                path: 'store',
                element: <Store />
            },
            {
                path: 'sku',
                element: <Sku />
            },
            {
                path: 'planning',
                element: <Planning />
            },
            {
                path: 'charts',
                element: <Charts />
            }
        ]
    }
])

export default router