'use client'
import React from 'react'
import Image from 'next/image'
import { Heart, Eye, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

type StartupCardType = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  image: string;
  views: number;
  category: string;
  author: {
    _id: string;
    name: string;
    image: string;
    bio: string;
  };
};

function StartupCard({ posts }: { posts: StartupCardType }) {

  const [isLiked, setIsLiked] = useState(false);
  const mainImageSrc = posts.image ? posts.image.toString() : '/window.svg';
  const authorImageSrc = posts.author.image ? posts.author.image.toString() : '/default-avatar.png';


  return (
    <div className="group relative w-full mb-50 mt-10 max-w-sm bg-black border border-gray-600 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">

      {/* Image Section */}
      <Link href='/Startupview'>
        <div className="relative h-40 sm:h-48 md:h-56 lg:h-60">
          <Image
            src={mainImageSrc}
            alt={posts.title ? `${posts.title} image` : 'Startup image'}
            width={400}
            height={240}
            className="object-cover w-full h-full rounded-t-2xl transition-all duration-300 group-hover:brightness-50"
          />
          {/* ...overlay code... */}
        </div>
      </Link>

      {/* Header Overlay (Appears on Hover) */}
      {/* Profile of the author */}
      <div className="absolute top-0 left-0 w-full px-4 py-3  bg-black/90 backdrop-blur-sm rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Link href="/profile">
            <Image
              src={authorImageSrc}
              alt={posts.author.name ? `${posts.author.name} avatar` : 'Startup avatar'}
              width={32}
              height={32}
              className="w-8 h-8 rounded-full border"
            />
          </Link>
          <Link href="/profile">
            <span className="text-gray-100 font-medium">{posts.author.name}</span>
          </Link>
        </div>
        <Link href="/Startupview" className="text-gray-300 hover:text-white transition">
          <ExternalLink />
        </Link>
      </div>


      {/* Content */}
      < div className="px-4 py-3" >
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
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow hover:scale-105 transition">
            <Heart
              size={18}
              className="cursor-pointer transition-all duration-200"
              fill={isLiked ? "black" : "none"}
              color={isLiked ? "black" : "gray"}
              onClick={() => setIsLiked(!isLiked)}
            />
          </button>
          <span className="bg-gray-700/50 px-3 py-1 rounded-full text-xs font-medium text-gray-200">
            {posts._createdAt}
          </span>
        </div>
      </div >
    </div>
  )
}

export default StartupCard