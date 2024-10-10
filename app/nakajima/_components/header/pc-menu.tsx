import Link from 'next/link';
import Icon from './icon';

/**
 * PC用メニューバーのコンポーネント
 */
const links = [
  { name: 'TOP', url: '/nakajima/top' },
  { name: 'INFO', url: '/nakajima/info' },
  { name: 'KAI', url: '/nakajima/kai' },
  { name: 'RUI', url: '/nakajima/rui' },
  { name: 'ITO', url: '/nakajima/ito' },
];

const PcMenu = () => {
  return (
    <div className="bg-base-beige text-white flex justify-between items-center">
      <Icon />
      <div className="flex">
        {links.map(({ name, url }) => (
          <Link
            key={url}
            href={url}
          >
            <button className="header-button flex justify-center items-center w-[85px] h-[45px] mx-[0.4px] bg-accent-beige">
              {name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PcMenu;
