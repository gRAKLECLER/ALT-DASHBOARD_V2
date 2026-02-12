/* eslint-disable react-hooks/static-components */
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import {
  Menu,
  Search,
  Bell,
  Moon,
  Settings
} from "lucide-react";

export const Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      <Link
        to="/"
        onClick={onClick}
        className="hover:text-black text-gray-600"
      >
        Dashboard
      </Link>
      <Link
        to="/tools"
        onClick={onClick}
        className="hover:text-black text-gray-600"
      >
        Tools
      </Link>
      <Link
        to="/analytics"
        onClick={onClick}
        className="hover:text-black text-gray-600"
      >
        Analytics
      </Link>
      <Link
        to="/settings"
        onClick={onClick}
        className="hover:text-black text-gray-600"
      >
        Settings
      </Link>
    </>
  );

  return (
    <header className="w-full border-b bg-white px-4 tablet:px-6 desktop:px-8 py-3 flex items-center justify-between">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* Hamburger - Mobile only */}
        <button
          onClick={toggleDrawer(true)}
          className="block desktop:hidden p-2 rounded-lg hover:bg-gray-100 transition"
        >
          <Menu size={22} />
        </button>

        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500 rounded-lg" />
          <span className="font-semibold text-lg">TechCorp</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="mobile:hidden desktop:flex items-center gap-6 ml-6 text-sm">
          <NavLinks />
        </nav>
      </div>

      {/* RIGHT (tablet+) */}
      <div className="hidden:desktop:flex items-center gap-4">

        {/* Search */}
        <div className="hidden desktop:flex items-center border rounded-lg px-3 py-2 text-sm text-gray-500 focus-within:ring-2 focus-within:ring-purple-500">
          <Search size={16} className="mr-2" />
          <input
            placeholder="Search tools..."
            className="outline-none bg-transparent"
          />
        </div>

        <Moon size={18} className="cursor-pointer text-gray-600 hover:text-black" />
        <Bell size={18} className="cursor-pointer text-gray-600 hover:text-black" />
        <Settings size={18} className="cursor-pointer text-gray-600 hover:text-black" />

        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>

      {/* Drawer Mobile */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div className="w-64 p-6 flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg" />
            <span className="font-semibold text-lg">TechCorp</span>
          </Link>

          <div className="flex flex-col gap-4 text-gray-600 mt-4">
            <NavLinks onClick={toggleDrawer(false)} />
          </div>
        </div>
      </Drawer>
    </header>
  );
};
