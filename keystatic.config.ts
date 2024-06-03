import { config, collection, fields } from "@keystatic/core";

export const markdocConfig = fields.markdoc.createMarkdocConfig({});

export default config({
  storage: {
    kind: "cloud",
  },
  cloud: {
    project: "zack-events/zack-events",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },
});
