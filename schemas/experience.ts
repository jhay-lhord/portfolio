import { defineField } from "sanity";
import { Briefcase } from "lucide-react"

const experience = {
    name: "experience",
    title: "Experience",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "company",
            title: "Company",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "period",
            title: "Period",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{ type: "string" }],
            validation: (Rule) => Rule.required().min(1)
        })
       
    ],
    icon: Briefcase
};

export default experience;