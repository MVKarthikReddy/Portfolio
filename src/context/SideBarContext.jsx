import React, { createContext, useState, useContext } from 'react';

// Create Context
const SidebarContext = createContext();

// Create a provider component
export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [about, setAbout] = useState(false)

  // Function to toggle the sidebar
  const toggleSidebar = (val) => {
    setIsOpen(val);
  };

  const toggleAbout = (val) => {
    setAbout(val)
  }

  return (
    <SidebarContext.Provider value={{ isOpen, toggleSidebar, about, toggleAbout }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Custom hook to use Sidebar context in any component
export const useSidebar = () => useContext(SidebarContext);
