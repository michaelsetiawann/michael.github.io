import { flattenText } from "../utils/formater";

type BlogCategory = {
    name: string;
    description: string;
    slug?: string;
};

const blogCategories: BlogCategory[] = [
    {
        name: "Software Engineering",
        description:
            "Software engineering is the discipline of designing, implementing, and maintaining software applications. It involves the use of engineering principles to ensure the creation of reliable and efficient software solutions. Imagine it as constructing a complex machine with various interlocking parts that must work seamlessly together.",
    },
    {
        name: "Data Science",
        description:
            "Data science is the practice of analyzing and interpreting complex data sets to inform decision-making. By leveraging techniques from statistics, mathematics, and computer science, data scientists can identify patterns and generate insights that drive business strategies and solutions.",
    },
];

export const blogTopics = blogCategories.map(category => {
    return {
        ...category,
        slug: flattenText(category.name.toLowerCase()),
    };
});
