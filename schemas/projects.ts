import { defineField } from "sanity";
import { Library } from "lucide-react"

const projects = {
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1)
        }),
        defineField({
            name: "link",
            title: "Live Link",
            type: "url",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "github",
            title: "Github Link",
            type: "url",
            validation: (Rule) => Rule.required()
        }),
        defineField({
            name: "image",
            title: "Project Image",
            type: "image",
            description: "Upload a Thumbnail picture",
            options: { hotspot: true },
            fields: [
                {
                name: "alt",
                title: "Alt",
                type: "string",
                },
            ],
        },)
       
    ],
    icon: Library
};

export default projects;