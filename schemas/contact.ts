import { defineField } from "sanity";
import { Contact } from "lucide-react"

const contact = {
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [
        defineField({
            name: "icon",
            title: "Icon",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "value",
            title: "Value",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
         defineField({
            name: "link",
            title: "Link",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
         defineField({
            name: "gradient",
            title: "Gradient",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
         defineField({
            name: "border",
            title: "Border",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
    ],
    icon: Contact
};

export default contact;