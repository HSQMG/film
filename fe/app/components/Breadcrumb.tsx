import Link from "next/link";

export default function Breadcrumb({ items }: any) {
  return (
    <nav className="text-sm mb-3 text-gray-600">
      {items.map((item: any, index: number) => (
        <span key={index}>
          {item.href ? (
            <Link href={item.href} className="hover:text-red-600">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800">{item.label}</span>
          )}
          {index < items.length - 1 && <span> » </span>}
        </span>
      ))}
    </nav>
  );
}
