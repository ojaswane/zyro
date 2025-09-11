import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
        // Add your list items here
        S.documentTypeListItem('author').title('Authors'),
        S.documentTypeListItem('startup').title('Startup'),
      ]
    )
