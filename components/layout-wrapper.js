
const LayoutWrapper = ({ children, ...props }) => {

  return (
    <div id="smooth-wrapper" {...props}>
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default LayoutWrapper;
