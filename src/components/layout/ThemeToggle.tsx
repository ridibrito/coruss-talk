import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  function isDark() {
    return theme === "dark";
  }

  return (
    <button
      className="focus:outline-none mr-4 text-gray-600 hover:bg-gray-100 p-2 rounded-lg"
      onClick={() => setTheme(isDark() ? "light" : "dark")}
      aria-label="toggle"
    >
      {isDark() ? <BiSun size={20} /> : <BiMoon size={20} />}
    </button>
  );
}
