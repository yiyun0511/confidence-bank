# confidence-bank

🏦 自信銀行 (Confidence Bank)

每一筆來自朋友的善意，都是你對抗生活低潮的無價資產 ☀️

專為現代人設計的情緒儲蓄存摺與心理急救包。

💡 靈感與初衷

你有過這種時刻嗎？

面對工作挫折或自我懷疑時，腦中會自動陷入「負面偏誤」，把過去所有的讚揚與成就拋到腦後。

想找人討拍或尋求肯定，卻害怕造成朋友負擔、覺得主動開口很尷尬。

社交媒體上的公開讚數只帶來無盡的比較焦慮，而不是真實的心理支持。

自信銀行 (Confidence Bank) 應運而生——這是一個「純私密個人存摺 ＋ 受控外部暖心輸入」的空間。它將心理學中的「情緒儲蓄」（Emotional Savings）具象化為一本存摺：平時向身邊的好友開立請款單，收集文字或 15 秒短影音肯定；當低潮來襲時，只需一鍵即可提領出過去存入的心靈解藥。

✨ 核心特色

1. 💌 自信請款單 (Confidence Invoice)

化解開口尷尬：內建多款情境題目範本（如「最近工作挫折，能跟我說一個我的優點嗎？」、「你覺得我做什麼事時最耀眼？」）。

免裝 App 填寫：生成一組專屬網頁連結，朋友透過手機瀏覽器（LINE / IG 點開）30 秒內即可完成輸入。

真實具名肯定：不開放匿名，杜絕酸民與空泛吹捧，每一筆存款都清楚標註來自哪一位值得信賴的朋友。

2. 🎁 即時開箱入帳 (Instant Unboxing)

朋友提交後，App 端立即跳出推播通知。

沉浸式禮物拆封動畫，讓每一次收到誇獎都充滿儀式感，無縫歸檔進個人私密存摺。

無社交負擔：不強迫「禮貌性已讀回覆」，純粹作為屬於你的私密充電站。

3. 🚨 低潮提領急救包 (Emotional ATM)

當你陷入沮喪、懷疑自己時，點擊首頁醒目的「低潮提領」按鈕。

系統會以抽籤卡片或微光彈窗隨機掉出一則過去的文字或加油短影音，為心靈注入即時強心針。

4. 📱 桌面小工具預覽 (Widget)

支援類似 iOS 桌面中型與小型小工具（Widget）展示。

每隔固定時間隨機輪播一則好友肯定，不用解鎖 App，抬頭一眼就能獲得好心情。

🌐 線上即時體驗 (Live Demo)

本原型已封裝為單一輕量網頁，可直接於瀏覽器預覽：

🔗 點此進入自信銀行互動原型

(將 your-username 替換為你的 GitHub 帳號名稱)

💡 小撇步：在手機上使用 Safari 打開後，點選「分享」➔「加入主畫面」，即可獲得如原生 App 般的沉浸式全螢幕體驗！

🚀 快速上手與部署

此專案為純前端單檔設計（HTML + Tailwind CSS CDN + Vanilla JavaScript），無需繁瑣的 Node.js 構建流程。

本地運行

Clone 此專案或直接下載專案檔案：

git clone https://github.com/your-username/confidence-bank.git
cd confidence-bank


直接使用瀏覽器開啟 index.html：

open index.html # macOS
start index.html # Windows


部署到 GitHub Pages (免費公開)

在 GitHub 建立一個公開儲存庫，並將 index.html 與本 README.md 推送至 main 分支。

進入專案的 Settings ➔ Pages。

在 Branch 選擇 main，路徑維持 /(root)，點擊 Save。

約 1~2 分鐘後即可取得公開網址！

🗺️ 未來路線圖 (Roadmap)

[x] 單檔高保真互動原型 (MVP UI/UX)

[x] 朋友填寫端網頁模擬

[x] 低潮提領抽卡與即時開箱機制

[ ] 串接後端資料庫（Supabase / Firebase）實現真實雲端存摺

[ ] 支援短影音上傳與壓縮串流播放

[ ] 本地生物辨識（Face ID / Touch ID）私密保護鎖

[ ] 真正支援 iOS / Android 原生桌面小工具（WidgetKit）
