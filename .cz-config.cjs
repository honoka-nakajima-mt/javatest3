module.exports = {
  types: [
    {
      value: "✨ feat",
      name: "✨ feat:     新機能",
      title: "Features",
    },
    {
      value: "🐛 fix",
      name: "🐛 fix:      バグ修正",
      title: "Bug Fixes",
    },
    {
      value: "📝 docs",
      name: "📝 docs:     ドキュメントの変更",
      title: "Documentation",
    },
    {
      value: "🎨 style",
      name: "🎨 style:    フォーマットの変更（コードの動作に影響しないスペース、フォーマット、セミコロンなどの変更）",
      title: "Styles",
    },
    {
      value: "♻️ refactor",
      name: "♻️  refactor: リファクタリング（機能追加やバグ修正を含まない変更）",
      title: "Code Refactoring",
    },
    {
      value: "⚡️ perf",
      name: "⚡️ perf:     パフォーマンスの改善",
      title: "Performance Improvements",
    },
    {
      value: "✅ test",
      name: "✅ test:     テストの追加や既存テストの修正",
      title: "Tests",
    },
    {
      value: "🔥 remove",
      name: "🔥 remove:   コードやファイルの削除",
      title: "Removes",
    },
    {
      value: "🏗️ build",
      name: "🏗️  build:    ビルドシステムや外部依存に関する変更（スコープ例: gulp, broccoli, npm）",
      title: "Builds",
    },
    {
      value: "🔧 chore",
      name: "🔧 chore:    その他の変更（補助ツール、ドキュメント生成などの、ソースやテストの変更を含まない変更）",
      title: "Chores",
    },
    {
      value: "🚧 wip",
      name: "🚧 wip:      作業中の内容",
      title: "WIPs",
    },
  ],
  messages: {
    type: "コミットする変更タイプを選択してください:\n",
    subject: "コミット内容について入力してください:\n",
    confirmCommit: "こちらの内容でコミットを実行してよろしいですか？:\n",
    /* ticketNumber: 'チケット番号を入力してください (ない場合はEnter):\n',*/
  },
  skipQuestions: ["scope", "body", "breaking", "footer"],
  allowBreakingChanges: ["feat", "fix"],
  /* 
  コミットメッセージにチケット番号を追加したい場合コメントを削除
  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: '',
  ticketNumberRegExp: '',
  */
};
