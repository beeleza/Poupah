import { useState } from "react";
import {
  FaBars,
  FaChartLine,
  FaHome,
  FaMoneyBillAlt,
  FaTimes,
} from "react-icons/fa";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-65" : "w-16"
        } bg-blue-900 text-white transition-all duration-300 ease-in-out`}
      >
        <div className="p-5 flex justify-between items-center">
          {isSidebarOpen ? (
            <h2 className="text-xl font-bold">Poupah</h2>
          ) : (
            <div className="w-6"></div>
          )}
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className="mt-5">
          <ul>
            <li className="py-2 hover:bg-blue-800 transition-colors duration-200">
              <a href="#" className="flex items-center p-2">
                <FaHome size={20} className="mr-2" />
                {isSidebarOpen && <span>Dashboard</span>}
              </a>
            </li>
            <li className="py-2 hover:bg-blue-800 transition-colors duration-200">
              <a href="#" className="flex items-center p-2">
                <FaMoneyBillAlt size={20} className="mr-2" />
                {isSidebarOpen && <span>Receitas</span>}
              </a>
            </li>
            <li className="py-2 hover:bg-blue-800 transition-colors duration-200">
              <a href="#" className="flex items-center p-2">
                <FaChartLine size={20} className="mr-2" />
                {isSidebarOpen && <span>Despesas</span>}
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-5 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
