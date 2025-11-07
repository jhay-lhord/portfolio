import { groq } from "next-sanity";
import sanityServer from "./sanity.server";

export async function getExperience() {
  return sanityServer.fetch(
    groq`*[_type == "experience"]{
      _id,
      title,
      company,
      period,
      description,
      skills
    }`
  );
}

export async function getSkills() {
  return sanityServer.fetch(
    groq`*[_type == "skills"]{
      _id,
      category,
      icon,
      color,
      skills
    }`
  );
}

export async function getProjects() {
  return sanityServer.fetch(
    groq`*[_type == "projects"]{
      _id,
      title,
      description,
      tags,
      link,
      github,
      image,
    }`
  );
}