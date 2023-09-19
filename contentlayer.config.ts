import { flattenText } from "./src/utils/formater";
import { blogCategoriesList } from "./src/constans/blog";
import { estimateReadingTime } from "./src/utils/reading";
import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Blog = defineDocumentType(() => ({
    name: "Blog",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the blog",
            required: true,
        },
        short_title: {
            type: "string",
            description: "The short title of the blog",
            required: true,
        },
        date: {
            type: "date",
            description: "The date of the blog",
            required: true,
        },
        description: {
            type: "string",
            description: "The Description of the blog",
            required: true,
        },
        author: {
            type: "string",
            description: "The author of the blog",
            required: true,
        },
        tag: {
            type: "enum",
            options: blogCategoriesList,
            default: blogCategoriesList[0],
            description: "The category of the blog",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (doc) => `/blog/${doc._raw.flattenedPath}`,
        },
        slug: {
            type: "string",
            resolve: (doc) => doc._raw.flattenedPath,
        },
        reading_time: {
            type: "string",
            resolve: (doc) => estimateReadingTime(doc.body.raw),
        },
        flattened_tag: {
            type: "string",
            resolve: (doc) => flattenText(doc.tag.toLocaleLowerCase()),
        },
    },
}));

export default makeSource({
    contentDirPath: "src/blogs",
    documentTypes: [Blog],
});
