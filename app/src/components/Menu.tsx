// components/Menu.tsx

import React from 'react';
import menuData from '@/data/menuData.json'; // 가정된 JSON 파일 경로

interface MenuProps {
  onMenuSelect: (menuName: string) => void;
}

const Menu: React.FC<MenuProps> = ({ onMenuSelect }) => {
  return (
    <div className="menu w-1/6 p-4 flex flex-col outline outline-1 overflow-hidden ">
      {menuData.map((item, index) => (
        <button
          key={index}
          className="block w-full p-2 mb-2 text-left  rounded"
          onClick={() => onMenuSelect(item.name)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Menu;