"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./assets";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div >
            {theme === "dark" ?
                <button className="p-1 rounded-full border-2 border-white" onClick={() => setTheme('light')}><SunIcon /></button> :
                <button className="p-1 rounded-full border-2 border-black" onClick={() => setTheme('dark')}><MoonIcon /></button>
            }
        </div>
    )
};