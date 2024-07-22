import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiArrowSmLeft, HiHome, HiUser, HiViewBoards } from "react-icons/hi";
import { TbMusicSearch } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";

const DSideBar = ({ isOpen, toggleSidebar }) => {
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
    <div
      className={`fixed inset-0 lg:relative lg:inset-auto lg:w-56 bg-white shadow-lg z-40 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      <Sidebar className="w-full h-full md:w-56">
        <Sidebar.Items>
          <Sidebar.ItemGroup className="gap-3">
            <Link to="/">
              <Sidebar.Item icon={HiHome} as="div">
                Home
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=profile">
              <Sidebar.Item active={tab === "profile"} icon={HiUser} as="div">
                Profile
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=views">
              <Sidebar.Item
                active={tab === "views"}
                icon={HiViewBoards}
                labelColor="dark"
                as="div"
              >
                View Favorites
              </Sidebar.Item>
            </Link>
            <Link to="/dashboard?tab=search">
              <Sidebar.Item
                active={tab === "search"}
                icon={TbMusicSearch}
                labelColor="dark"
                as="div"
              >
                Search Lyrics
              </Sidebar.Item>
            </Link>
            <Sidebar.Item icon={HiArrowSmLeft} className="cursor-pointer">
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default DSideBar;
