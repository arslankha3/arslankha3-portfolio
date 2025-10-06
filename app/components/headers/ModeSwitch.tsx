"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import { Switch } from "@/components/ui/switch";

const ModeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState<boolean>(theme === "dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setChecked(!checked);
  };

  return (
    <div
      className="flex items-center gap-x-1 text-2xl font-bold p-1"
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle theme mode"
    >
      <span className="select-none">AA</span>
      <Switch checked={checked} aria-label="Toggle theme mode" />
      <span className="select-none">K</span>
    </div>
  );
};

export default ModeSwitch;
