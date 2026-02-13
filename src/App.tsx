import { Routes, Route } from "react-router-dom";
import { StatsGrid } from "./components/Dashboard/StatGrid";
import { ToolsTable } from "./components/Dashboard/ToolsTable";
import { ToolsPage } from "./pages/Tools";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>
          <StatsGrid/>
          <ToolsTable/>
        </div>} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
