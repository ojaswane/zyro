'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Heart, Eye, ExternalLink } from 'lucide-react'
import Link from 'next/link'

type StartupCardType = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  slug: string;
  image: string;   // always string now
  views: number;
  category: string;
  author: {
    _id: string;
    name: string;
    image: string; // always string now
    bio: string;
  };
};

function StartupCard({ posts }: { posts: StartupCardType }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group relative w-full mb-10 mt-10 max-w-sm bg-black border border-gray-600 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">

      {/* Image Section */}
      <Link href={`/startup/${posts.slug}`}>
        <div className="relative h-40 sm:h-48 md:h-56 lg:h-60">
          <Image
            src={posts.image || '/default-image.png'}
            alt={posts.title || 'Startup image'}
            width={400}
            height={240}
            className="object-cover w-full h-full rounded-t-2xl transition-all duration-300 group-hover:brightness-50"
          />
        </div>
      </Link>

      {/* Header Overlay */}
      <div className="absolute top-0 left-0 w-full px-4 py-3 bg-black/90 backdrop-blur-sm rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href={`/profile/${posts.author._id}`}>
            <Image
              src={posts.author.image || '/default-avatar.png'}
              alt={posts.author.name ? `${posts.author.name} avatar` : 'Startup avatar'}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border"
            />
          </Link>
          <Link href={`/profile/${posts.author._id}`}>
            <span className="text-gray-100 font-medium">{posts.author.name}</span>
          </Link>
        </div>
        <Link href={`/startup/${posts.slug}`} className="text-gray-300 hover:text-white transition">
          <ExternalLink />
        </Link>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-lg font-semibold text-gray-100">{posts.title}</h2>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Eye size={16} />
            <span>{posts.views}</span>
          </div>
        </div>

        <span className="text-xs text-gray-400 mb-2 block">{posts.category}</span>

        <p className="text-gray-300 text-sm leading-snug line-clamp-3">
          {posts.description}
        </p>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:scale-105 transition"
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart
              size={18}
              className="cursor-pointer transition-all duration-200"
              fill={isLiked ? "black" : "none"}
              color={isLiked ? "black" : "gray"}
            />
          </button>
          <span className="bg-gray-700/50 px-3 py-1 rounded-full text-xs font-medium text-gray-200">
            {new Date(posts._createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  )
}

export default StartupCard
