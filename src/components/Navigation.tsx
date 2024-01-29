"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathName = usePathname();
    const activeStyles = "border-b-4 border-black font-semibold";
    return (
        <nav className="md:ps-8 uppercase text-2xl bg-slate-400">
            <ul className="flex flex-col md:flex-row gap-5 text-center md:text-left">
                <li className={`py-5 ${pathName === "/" ? activeStyles : ""}`}>
                    <Link href="/">Home</Link>
                </li>
                <li
                    className={`py-5 ${
                        pathName === "/quick-search" ? activeStyles : ""
                    }`}
                >
                    <Link href="/quick-search">Quick Search</Link>
                </li>
            </ul>
        </nav>
    );
}
