const TabButton = ({ children, isselected, ...props }) => (
  <li>
    <button className={isselected ? "active" : null} {...props} onClick={props.onClick}>{children}</button>
  </li>
);

export default TabButton;
