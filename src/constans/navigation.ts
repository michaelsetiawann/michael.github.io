import Home from "@/app/(general)/page"

interface NavItem {
    name: string,
    href: string,
}

export const navItems : NavItem[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Skills",
        href: "/#skills"
    },
    {
        name: "Portfolio",
        href: "/#portfolio"
    },
    {
        name: "Contact",
        href: "/#contact"
    },
    {
        name: "Blog",
        href: "/blog"
    },
]

export const navItemsBlog : NavItem[] = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Blog",
        href: "/"
    }
]