import { memo } from "react";

interface MenuItem {
  title: string;
  separator: boolean;
  rightLabel: string | null;
}

interface Props {
  items: MenuItem[];
  title: string;
}

const Menu = ({ items, title }: Props) => (
  <div
    className={`absolute bg-gray-700 bg-opacity-50 p-1 rounded-md left-0 border border-gray-500 border-box${
      title === "Apple" ? " top-5" : ""
    }`}
  >
    {items &&
      items.map((item: MenuItem) => (
        <div key={item.title}>
          {item.separator && (
            <span className="block h-0.5 border-b border-gray-500 my-1 mx-2 text-xs" />
          )}
        </div>
      ))}
  </div>
);

export default memo(Menu);
