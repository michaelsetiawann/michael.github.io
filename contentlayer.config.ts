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
    },
}));

export default makeSource({
    contentDirPath: "src/blogs",
    documentTypes: [Blog],
});
