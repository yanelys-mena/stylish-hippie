"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from 'react';
import styles from './Nav.module.css';
const NAV_OPTION = [
    'Clothing',
    'Dresses',
    'Shoes',
    'Bags',
    'Seen on Celebs'
]

const Nav = ({ children }: {children: ReactNode} ) => {
    return (
    <div className=" box-border	 flex h-52 bg-indigo-100  flex-col items-center justify-center p-4">
        <div className={styles.nav}>
        <div className="flex h-36">
            <div className="flex-1 min-w-0 " />
        <div className="flex-1 font-ptSerif min-w-0 bg-green-50 flex justify-center items-center text-4xl font-bold">shop name</div>
        <div className="flex-1 bg-white min-w-0 items-center flex gap-3 justify-end">
        <div>Sign In / Register</div>
        <div>Cart Icon</div>
            </div>
            
        </div>
        <div className={styles.bottomNav}>
                {NAV_OPTION.map((option) => <div key={option} className={styles.option}>{option}</div>)}
        </div>
        </div>
       
       
    </div>)
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "classname">) {
    const pathname = usePathname();
    return <Link {...props} />

}

export { Nav };
