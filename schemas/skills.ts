import { defineField } from "sanity";
import { Brain } from "lucide-react"

const skills = {
    name: "skills",
    title: "Skills",
    type: "document",
    fields: [
        defineField({
            name: "category",
            title: "Category",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "icon",
            title: "Icon",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "color",
            title: "Color",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{type: 'string'}],
            validation: (Rule) => Rule.required(),
        }),
       
    ],
    icon: Brain
};

export default skills;