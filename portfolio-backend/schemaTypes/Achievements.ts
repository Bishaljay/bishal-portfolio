import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'achievements',
  title: 'Achievements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'certificate',
      title: 'Certificate',
      type: 'url',
    }),
    defineField({
      name: 'icon',
      title: 'Icon/Badge',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
