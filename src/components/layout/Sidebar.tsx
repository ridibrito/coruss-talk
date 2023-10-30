import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { BiMoon, BiSun } from "react-icons/bi";

import {
  PieChart,
  KanbanSquare,
  MessageCircle,
  Users,
  CalendarPlus,
  Bookmark,
  MessagesSquare,
  HelpCircle,
  Workflow,
  Zap,
  PlugZap,
  BookOpen,
  Backpack,
  ListTodo,
  Settings2,
  Contact,
  UserPlus,
  MonitorCheck,
  Landmark,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [openCampain, setOpenCampain] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function isDark() {
    return theme === "dark";
  }

  function isCampain() {
    setOpenCampain(true);
  }

  function handleCloseMenu() {
    setShowMenu(true);
  }

  function handleOpenMenu() {
    setShowMenu(false);
  }

  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              ></button>
              <Link href="/" className="flex ml-2 md:mr-24">
                <Image
                  src="/talk.png"
                  className="h-8 mr-3"
                  alt="coruss Logo"
                  width={180}
                  height={60}
                />
              </Link>
            </div>

            <div className="flex items-center ml-3">
              <div>
                <button
                  className="focus:outline-none mr-4 text-gray-600 hover:bg-gray-100 p-2 rounded-lg"
                  onClick={() => setTheme(isDark() ? "light" : "dark")}
                >
                  {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
                </button>
              </div>
              <div
                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <Image
                  className="w-8 h-8 rounded-full"
                  src="/perfil.png"
                  alt="user photo"
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <aside
        style={{ width: showMenu ? 60 : 250 }}
        id="logo-sidebar"
        className={
          "fixed  z-40 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        }
        aria-label="Sidebar"
      >
        <div className="h-full -mt-4 px-3 pb-4  overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <div className=" grid justify-items-end cursor-pointer ">
              <button className="flex items-center z-50 -pt-5  p-1.5 text-gray-400 rounded cursor-pointer lg:inline hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
                {showMenu ? (
                  <>
                    <ChevronRight
                      onClick={handleOpenMenu}
                      className="text-sky-600 font-black w-6 h-6"
                    />
                  </>
                ) : (
                  <ChevronLeft
                    onClick={handleCloseMenu}
                    className="text-sky-600 font-black w-6 h-6"
                  />
                )}
              </button>
            </div>
            <li>
              <Link
                href="/dashboard"
                className="flex items-center -mt-3 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PieChart className="text-gray-300" />
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/kanban"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <KanbanSquare className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
              </Link>
            </li>
            <li>
              <Link
                href="/atendimentos"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MessageCircle className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Atendimentos
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/contatos"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Users className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">Contatos</span>
              </Link>
            </li>
            <li>
              <Link
                href="/respostas"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Zap className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Respostas rápidas
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/agendamentos"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CalendarPlus className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Agendamentos
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/tags"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Bookmark className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">Tags</span>
              </Link>
            </li>
            <li>
              <Link
                href="/chatInterno"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MessagesSquare className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Chat interno
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/ajuda"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <HelpCircle className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">Ajuda</span>
              </Link>
            </li>
          </ul>
          <hr className="mt-3" />
          <ul className="mt-3">
            <li>
              <li>
                <button
                  type="button"
                  onClick={isCampain}
                  className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                >
                  <Backpack className="text-gray-300" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">
                    Campanhas
                  </span>
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {openCampain && (
                  <ul id="dropdown-example" className="py-2 space-y-2">
                    <li>
                      <Link
                        href="/campanhas/listagem"
                        className="flex gap-3 items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-7 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <ListTodo className="text-gray-300" />
                        Listagem
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/campanhas/listadeContatos"
                        className="flex gap-3 items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-7 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <Contact className="text-gray-300" />
                        Lista de contatos
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/campanhas/configuracoes"
                        className="flex gap-3 items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-7 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      >
                        <Settings2 className="text-gray-300" />
                        Configurações
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </li>
            <li>
              <Link
                href="/informativos"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <BookOpen className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Informativos
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/conexoes"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <MonitorCheck className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">Conexões</span>
              </Link>
            </li>
            <li>
              <Link
                href="/filasChatbots"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Workflow className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Filas e chatbots
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/usuarios"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <UserPlus className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">Usuários</span>
              </Link>
            </li>
            <li>
              <Link
                href="/apiPage"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PlugZap className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">API</span>
              </Link>
            </li>
            <li>
              <Link
                href="/financeiro"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Landmark className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Financeiro
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/configuracoes"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <Settings className="text-gray-300" />
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Configurações
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
