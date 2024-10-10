import Link from 'next/link';
import { useState } from 'react';
import Icon from './icon';

/**
 * SP用メニューバーのコンポーネント
 */
const SpMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: 'TOP', url: '/nakajima/top' },
    { name: 'INFO', url: '/nakajima/info' },
    { name: 'KAI', url: '/nakajima/kai' },
    { name: 'RUI', url: '/nakajima/rui' },
    { name: 'ITO', url: '/nakajima/ito' },
  ];

  return (
    <div className="relative text-white flex justify-between items-center">
      <Icon />
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="text-5xl z-10"
        aria-expanded={isOpen}
      >
        {isOpen ? '×' : '≡'}
      </button>
      {isOpen && (
        <div
          className="fixed inset-0"
          onClick={() => setIsOpen(false)}
        >
          <nav className="w-full h-[50%] pt-20 flex items-start justify-center bg-black bg-opacity-30">
            <ul className="space-y-10">
              {links.map(({ name, url }) => (
                <li
                  key={url}
                  className="text-center"
                >
                  <Link
                    href={url}
                    className="w-full text-white underline focus:no-underline focus:opacity-70"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default SpMenu;
