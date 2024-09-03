"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from 'react';

const Product = ({ children }: {children: ReactNode} ) => {
    return <div>
    {children}
    </div>
}



export {Product}