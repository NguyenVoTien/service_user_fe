
import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const Sliders = React.forwardRef(
  ({ items = [], activeIndex = 0, centerMode, magnifiedIndex = 0, activeSlideCSS = "scale-75", ...props }, ref) => {
    const isSmall = (index) => {
      if (activeIndex + magnifiedIndex >= items.length) {
        return index !== (activeIndex + magnifiedIndex - items.length);
      } else {
        return index !== (activeIndex + magnifiedIndex);
      }
    };

    const slideItems = centerMode
      ? items.map((child, index) => {
          if (isSmall(index)) {
            return React.cloneElement(child, {
              ...child.props,
              className: [child.props?.className, activeSlideCSS].filter(Boolean).join(" "),
            });
          }
          return React.cloneElement(child);
        })
      : items;

    return (
      <React.Fragment>
        <AliceCarousel
          items={slideItems}
          ref={ref}
          infinite
          {...props}
          touchTracking
          mouseTracking
          disableButtonsControls
        />
      </React.Fragment>
    );
  }
);

export default Sliders;
