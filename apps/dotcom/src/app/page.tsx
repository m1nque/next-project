import Header from "../components/Header";
import NewsCard, { NewsGrid, NewsList } from "../components/NewsCard";
import SeriesSection from "../components/SeriesSection";
import BottomNav from "../components/BottomNav";

export default function Home() {
  const featuredNews: Array<{
    title: string
    imageUrl: string
    category: string
    readTime: string
    href?: string
  }> = [
    {
      title: "서머타임은 과연 과학적일까",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/17550697833486.png",
      category: "과학",
      readTime: "5분 읽기"
    },
    {
      title: "매머드 털 가진 털북숭이 생쥐의 진실",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/17550641042658.jpg",
      category: "생물학",
      readTime: "3분 읽기",
      href: "/article/mammoth-mice-truth"
    },
    {
      title: "2억4700만년 전 파충류, 깃털 달린 공룡 증거일까",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/17550646922357.jpg",
      category: "고생물학",
      readTime: "4분 읽기"
    }
  ];

  const recentNews = [
    {
      title: "'차이나 쇼크' 석유화학산업 구조조정, 정부의 책무",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/17550457052462.jpg",
      category: "산업",
      readTime: "6분 읽기"
    },
    {
      title: "닮은듯 다른 입시경쟁…中 '과기 굴기'·韓 '의대 추종'",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/1755053375946.jpg",
      category: "교육",
      readTime: "7분 읽기"
    },
    {
      title: "AZ 백신 사라져도 잊지 말아야 할 것",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/1754981137401.jpg",
      category: "의학",
      readTime: "4분 읽기"
    },
    {
      title: "국립광주과학관, 유아·초등생 대상 여름방학 특별교육프로그램 운영",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/17548854364995.jpg",
      category: "교육",
      readTime: "3분 읽기"
    },
    {
      title: "한국지질자원연구원 인사발령",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/17546256758273.jpg",
      category: "인사",
      readTime: "2분 읽기"
    },
    {
      title: "장해춘 세계김치연구소 소장 연임",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/17546331256737.jpg",
      category: "인사",
      readTime: "2분 읽기"
    }
  ];

  const scienceCafeArticles = [
    {
      title: "서머타임은 과연 과학적일까",
      author: "강석기의 과학카페",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/17550697833486.png",
      excerpt: "일광절약시간제의 과학적 근거와 효과에 대한 ���석"
    },
    {
      title: "매머드 털 가진 털북숭이 생쥐의 진실",
      author: "강석기의 과학카페",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/17550641042658.jpg",
      excerpt: "고생물학적 발견의 의미와 진화적 해석",
      href: "/article/mammoth-mice-truth"
    }
  ];

  const scienceWorldArticles = [
    {
      title: "'차이나 쇼크' 석유화학산업 구조조정, 정부의 책무",
      author: "이덕환 서강대학교 화학·과학커뮤니케이션 명예교수",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/17550457052462.jpg",
      excerpt: "중국의 석유화학 산업 급성장이 한국에 미치는 영향"
    },
    {
      title: "닮은듯 다른 입시경쟁…中 '과기 굴기'·韓 '의대 추종'",
      author: "이덕환의 과학세상",
      imageUrl: "https://image.dongascience.com/Photo/2025/08/1755053375946.jpg",
      excerpt: "한중 교육 시스템의 차이점과 과학기술 발전 전략"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-8">
        {/* Hero Section */}
        <section className="py-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">주요 뉴스</h2>
            <NewsGrid>
              {featuredNews.map((news, index) => (
                <NewsCard
                  key={index}
                  title={news.title}
                  imageUrl={news.imageUrl}
                  category={news.category}
                  readTime={news.readTime}
                  isLarge={index === 0}
                  className={index === 0 ? "md:col-span-2" : ""}
                  href={news.href}
                />
              ))}
            </NewsGrid>
          </div>
        </section>

        {/* Recent News Grid */}
        <section className="py-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">최신 뉴스</h2>
            <NewsGrid>
              {recentNews.map((news, index) => (
                <NewsCard
                  key={index}
                  title={news.title}
                  imageUrl={news.imageUrl}
                  category={news.category}
                  readTime={news.readTime}
                />
              ))}
            </NewsGrid>
          </div>
        </section>

        {/* Series Sections */}
        <div className="grid md:grid-cols-2 gap-6 py-6">
          <SeriesSection
            title="강석기의 과학카페"
            articles={scienceCafeArticles}
          />
          <SeriesSection
            title="이덕환의 과학세상"
            articles={scienceWorldArticles}
          />
        </div>

        {/* People Section */}
        <section className="py-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">사람들</h2>
            <div className="space-y-3">
              <article className="group cursor-pointer">
                <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                  [인사] 한국지질자원연구원
                </h3>
                <p className="text-xs text-gray-500 mt-1">1시간 전</p>
              </article>
              <div className="border-b border-gray-100"></div>
              <article className="group cursor-pointer">
                <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors">
                  장해춘 세계김치연구소 소장 연임
                </h3>
                <p className="text-xs text-gray-500 mt-1">2시간 전</p>
              </article>
            </div>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
