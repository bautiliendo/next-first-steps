import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Pagina acerca de mi',
    keywords: ['About Page', 'Fernando', 'info', '...']
};

export default function AboutPage() {
    return (
        <>
            <span className="text-black text-7xl">About Page</span>
        </>
    )
}