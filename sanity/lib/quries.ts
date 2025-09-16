import { defineQuery } from "next-sanity";

const STARTUP_QUERY = defineQuery(`
*[_type == "startup" && defined(slug.current)] | order(_createdAt desc) {
  _id,
  title,
  _createdAt,
  slug,
  views,
  description,
  category,
  image {
    asset->{url}
  },
  author -> {
    _id,
    name,
    bio,
    image {
      asset->{url}
    }
  }
}
`);

export default STARTUP_QUERY;
