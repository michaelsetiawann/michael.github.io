import { IconType } from "react-icons";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { SiCodepen } from "react-icons/si";

interface ContactItem {
    name: string;
    icon: IconType;
    username: string;
    url: string;
}

export const contactList: ContactItem[] = [
    {
        name: "LinkedIn",
        icon: FaLinkedin,
        username: "linkedin.com/in/michaelsetiawan4/",
        url: "https://www.linkedin.com/in/michaelsetiawan4/",
    },
    {
        name: "Email",
        icon: MdMail,
        username: "michaelsetiawan686@gmail.com",
        url: "mailto:michaelsetiawan686@gmail.com",
    },
    {
        name: "Github",
        icon: FaGithub,
        username: "github.com/michaelsetiawann",
        url: "https://github.com/michaelsetiawann",
    },
];
