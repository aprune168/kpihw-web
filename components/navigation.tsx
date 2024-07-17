"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const styleActiveLink = {
  fontWeight: "bold",
};

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link href="/" style={path === "/" ? styleActiveLink : {}}>
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            style={path === "/settings" ? styleActiveLink : {}}
          >
            Settings
          </Link>
        </li>
        <li>
          <Link href="/board" style={path === "/board" ? styleActiveLink : {}}>
            Board
          </Link>
        </li>
      </ul>
    </nav>
  );
}
