import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSetTheme } from "./features/theme/useSetTheme";

import AppLayout from "./ui/AppLayout";
import Join from "./pages/Join";

const App = () => {
    useSetTheme();

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/join" element={<Join />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
