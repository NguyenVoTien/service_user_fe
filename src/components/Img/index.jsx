import React from "react"

const Img=(
    {
        className,
        scr="defaultNoData.png",
        alt="testImg",
        ...restProps
    }
)=> {
    return (
<React.Fragment>
        <img src={scr} alt={alt} className={className}{...restProps} loading={"lazy"} />
    </React.Fragment>
    )
    

}
export default Img