// App.js
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useEffect } from "react";
import { useAppStore } from "./stores/store";
import AppLoader from "./components/AppLoader";

function App() {
  const fetchAppData = useAppStore((state) => state.fetchAppData);
  const { loading, error, appData } = useAppStore();

  useEffect(() => {
    fetchAppData();
  }, [fetchAppData]);
  if (loading) {
    return <AppLoader />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Routes>
      <Route path="/*" element={<AppRoutes />} />
    </Routes>
  );
}

export default App;
