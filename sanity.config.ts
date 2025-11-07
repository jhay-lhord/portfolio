import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'


export default defineConfig({
  name: 'default',
  title: 'portfolio-sanity',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,

  plugins: [structureTool(), visionTool()],

  basePath: "/studio",

  schema: {
    types: schemaTypes,
  },
})
