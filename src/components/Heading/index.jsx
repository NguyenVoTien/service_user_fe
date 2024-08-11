import React from "react";

const sizes = {
  headingxs: "text-[14px] font-semibold",
  heading_110px_medium: "tracking-[3.30px] font-inter1 text-[110px] font-medium md:text-[48px]",
  title_20px_medium: "text-[20px] font-medium",
  title_12px_medium: "text-[12px] font-medium",
};

const Heading= ({ children, className = "", size = "title_20px_medium", as: Component = "h6", ...restProps }) => (
  <Component className={`text-text-0 font-poppinsl ${className} ${sizes[size]}`} {...restProps}>
    {children}
  </Component>
);

export default Heading;