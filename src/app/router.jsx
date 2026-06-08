import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout"
import ProtectedRoute from "../routes/ProtectedRoute"
import LoginPage from "../pages/LoginPage"
import Dashboard from "../pages/Dashboard"
import KanbanBoard from "../pages/KanbanBoard"

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        element: (
            <ProtectedRoute>
                <AppLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/kanbanboard",
                element: <KanbanBoard />
            },
        ]
    },
])