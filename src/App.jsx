import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CreatePost from "./routes/user/CreatePost";
import History from "./routes/user/History";
import Posts from "./routes/user/Posts";

function App() {
    const routeElements = (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="user">
                <Route path="create-post" element={<CreatePost />} />
                <Route path="posts" element={<Posts />} />
                <Route path="history" element={<History />} />
            </Route>
        </Routes>
    );

    return (
        <div className="container mx-auto shadow-2xl flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>

            <main className="flex-1">{routeElements}</main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
