//  getting the user from sanity
import { defineType } from 'sanity';
import { defineField } from 'sanity';

const startup = defineType({
    name: 'startup',
    title: 'Startup',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            },
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: [{ type: 'author' }],
        }),
        defineField({
            name: 'views',
            type: 'number',
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'category',
            type: 'string',
            validation: (Rule) => Rule.min(1).max(20).required().error('Category is required'), //this validates that the category should be between 1 and 20 characters and required
        }),
        defineField({
            name: 'image',
            type: 'image', // <-- change from 'url' to 'image'
            validation: (Rule) => Rule.required().error('Image is required'), //this validates that the image is required
        }),
        defineField({
            name: 'pitch',
            type: 'markdown',
        }),
    ],
})

export default startup;