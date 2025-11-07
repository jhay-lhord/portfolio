import imageUrlBuilder  from "@sanity/image-url"

const imageBuilder = imageUrlBuilder({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
})

export const urlFor = (source: any) => imageBuilder.image(source).auto("format").fit("max");
