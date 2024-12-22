export default function TabButton({ children, isSelected, ...moreProps }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...moreProps}>
        {children}
      </button>
    </li>
  );
}
