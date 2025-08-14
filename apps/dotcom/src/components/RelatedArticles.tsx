'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface RelatedArticle {
  id: string
  title: string
  href: string
}

interface RelatedArticlesProps {
  articleId: string
  className?: string
}

export default function RelatedArticles({ articleId, className = '' }: RelatedArticlesProps) {
  const [articles, setArticles] = useState<RelatedArticle[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call for related articles
    const fetchRelatedArticles = async () => {
      setLoading(true)
      
      // Mock delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock related articles data
      const mockArticles: RelatedArticle[] = [
        {
          id: '70062',
          title: '"조류독감, 생각보다 더 확산됐을 수도"',
          href: '/article/bird-flu-spread'
        },
        {
          id: '72423',
          title: '독감 백신보다 뛰어난 "원샷" 독감 예방약 등장',
          href: '/article/flu-prevention'
        },
        {
          id: '72443',
          title: '1000큐비트 양자컴·100km 양자통신 개발…8년 6454억 투입 "양자 플래그십" 확정',
          href: '/article/quantum-flagship'
        },
        {
          id: '72452',
          title: '먹으면 근력 세지는 "운동 효과" 나타���는 물질이 있다?',
          href: '/article/exercise-supplement'
        }
      ]
      
      setArticles(mockArticles)
      setLoading(false)
    }

    fetchRelatedArticles()
  }, [articleId])

  if (loading) {
    return (
      <div className={`bg-white py-5 ${className}`}>
        <h3 className="text-lg font-medium text-gray-900 mb-4 relative pr-10">
          관련기사
        </h3>
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white py-5 ${className}`}>
      <h3 className="text-lg font-medium text-gray-900 mb-4 relative pr-10 leading-9">
        관련기사
      </h3>
      
      <ul className="clear-both">
        {articles.map((article, index) => (
          <li 
            key={article.id}
            className="border-t border-gray-200 py-1.5 text-left"
          >
            <Link 
              href={article.href}
              className="block text-gray-700 hover:text-blue-600 text-lg font-light leading-8 
                         overflow-hidden text-ellipsis whitespace-nowrap transition-colors"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
