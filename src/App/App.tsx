import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";
import Navbar from "../components/ui/Navbar/Navbar";
import { Route, Routes } from "react-router";
import Home from "../pages/Home/Home";
import Editor from "../pages/Editor/Editor";
import Thumbnail from "../pages/Thumbnail/Thumbnail";

const App: React.FC<undefined> = () => {
  return (
    <>
      <div className="App">
        <FlexH3Grow>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/editor" Component={Editor} />
            <Route path="/editor/:id" Component={Editor} />
            <Route path="/thumbnail" Component={Thumbnail} />
          </Routes>
          <Footer />
        </FlexH3Grow>
      </div>
    </>
  );
};

export default App;
