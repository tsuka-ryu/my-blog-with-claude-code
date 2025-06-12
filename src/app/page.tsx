import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      {/* ヒーローセクション */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Image
                  className="dark:invert"
                  src="/next.svg"
                  alt="Next.js logo"
                  width={200}
                  height={42}
                  priority
                />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent font-[family-name:var(--font-geist-sans)]">
              超かっこいいブログ💖
            </h1>
            
            <div className="max-w-2xl mx-auto mb-12">
              <p className="text-xl sm:text-2xl mb-4 text-gray-700 dark:text-gray-300 font-medium">
                このページ<span className="text-pink-600 dark:text-pink-400 font-bold">マジでかっこよくない？</span>✨
              </p>
              <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 p-[2px] rounded-xl">
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded-xl">
                  <code className="text-pink-600 dark:text-pink-400 font-[family-name:var(--font-geist-mono)] font-semibold">
                    Claude Code action
                  </code>
                  <span className="text-gray-600 dark:text-gray-400"> で作っちゃった〜♪</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-3 min-w-[200px] justify-center"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Image
                  className="group-hover:rotate-12 transition-transform duration-300"
                  src="/vercel.svg"
                  alt="Vercel logomark"
                  width={24}
                  height={24}
                />
                <span>今すぐデプロイしちゃお💫</span>
              </a>
              
              <a
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg min-w-[200px] text-center"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                ドキュメント見てみる💕
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* カード風セクション */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <a
            className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Image
                  src="/file.svg"
                  alt="File icon"
                  width={24}
                  height={24}
                  className="invert"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">勉強しよ〜📚</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Next.jsをゼロから学んじゃお♪ 超わかりやすいチュートリアルがあるよ〜✨</p>
          </a>

          <a
            className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Image
                  src="/window.svg"
                  alt="Window icon"
                  width={24}
                  height={24}
                  className="invert"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">見本チェック✨</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">めっちゃおしゃれなテンプレートがいっぱい♪ 好きなデザインを選んじゃお☆</p>
          </a>

          <a
            className="group bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                <Image
                  src="/globe.svg"
                  alt="Globe icon"
                  width={24}
                  height={24}
                  className="invert"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">公式サイト💖</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Next.jsの公式サイトで最新情報をゲットしちゃお〜♪ マジで便利だよ！</p>
          </a>
        </div>
      </div>
    </div>
  );
}
