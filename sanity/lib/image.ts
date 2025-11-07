import imageUrlBuilder  from "@sanity/image-url"


const imageBuilder = imageUrlBuilder({ 
  projectId: process.env.SANITY_PROJECT_ID!,
  dataset: process.env.SANITY_DATASET!,
})

export const urlFor = (source: any) => imageBuilder.image(source)
