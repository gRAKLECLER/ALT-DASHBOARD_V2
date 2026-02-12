/* eslint-disable react-hooks/static-components */
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, Search, Bell, Moon, Settings, ChevronDown, Zap } from "lucide-react";

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const [userMenuOpen, setUserMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleDrawer = (state: boolean) => () => setOpen(state);

  const getSearchPlaceholder = () => {
    if (location.pathname.startsWith("/tools")) return "Search in tools catalog...";
    if (location.pathname.startsWith("/analytics")) return "Search analytics reports...";
    return "Search dashboard...";
  };

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <>
      {[
        { to: "/", label: "Dashboard" },
        { to: "/tools", label: "Tools" },
        { to: "/analytics", label: "Analytics" },
        { to: "/settings", label: "Settings" },
      ].map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onClick}
          className={({ isActive }) =>
            `text-sm transition ${
              isActive ? "text-black font-semibold" : "text-gray-600 hover:text-black"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );

  return (
    <header className="w-full border-b bg-white px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
   
      <div className="flex items-center gap-4">
        
        <button onClick={toggleDrawer(true)} className="block lg:hidden p-2 rounded-lg hover:bg-gray-100 transition">
          <Menu size={22} />
        </button>

      
        <NavLink to="/" className="flex items-center gap-2">
        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-700">
            <Zap size={20} className="text-white" />
        </div>
        <span className="font-semibold text-lg">TechCorp</span>
        </NavLink> 
        <nav className="hidden lg:flex items-center gap-6 ml-6">
          <NavLinks />
        </nav>
      </div>

     
      <div className="hidden lg:flex items-center gap-4">
      
        <div className="flex items-center border rounded-lg px-3 py-2 text-sm text-gray-500 focus-within:ring-2 focus-within:ring-purple-500">
          <Search size={16} className="mr-2" />
          <input placeholder={getSearchPlaceholder()} className="outline-none bg-transparent" />
        </div>

        
        <Moon onClick={() => document.documentElement.classList.toggle('dark')} size={18} className="cursor-pointer text-gray-600 hover:text-black" />

        
        <div className="relative cursor-pointer">
          <Bell size={18} className="text-gray-600 hover:text-black" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
        </div>

        
        <div className="relative">
          <button onClick={() => setUserMenuOpen(!userMenuOpen)} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
            <ChevronDown size={16} />
          </button>

          {userMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md py-2 text-sm">
              <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</NavLink>
              <NavLink to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</NavLink>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </div>


      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <div className="w-64 p-6 flex flex-col gap-6">
      
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg" />
            <span className="font-semibold text-lg">TechCorp</span>
          </NavLink>

         
          <div className="flex items-center border rounded-lg px-3 py-2 text-sm text-gray-500 focus-within:ring-2 focus-within:ring-purple-500">
            <Search size={16} className="mr-2" />
            <input placeholder={getSearchPlaceholder()} className="outline-none bg-transparent w-full" />
          </div>

    
          <div className="flex flex-col gap-4 text-gray-600">
            <NavLinks onClick={toggleDrawer(false)} />
          </div>

   
          <div className="flex items-center gap-4 mt-4">
            <Moon size={18} className="cursor-pointer text-gray-600 hover:text-black" />
            <div className="relative cursor-pointer">
              <Bell size={18} className="text-gray-600 hover:text-black" />
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">3</span>
            </div>
            <Settings size={18} className="cursor-pointer text-gray-600 hover:text-black" />
            <div className="w-8 h-8 bg-gray-300 rounded-full" />
          </div>
        </div>
      </Drawer>
    </header>
  );
};
