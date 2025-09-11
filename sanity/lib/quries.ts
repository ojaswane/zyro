import { defineQuery } from "next-sanity";
const startupQuery = defineQuery(`*[_type == "startup" && defined(slug.current)] | order(_createdAt desc){
  _id, 
  title,
  _createdAt,
  author -> {
    _id,
    name,
    image,
    bio
  },
  views,
  description,
  category, 
  image    
}`)

export default startupQuery;