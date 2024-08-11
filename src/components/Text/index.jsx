
import React from "react";

const sizes = {
  
  title_14px_regular:"text-[14px] font-normail not-italic",
  title_16px_regular:"text-[16px] font-normail not-italic",
};

const Text=({children,className="",size=" title_16px_regular",as,...restProps})=> {
 const Component=as || "p";
return (
    <Component className={`font-poppinsl ${className}${sizes[size]}`} {...restProps}>
        {children} 
    </Component>
);
};


export default Text