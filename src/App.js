import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar title="SAMACHAR" />
      <BrowserRouter>
        <Routes>
          <Route path="/AllNews" element={<News selectnews={false} />} />
          <Route path="/TopHeadlines" element={<News selectnews={true} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
//jhhthht
export default App;
