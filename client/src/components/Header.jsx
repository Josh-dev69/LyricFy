import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaUserCircle } from "react-icons/fa";
import { HiDocumentSearch, HiUser, HiViewBoards } from "react-icons/hi";
import { useEffect, useState } from "react";

const Header = () => {
  const path = useLocation().pathname;
  const isDashboard = path === "/dashboard";

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
    <Navbar className="border-b-2 fixed top-0 left-0 right-0 z-50 ">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          LyricFy
        </span>
      </Link>

      {isDashboard && (
        <div className="flex gap-2 md:order-2">
          <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
            <FaMoon />
          </Button>
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Ebube Joshua</span>
              <span className="block truncate text-sm font-medium">
                ebubejoshua69@gmail.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item className="font-bold">
              <span className="pr-2 text-green-700">
                <FaUserCircle />
              </span>{" "}
              <Link to="/dashboard?tab=profile">Profile</Link>
            </Dropdown.Item>

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
                icon={HiDocumentSearch}
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
            <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
              <FaMoon />
            </Button>
            <Link to="/sign-in">
              <Button gradientDuoTone="purpleToBlue" outline>
                Sign In
              </Button>
            </Link>
            <Navbar.Toggle />
          </div>

          <Navbar.Collapse>
            <Navbar.Link active={path === "/"} as={"div"}>
              <Link to="/">Home</Link>
            </Navbar.Link>
            <Navbar.Link active={path === "/about"} as={"div"}>
              <Link to="/about">About</Link>
            </Navbar.Link>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
};

export default Header;
