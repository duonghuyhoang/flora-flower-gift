import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRoutes from "./routes";
import useScrollToTop from "./hooks/useScrollToTop/useScrollToTop";

function App() {
  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            return <Route key={index} path={route.part} element={<Page />} />;
          })}
        </Routes>
      </Router>
    </div>
  );
}

const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

export default App;
