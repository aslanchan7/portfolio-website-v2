import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home"
import { AllProjects } from "./pages/all_projects/AllProjects"
import { GoodShirtGreenShirt } from "./pages/project_details/good-shirt-green-shirt";
import { Athenaeum } from "./pages/project_details/athenaeum";
import { VisionFridge } from "./pages/project_details/vision-fridge";
import styles from "./App.module.css";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<AllProjects />}/>
          
          <Route path="/good-shirt-green-shirt" element={<GoodShirtGreenShirt />}/>
          <Route path="/athenaeum" element={<Athenaeum />}/>
          <Route path="/vision-fridge" element={<VisionFridge />}/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
