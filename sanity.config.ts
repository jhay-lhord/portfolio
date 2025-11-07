import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { sanityConfig } from './lib/sanity.config'


export default defineConfig({
  name: 'default',
  title: 'portfolio-sanity',

  ...sanityConfig,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
