import { useEffect, useState } from 'react';
import PcMenu from './pc-menu';
import SpMenu from './sp-menu';

/** メニューバー判定のコンポーネント */
export default function Menu() {
  // 初期値をウィンドウサイズに基づいて設定
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    // ウィンドウサイズが変更されたときの処理
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // リサイズイベントのリスナーを追加
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数でリスナーを解除
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // モバイルサイズかどうかで表示するメニューを切り替え
  return isMobile ? <SpMenu /> : <PcMenu />;
}
