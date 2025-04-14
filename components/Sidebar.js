import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Home, User, Settings, FileLock  } from "lucide-react";

const SideBar = () => {
  const router = useRouter();

  const navItems = [
    { name: "Inicio", path: "/", icon: <Home size={20} /> },
    { name: "Perfil", path: "/profile", icon: <User size={20} /> },
    { name: "Contratos", path: "/contratos", icon: <FileLock  size={20} /> },
    { name: "Ajustes", path: "/settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="bg-orange-200 sm:w-1/3 xl:w-1/6 min-h-screen p-0 shadow-md">
      <div className="bg-orange-500 p-5">
        <p className="text-white font-black text-2xl">ArtiSearch</p>
      </div>
      <nav className="mt-5">
        <ul className="list-none space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`flex items-center gap-3 p-4 rounded-md transition-colors duration-200 font-semibold ${
                  router.pathname === item.path
                    ? "bg-orange-300 text-white"
                    : "text-black hover:bg-orange-400 hover:text-white"
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
