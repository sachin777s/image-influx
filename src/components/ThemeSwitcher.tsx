"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";

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
                <button
                    className="p-1 rounded-full border-2 border-[var(--secondary-text)]"
                    onClick={() => setTheme('light')}
                >
                    <FaSun color="var(--secondary-text)" />
                </button> :
                <button
                    className="p-1 rounded-full border-2 border-[var(--secondary-text)]"
                    onClick={() => setTheme('dark')}
                >
                    <IoMdMoon color="var(--secondary-text)" />
                </button>
            }
        </div>
    )
};