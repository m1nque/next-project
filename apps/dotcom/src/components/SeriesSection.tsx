import Image from 'next/image'
import Link from 'next/link'

interface SeriesArticle {
  title: string
  author?: string
  imageUrl?: string
  excerpt?: string
  href?: string
}

interface SeriesSectionProps {
  title: string
  articles: SeriesArticle[]
  className?: string
}

export default function SeriesSection({ title, articles, className = '' }: SeriesSectionProps) {
  return (
    <section className={`bg-white rounded-lg shadow-sm p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
        <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
          전체 보기
        </button>
      </div>
      
      <div className="space-y-4">
        {articles.map((article, index) => {
          const content = (
            <>
              <div className="flex gap-4">
                {article.imageUrl && (
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                      <Image
                        src={article.imageUrl}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                        sizes="80px"
                      />
                    </div>
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-gray-900 line-clamp-2 text-sm leading-relaxed group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  {article.author && (
                    <p className="text-xs text-gray-500 mt-1">
                      {article.author}
                    </p>
                  )}

                  {article.excerpt && (
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2">
                      {article.excerpt}
                    </p>
                  )}
                </div>
              </div>

              {index < articles.length - 1 && (
                <div className="border-b border-gray-100 mt-4"></div>
              )}
            </>
          )

          if (article.href) {
            return (
              <Link key={index} href={article.href}>
                <article className="group cursor-pointer">
                  {content}
                </article>
              </Link>
            )
          }

          return (
            <article key={index} className="group cursor-pointer">
              {content}
            </article>
          )
        })}
      </div>
    </section>
  )
}
