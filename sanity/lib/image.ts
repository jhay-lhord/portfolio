import imageUrlBuilder  from "@sanity/image-url"
import sanityConfig from "@/sanity.config"


const imageBuilder = imageUrlBuilder({ ...sanityConfig })

export const urlFor = (source: any) => imageBuilder.image(source)
