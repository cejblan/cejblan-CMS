"use client"

import { usePathname } from "next/navigation";

export default function DoNotShowAdmin({ children }) {
    const pathname = usePathname();
    const adminPattern = /\/adriliciaus\/admin\/?/;
    const isAdmin = adminPattern.test(pathname);

    if (isAdmin) {
        return null; // Renderiza nada en páginas de "adriliciaus/admin"
    } else {
        return children; // Renderiza los hijos en otras rutas
    }
}