import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../components/DashProfile";
import SearchPage from "./SearchPage";
import DSideBar from "../components/DSideBar";
import DashViews from "../components/DashViews";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParam = new URLSearchParams(location.search);
    const tabFromUrl = urlParam.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="flex h-screen overflow-hidden mt-16">
      {" "}
      {/* Adjusted for a fixed header */}
      {/* Sidebar */}
      <DSideBar />
      <div className="flex-grow p-4">
        {/* Conditional rendering based on tab state */}
        {tab === "profile" && <DashProfile />}
        {tab === "search" && <SearchPage />}
        {tab === "views" && <DashViews />}
      </div>
    </div>
  );
};

export default Dashboard;
