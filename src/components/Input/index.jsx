import React from 'react'
import PropTypes from 'prop-types';
const Input=React.forwardRef(
    ({
        className = "",
        name="",
        placeholder="",
        label="",
        type="text",
        prefix,
        suffix,
        onChange,
        ...restProps
    
},ref)=> {
    return (
        <React.Fragment>
            <label className='{`${className} undefined}'>
                {!!label && label}
                {!! prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps}/>
                {!! suffix && suffix}
            </label>
        </React.Fragment>
    )

    }
) 
export default Input




// Input.propTypes={
//     className:PropTypes.string,
// name:PropTypes.string,
// placeholder :PropTypes.string,
// type :PropTypes.string,
// label :PropTypes.string,
// prefix :PropTypes.node,
// suffix:PropTypes.node,

// }

