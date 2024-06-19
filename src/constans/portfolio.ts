import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { stackList, SkillItem } from "./skills";
import personalWebsite from "public/images/portfolio/personal-website.jpg";
import cariHatiUi from "public/images/portfolio/cariHati.jpg";
import quoteGenerator from "public/images/portfolio/quote-generator.png";
import pomodoroTimer from "public/images/portfolio/pomodoro-timer.png";
import markdownPreviewer from "public/images/portfolio/markdown-previewer.png";
import calculator from "public/images/portfolio/calculator.png";
import drumMachine from "public/images/portfolio/drum-machine.png";
import cariHatiServer from "public/images/portfolio/cariHati.jpg";
import instagramTesting from "public/images/portfolio/instagramTesting.jpeg";
import searchEngine from "public/images/portfolio/searchEngine.png";
import documentationPage from "public/images/portfolio/documentation-page.png";
import productLanding from "public/images/portfolio/product-landing.png";
import sentimentAnalysis from "public/images/portfolio/sentimen-analysis.png";
import surveyForm from "public/images/portfolio/survey-form.png";
import tributePage from "public/images/portfolio/tribute-page.png";

export interface PortfolioItem {
    title: string;
    tumbnail: StaticImport;
    stacks: SkillItem[] | undefined;
    description: string;
    url: string;
}

function getSkillItems(skillList: string[]): SkillItem[] {
    const data = stackList;

    const skillItems: SkillItem[] = skillList.flatMap((skillName, index) => {
        const foundSkill = data.find(
            (skill) =>
                skill.name.toLocaleLowerCase() === skillName.toLocaleLowerCase()
        );
        return foundSkill ? [foundSkill] : [];
    });

    return skillItems;
}

export const portfolioItems: PortfolioItem[] = [
    {
        title: "Personal Website",
        tumbnail: personalWebsite,
        stacks: getSkillItems(["Next JS", "Typescript", "Tailwind", "Framer", "Contentlayer"]),
        description: "This is my personal website",
        url: "https://michaelsetiawann.github.io/",
    },
    {
        title: "Cari-Hati-Ui",
        tumbnail: cariHatiUi,
        stacks: getSkillItems(["Next Js"]),
        description:
            "Development of the RPLL dating app UI project for a web-based platform using Next.js",
        url: "https://github.com/glennprays/cari-hati-ui",
    },
    {
        title: "Cari-Hati-Server",
        tumbnail: cariHatiServer,
        stacks: getSkillItems(["Nest Js", "Firebase", "Docker", "MongoDB Atlas", "AWS & S3", "Xendit"]),
        description:
            "Development of the RPLL dating app backend project for a web-based platform using Nest.js, incorporating Docker, MongoDB Atlas, AWS & S3, Xendit, and Firebase.",
        url: "https://github.com/glennprays/cari-hati-server",
    },
    {
        title: "Instagram Automated Test",
        tumbnail: instagramTesting,
        stacks: getSkillItems(["Groovy"]),
        description:
            "Create Automation Testing for Instagram",
        url: "https://github.com/michaelsetiawann/instagram-automated-test",
    },
    {
        title: "Search Engine UI",
        tumbnail: searchEngine,
        stacks: getSkillItems(["Python"]),
        description:
            "Project search engine ui",
        url: "https://github.com/michaelsetiawann/search-engine-ui",
    },
];
