import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'researchExperiences',
  title: 'Research Experiences',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string', // or 'date' if you want exact dates
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        defineField({
          name: 'project',
          title: 'Project',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'institution',
              title: 'Institution / Organization',
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Project Link',
              type: 'url',
            }),
          ],
        }),
      ],
    }),
  ],
})
