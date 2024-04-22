import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Join from "./pages/Join";

const App = () => {
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
