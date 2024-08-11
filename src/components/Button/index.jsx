import React from "react";
import PropTypes from 'prop-types';

const shapes={
    circle:"rounded-[50%]",
    round:"rounded-[16px]"
}
const variants={
outline:{
text2_1:"border-text2-1 border border-solid text-button",
text2_0:"border-text2-0 border border-solid text-button",
},
fill:{
button1_0:"bg-button1-0 text-text-0",
button:"bg-button text-bg",
secondary_secondary:"bg-bsecondary-secondary",
secondary_2:"bg-secondary_2 text-text-0",
bg:"bg-bg",
},
};
const sizes={
    "3xl":"h-[44px] px-[34px] text-[16px]",
    xl:"h-[40px] px-2.5",
    sm:"h-[32px] px-1 text-[14px]",
    lg:"h-[40px] px-[34px] text-[12px]",
    "2xl":"h-[40px] px-[34px] text-[16px]",
    "4xl":"h-[46px] px-2.5",
    "5xl":"h-[56px] px-[34px] text-[16px]",
    xs:"h-[26px] px-3 text-[12px]",
    md:"h-[34px] px-1 ",
};
const Button=({
    children,
    className="",
    leftIcon,
    rightIcon,
    shape,
    variant="fill",
    size="md",
    color="bg",
    ...restProps
})=> {
return (
    <button className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap text-text-0 text-[16px] font-medium bg-secondary_2 min-w-[254px] rounded ${(shape && shapes[shape])||""}
    ${(size && sizes[size])||""} ${(variant && variants[variant]?.[color])||""}`} {...restProps}>
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
        
    </button>
);
};
Button.propType={
className:PropTypes.string,
children:PropTypes.node,
leftIcon :PropTypes.node,
rightIcon:PropTypes.node,
shape:PropTypes.oneOf(["circle","round"]),
size:PropTypes.oneOf(["3xl","xl","sm","lg","2xl","4xl","5xl","xs","md"]),
variant:PropTypes.oneOf(["outline","fill"]),
color:PropTypes.oneOf(["text2_1","text2_0","button1_0","button","secondary_secondary","secondary_2","bg"]),
}
export default Button