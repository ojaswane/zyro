//  getting the user from sanity
import { defineType, Preview } from 'sanity';
import { defineField } from 'sanity';
import { UserIcon } from '@sanity/icons';

const author = defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    icon: UserIcon ,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        }),
        defineField({
            name: 'id',
            type: 'number',
        }),
        defineField({
            name: 'username',
            type: 'string',
        }),
        defineField({
            name: 'email',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'url',
        }),
        defineField({
            name: 'bio',
            type: 'text',
        }),
    ],

    preview: {
        select: {
            title: 'name',
        }
    }
})

export default author; 