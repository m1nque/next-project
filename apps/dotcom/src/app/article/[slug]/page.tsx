import Image from 'next/image'
import Link from 'next/link'
import Header from '../../../components/Header'
import BottomNav from '../../../components/BottomNav'
import RelatedArticles from '../../../components/RelatedArticles'

interface ArticleData {
  id: string
  title: string
  content: string
  imageUrl: string
  category: string
  publishedAt: string
  readTime: string
  author: string
  excerpt: string
}

// Mock article data
const articles: Record<string, ArticleData> = {
  'mammoth-mice-truth': {
    id: 'mammoth-mice-truth',
    title: '매머드 털 가진 털북숭이 생쥐의 진실',
    content: `
      <div class="space-y-6">
        <p class="text-lg leading-relaxed">
          시대상황 고려한 새 통계모델 적용
        </p>
        
        <div class="text-center my-8">
          <img src="https://image.dongascience.com/Photo/2025/08/829936f4035c22934d57b4d34a1ec61a.png" 
               alt="매머드 털 가진 털북숭이 생쥐" 
               class="mx-auto max-w-full h-auto rounded-lg shadow-md" />
          <p class="text-sm text-gray-600 mt-2">
            메이저리그 선수인 배리 본즈(왼쪽)와 베이브 루스의 모습. 위키미디어 제공.
          </p>
        </div>

        <p class="text-lg leading-relaxed">
          역사상 가장 위대한 야구 선수로 꼽히는 뉴욕 양키스 외야수 베이브 루스보다 
          샌프란시스코 자이언츠 외야수였던 배리 본즈가 더 뛰어난 선수라는 통계 결과가 제시됐다. 
          시대 상황 등을 고려한 새로운 통계 모델의 결과다.
        </p>

        <p class="text-lg leading-relaxed">
          특정 스포츠 종목에서 역사상 가장 위대한 선수를 정하는 일은 쉽지 않다. 
          통계학자들이 통계학적 관점에서 가장 위대한 메이저리그 선수 순위를 매겼다.
        </p>

        <p class="text-lg leading-relaxed">
          12일 뉴욕타임스에 따르면 다니엘 J. 에크 미국 어바나-샴페인 일리노이대 통계학과 교수 연구팀이 
          지난 10년간 역대 최고 야구 선수를 찾기 위한 통계 연구를 진행하고 새로운 통계 모델을 고안했다. 
          연도별 상황을 고려해 야구 인재들의 순위를 매길 수 있는 모델이다.
        </p>

        <p class="text-lg leading-relaxed">
          연구팀의 통계 모델에 따르면 역대 최고 야구 선수 타이틀은 배리 본즈가 차지했다. 
          2위는 보스턴 레드삭스와 뉴욕 양키스에서 투수로 활약한 로저 클레멘스다. 
          본즈의 대부이자 샌프란시스코 자이언츠 중견수���던 윌리 메이스가 3위, 베이브 루스는 4위를 차지했다.
        </p>

        <p class="text-lg leading-relaxed">
          연구팀은 본즈와 클레멘스가 1990년대 스테로이드를 사용한 혐의가 있어 
          이번 순위에 반대하는 사람들이 있을 것이라고 보았다. 연구팀은 본즈와 클레멘스가 선수로 활동할 당시 
          많은 선수들이 경기력 향상을 위해 약물을 사용했다는 점에서 당시의 상황을 반영하면 
          두 선수는 여전히 위대한 선수로 분류될 수 있다고 평가했다.
        </p>

        <p class="text-lg leading-relaxed">
          연구팀의 통계 모델은 야구 선수의 활약도를 평가하는 척도인 '대체 선수 대비 승리 기여도(WAR)'를 
          출발점으로 삼았다. WAR은 지명 타자, 숙련된 유격수, 직구가 뛰어난 마무리 투수 등 
          특정 연도 팀에 기여한 선수들을 평가한다.
        </p>

        <p class="text-lg leading-relaxed">
          연구팀은 선수들의 업적을 제대로 평가하려면 WAR만으로는 부족하고 인종 차별, 전쟁, 부상 등 
          다양한 상황들을 함께 고려해야 한다고 설명했다. 세월의 흐름과 함께 훈련 기술이 발달��다는 점, 
          영양 상태가 개선된다는 점도 고려해야 할 사항이다.
        </p>

        <p class="text-lg leading-relaxed">
          연구팀은 "새 통계 모델은 통계적으로 매우 정교하고 수학적으로 의미가 있다"며 
          "뛰어난 재능을 가진 선수들의 성과가 과소평가돼온 것을 보정할 수 있다"고 말했다. 
          이어 "야구가 아닌 다른 스포츠 분야 또는 다양한 삶의 영역에도 적용할 수 있는 통계 모델"이라고 덧붙였다.
        </p>
      </div>
    `,
    imageUrl: 'https://image.dongascience.com/Photo/2025/08/17550641042658.jpg',
    category: '생물학',
    publishedAt: '2025.08.13 17:45',
    readTime: '3분 읽기',
    author: '문세영 기자',
    excerpt: '고생물학적 발견의 의미와 진화적 해석'
  }
}

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({
    slug,
  }))
}

export const revalidate = 3600 // ISR: revalidate every hour

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = articles[params.slug]

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">기사를 찾을 수 없습니다</h1>
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              홈으로 돌아가기
            </Link>
          </div>
        </main>
        <BottomNav />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600">홈</Link>
            <span>/</span>
            <span className="text-blue-600">{article.category}</span>
          </div>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <span className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full font-medium">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{article.publishedAt}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              {/* Font size controls */}
              <button className="p-2 text-gray-500 hover:text-gray-700 border-r border-gray-200">
                <span className="text-sm">가</span>
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700 border-r border-gray-200">
                <span className="text-lg">가</span>
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <span className="text-sm font-medium">ENG</span>
              </button>
            </div>
          </div>
        </header>

        {/* Article Image */}
        <div className="mb-8">
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-sm text-gray-500 mb-8">
            Copyright Ⓒ 동아사이언스. All rights reserved. 무단 전재, 재배포 및 AI학습 이용 금지
          </div>

          {/* Tags */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2">
              <Link href="/tags/통계" className="text-blue-600 text-sm hover:text-blue-700">
                #통계
              </Link>
              <Link href="/tags/야구" className="text-blue-600 text-sm hover:text-blue-700">
                #야구
              </Link>
            </div>
          </div>

          {/* Author Info */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="https://auth.dongascience.com/upload/member/2023/06/ce5ab88ec5c0177eb0f856e529674ba4.jpg"
                  alt={article.author}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-1">{article.author}</h3>
                <p className="text-sm text-gray-600 mb-2">moon09@donga.com</p>
                <Link 
                  href="/journalist/moon09"
                  className="inline-flex items-center text-sm text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  다른 기사 보기
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <BottomNav />
    </div>
  )
}
