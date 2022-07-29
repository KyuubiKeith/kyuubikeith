// ==================== Imports =====================//

import { createClient } from 'contentful'

import * as CFRichTextTypes from '@contentful/rich-text-types'
import * as Contentful from 'contentful'

// ==================== Imports =====================//

//

// ==================== Client =====================//
export const Client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ''
})
// ==================== Client =====================//

//

// ==================== Types =====================//
export type TypeBrandIdentity = Contentful.Entry<TypeBrandIdentityFields>
export type TypeProjects = Contentful.Entry<TypeProjectsFields>
// ==================== Types =====================//

//

// ==================== Interfaces =====================//
export interface TypeBrandIdentityFields {
  brandName?: Contentful.EntryFields.Symbol
  logo?: Contentful.Asset[]
  jobDescription?: Contentful.EntryFields.Symbol
  aboutMe?: CFRichTextTypes.Block | CFRichTextTypes.Inline
  myLocation?: Contentful.EntryFields.Location
  fields: any
}

export interface TypeProjectsFields {
  name?: Contentful.EntryFields.Symbol
  slug?: Contentful.EntryFields.Symbol
  logo?: Contentful.Asset
  client?: Contentful.EntryFields.Symbol
  work?: Contentful.EntryFields.Symbol
  featured?: Contentful.Asset
  caseStudy?: CFRichTextTypes.Block | CFRichTextTypes.Inline
  featuredImageLink?: CFRichTextTypes.Block | CFRichTextTypes.Inline
  fields: any
  project: any
}

// ==================== Interfaces =====================//







