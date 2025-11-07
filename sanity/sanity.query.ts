import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getExperience() {
  return client.fetch(
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
  return client.fetch(
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
  return client.fetch(
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