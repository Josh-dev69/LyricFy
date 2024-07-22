import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaUserCircle } from "react-icons/fa";
import { HiViewBoards } from "react-icons/hi";
import { TbMusicSearch } from "react-icons/tb";
import { useEffect, useState } from "react";
import { useUser } from "../context/UserContext";

const Header = () => {
  const { user } = useUser();
  const path = useLocation().pathname;
  const isDashboard = path === "/dashboard";

  const location = useLocation();
  const [tab, setTab] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const urlParam = new URLSearchParams(location.search);
    const tabFromUrl = urlParam.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  useEffect(() => {
    const darkModePref = localStorage.getItem("darkMode");
    if (darkModePref === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
    localStorage.setItem("darkMode", newDarkMode.toString());
  };

  return (
    <Navbar className="border-b-2 fixed top-0 left-0 right-0 z-50 ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          LyricFy
        </span>
      </Link>

      {isDashboard && user && (
        <div className="flex gap-2 md:order-2">
          <Button
            className="w-12 h-10 hidden sm:inline"
            color="gray"
            pill
            onClick={toggleDarkMode}
          >
            <FaMoon
              className={darkMode ? "text-yellow-400" : "text-gray-800"}
            />
          </Button>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">
                {user.firstName} {user.lastName}
              </span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Link to="/dashboard?tab=profile">
              <Dropdown.Item
                active={tab === "profile"}
                icon={FaUserCircle}
                labelColor="dark"
                as="div"
              >
                Profile
              </Dropdown.Item>
            </Link>

            <Link to="/dashboard?tab=views">
              <Dropdown.Item
                active={tab === "views"}
                icon={HiViewBoards}
                labelColor="dark"
                as="div"
              >
                View Lyrics
              </Dropdown.Item>
            </Link>

            <Link to="/dashboard?tab=search">
              <Dropdown.Item
                active={tab === "search"}
                icon={TbMusicSearch}
                labelColor="dark"
                as="div"
              >
                Search Lyrics
              </Dropdown.Item>
            </Link>

            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      )}

      {!isDashboard && (
        <>
          <div className="flex gap-2 md:order-2">
            <Button
              className="w-12 h-10 hidden sm:inline"
              color="gray"
              pill
              onClick={toggleDarkMode}
            >
              <FaMoon
                className={darkMode ? "text-yellow-400" : "text-gray-800"}
              />
            </Button>
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
            <Navbar.Toggle />
          </div>
        </>
      )}
    </Navbar>
  );
};

export default Header;
