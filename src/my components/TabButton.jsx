const TabButton = ({ children, isselected, ...props }) => (
  <li>
    <button className={isselected ? "active" : null} {...props}>{children}</button>
  </li>
);

export default TabButton;
