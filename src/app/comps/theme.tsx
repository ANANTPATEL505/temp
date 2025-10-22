"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { Button } from "@/components/ui/button";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a static placeholder that matches SSR output to avoid mismatch
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9 rounded-full">
        <FiMoon className="text-gray-800" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-full"
    >
      {theme === "dark" ? (
        <FiSun className="text-yellow-500" />
      ) : (
        <FiMoon className="text-gray-800" />
      )}
    </Button>
  );
}
