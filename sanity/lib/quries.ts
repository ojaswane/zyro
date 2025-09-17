const STARTUP_QUERY = defineQuery(`*[_type == "startup"] | order(_createdAt desc){
  _id,
  title,
  _createdAt,
  slug,
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
