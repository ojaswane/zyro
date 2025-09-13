import { defineQuery } from "next-sanity";

const STARTUP_QUERY = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
  _id, 
  title,
  _createdAt,
  slug,
  author -> {
    _id,
    name,
    image {
      asset->{
        url
      }
    },
    bio
  },
  views,
  description,
  category, 
  image {
    asset->{
      url
    }
  }
}`);

export default STARTUP_QUERY;
