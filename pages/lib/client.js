import SanityClientConstructor from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url'


export const client = SanityClientConstructor({
  projectId: 'yuk7ontf',
  dataset: 'production',
  apiVersion: '2023-01-03',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

const builder = createImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);