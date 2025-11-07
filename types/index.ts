
export type ExperienceType = {
      _id: string,
      title: string,
      company: string,
      period: string,
      description: string,
      skills: string[]
}

export type SkillType = {
      _id: string,
      category: string,
      icon: string,
      color: string,
      skills: string[],
}

export type ProjectType = {
      _id: string,
      title: string,
      description: string,
      tags: string[],
      link: string,
      github: string,
      image: string
}