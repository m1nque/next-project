import Image from 'next/image'
import Link from 'next/link'

interface NewsCardProps {
  title: string
  imageUrl: string
  category?: string
  readTime?: string
  isLarge?: boolean
  className?: string
  href?: string
}

export default function NewsCard({
  title,
  imageUrl,
  category,
  readTime,
  isLarge = false,
  className = '',
  href
}: NewsCardProps) {
  const content = (
    <>
      <div className={`relative ${isLarge ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
        />
        {category && (
          <div className="absolute top-2 left-2">
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              {category}
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className={`font-medium text-gray-900 line-clamp-2 leading-relaxed ${
          isLarge ? 'text-lg mb-2' : 'text-sm mb-1'
        }`}>
          {title}
        </h3>

        {readTime && (
          <p className="text-xs text-gray-500 mt-2">
            {readTime}
          </p>
        )}
      </div>
    </>
  )

  if (href) {
    return (
      <Link href={href}>
        <article className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer ${className}`}>
          {content}
        </article>
      </Link>
    )
  }

  return (
    <article className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}>
      {content}
    </article>
  )
}

interface NewsGridProps {
  children: React.ReactNode
  className?: string
}

export function NewsGrid({ children, className = '' }: NewsGridProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
      {children}
    </div>
  )
}

interface NewsListProps {
  children: React.ReactNode
  className?: string
}

export function NewsList({ children, className = '' }: NewsListProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      {children}
    </div>
  )
}
