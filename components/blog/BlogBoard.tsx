'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import { motionDurations, motionEasing } from '@/lib/motion'
import { cn } from '@/lib/utils'
import type { SiteImage } from '@/data/siteImages'

export interface BlogPostCard {
  id: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: SiteImage
}

interface BlogBoardProps {
  posts: BlogPostCard[]
}

const categories = ['All', 'Microsoft Teams', 'Low Code', 'Power Automate', 'PowerApps']

export default function BlogBoard({ posts }: BlogBoardProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = useMemo(
    () =>
      activeCategory === 'All'
        ? posts
        : posts.filter((post) => post.category === activeCategory),
    [activeCategory, posts]
  )

  const featuredPost = filteredPosts[0]
  const secondaryPosts = filteredPosts.slice(1)

  return (
    <div className="space-y-12 lg:space-y-16">
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-current={activeCategory === category ? 'true' : undefined}
            className={cn(
              'rounded-full border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] transition-all duration-300',
              activeCategory === category
                ? 'border-primary bg-primary text-white shadow-[0_16px_30px_rgba(124,38,51,0.16)]'
                : 'border-border bg-white/[0.04] text-text-secondary hover:border-primary/40 hover:bg-white/[0.08] hover:text-text-primary'
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {featuredPost ? (
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: motionDurations.medium, ease: motionEasing.standard }}
          className="grid overflow-hidden rounded-[2rem] border border-border/70 bg-bg-secondary/70 shadow-panel backdrop-blur-sm lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]"
        >
          <div className="relative min-h-[340px] overflow-hidden">
            <Image
              src={featuredPost.image.src}
              alt={featuredPost.image.alt}
              fill
              placeholder={featuredPost.image.blurDataURL ? 'blur' : 'empty'}
              blurDataURL={featuredPost.image.blurDataURL}
              sizes="(min-width: 1024px) 54vw, 100vw"
              quality={72}
              className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              style={{ objectPosition: featuredPost.image.objectPosition }}
            />
          </div>
          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              <span className="lux-eyebrow text-primary">{featuredPost.category}</span>
              <h3 className="mt-6 font-display text-[2.25rem] leading-[0.95] tracking-[-0.05em] text-text-primary md:text-[2.7rem]">
                {featuredPost.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-text-secondary md:text-lg">
                {featuredPost.excerpt}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-text-muted">
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {featuredPost.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} />
                {featuredPost.readTime}
              </span>
            </div>
          </div>
        </motion.article>
      ) : null}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {secondaryPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: motionDurations.medium,
              delay: index * 0.05,
              ease: motionEasing.standard,
            }}
            className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-bg-secondary/70 shadow-panel backdrop-blur-sm"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={post.image.src}
                alt={post.image.alt}
                fill
                placeholder={post.image.blurDataURL ? 'blur' : 'empty'}
                blurDataURL={post.image.blurDataURL}
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 48vw, 100vw"
                quality={68}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ objectPosition: post.image.objectPosition }}
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <span className="lux-eyebrow text-primary">{post.category}</span>
              <h3 className="mt-5 font-display text-[1.75rem] leading-[0.98] tracking-[-0.04em] text-text-primary">
                {post.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-8 text-text-secondary">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-2">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
