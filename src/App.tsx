import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSetTheme } from "./features/theme/useSetTheme";
import { Toaster } from "./ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, lazy } from "react";

import AppLayout from "./ui/AppLayout";
import UserProtectedRoute from "./features/auth/UserProtectedRoute";
import FullPageSpinner from "./ui/FullPageSpinner";

const queryClient = new QueryClient();

const Join = lazy(() => import("./pages/Join"));

const App = () => {
    useSetTheme();

    return (
        <>
            <Toaster />

            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<FullPageSpinner />}>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<AppLayout />}>
                                <Route
                                    index
                                    element={
                                        <UserProtectedRoute>
                                            <h1>home</h1>
                                        </UserProtectedRoute>
                                    }
                                />
                                <Route path="/join" element={<Join />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </QueryClientProvider>
        </>
    );
};

export default App;
