export default function Home() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-[family-name:var(--font-geist-mono)] p-4 sm:p-8 overflow-x-auto">
      {/* Terminal Header */}
      <div className="border border-gray-700 bg-gray-900 mb-4">
        <div className="flex items-center gap-2 bg-gray-800 px-3 py-2 border-b border-gray-700">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-gray-300 text-sm">terminal — blog@localhost</span>
        </div>
        
        {/* Terminal Content */}
        <div className="p-4 sm:p-6 space-y-4 text-sm sm:text-base">
          {/* ASCII Art */}
          <pre className="text-green-300 text-xs sm:text-sm leading-tight overflow-x-auto">
{`
    ██████╗ ██╗      ██████╗  ██████╗ 
    ██╔══██╗██║     ██╔═══██╗██╔════╝ 
    ██████╔╝██║     ██║   ██║██║  ███╗
    ██╔══██╗██║     ██║   ██║██║   ██║
    ██████╔╝███████╗╚██████╔╝╚██████╔╝
    ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ 
                                      
    [システム起動完了 - BLOG OS v2.0]
`}
          </pre>

          {/* System Info */}
          <div className="space-y-2">
            <div className="flex flex-wrap">
              <span className="text-gray-500">user@blog-system:~$ </span>
              <span className="text-white animate-pulse">whoami</span>
            </div>
            <div className="text-green-300 ml-4">
              超かっこいいブログシステム運営中だよ〜♪
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap">
              <span className="text-gray-500">user@blog-system:~$ </span>
              <span className="text-white">cat system_info.txt</span>
            </div>
            <div className="text-green-300 ml-4 space-y-1">
              <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
              <div>システム名: 超イケてるブログじゃん！</div>
              <div>フレームワーク: Next.js 15 + TypeScript</div>
              <div>デザイン: ターミナル風でマジかっこいい☆</div>
              <div>作成者: Claude Code action で構築</div>
              <div>ステータス: [<span className="text-green-400 animate-pulse">ONLINE</span>] 絶賛稼働中♪</div>
              <div>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</div>
            </div>
          </div>

          {/* Command Menu */}
          <div className="space-y-2">
            <div className="flex flex-wrap">
              <span className="text-gray-500">user@blog-system:~$ </span>
              <span className="text-white">ls -la available_commands/</span>
            </div>
            <div className="ml-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              <a 
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 border border-green-700 bg-gray-900 hover:bg-green-900 hover:border-green-500 transition-colors group"
              >
                <div className="text-green-400 font-bold">./deploy.sh</div>
                <div className="text-gray-400 text-xs group-hover:text-green-300">今すぐデプロイ実行</div>
              </a>
              
              <a 
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 border border-green-700 bg-gray-900 hover:bg-green-900 hover:border-green-500 transition-colors group"
              >
                <div className="text-green-400 font-bold">./read_docs.sh</div>
                <div className="text-gray-400 text-xs group-hover:text-green-300">ドキュメント参照</div>
              </a>
              
              <a 
                href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 border border-green-700 bg-gray-900 hover:bg-green-900 hover:border-green-500 transition-colors group"
              >
                <div className="text-green-400 font-bold">./learn.sh</div>
                <div className="text-gray-400 text-xs group-hover:text-green-300">学習モード起動</div>
              </a>
            </div>
          </div>

          {/* System Status */}
          <div className="space-y-2">
            <div className="flex flex-wrap">
              <span className="text-gray-500">user@blog-system:~$ </span>
              <span className="text-white">tail -f system.log</span>
            </div>
            <div className="ml-4 space-y-1 text-xs text-gray-400">
              <div>[2025-06-12 15:30:00] システム初期化完了</div>
              <div>[2025-06-12 15:30:01] ターミナルUI読み込み中...</div>
              <div>[2025-06-12 15:30:02] <span className="text-green-400">OK</span> アスキーアート表示完了</div>
              <div>[2025-06-12 15:30:03] <span className="text-green-400">OK</span> 超かっこいいデザイン適用済み♪</div>
              <div>[2025-06-12 15:30:04] <span className="text-yellow-400">INFO</span> ユーザー接続待機中...</div>
              <div className="flex items-center">
                <span>[2025-06-12 15:30:05] システム稼働中</span>
                <span className="ml-2 animate-pulse text-green-400">█</span>
              </div>
            </div>
          </div>

          {/* Input Prompt */}
          <div className="flex items-center pt-4">
            <span className="text-gray-500">user@blog-system:~$ </span>
            <span className="animate-pulse text-green-400">█</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-600 mt-8 space-y-2">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          <a 
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            [templates]
          </a>
          <a 
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            [nextjs.org]
          </a>
        </div>
        <div>Powered by Next.js × Claude Code - ターミナル風デザインでマジかっこいいじゃん☆</div>
      </footer>
    </div>
  );
}
