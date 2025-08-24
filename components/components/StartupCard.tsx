import React from 'react'
import Image from 'next/image'
import { Heart, Eye } from 'lucide-react'
function StartupCard({posts} : { posts : StartupCardType }) {
  return (
     <div className="w-full max-w-sm bg-gray-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
        <div className="flex items-center gap-3">
          <Image
            src={posts.image || " image "}
            alt={posts.name ? `${posts.name} avatar` : "Startup avatar"}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border"
          />
          <span className="text-gray-800 font-medium">{posts.name}</span>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          ✏️
        </button>
      </div>

      {/* Image Placeholder */}
      <div className="h-40 bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
        Image Placeholder
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-lg font-semibold text-gray-900">{posts.title}</h2>
          <div className="flex items-center gap-1 text-gray-600 text-sm">
            <Eye size={16} />
            <span>{posts.views}</span>
          </div>
        </div>

        <span className="text-xs text-gray-500 mb-2 block">{posts.category}</span>

        <p className="text-gray-700 text-sm leading-snug line-clamp-3">
          {posts.description}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:scale-105 transition">
            <Heart size={18} className="text-gray-600" />
          </button>
          <span className="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-700">
            {posts._createdAt}
          </span>
        </div>
      </div>
    </div>
  )
}

export default StartupCard