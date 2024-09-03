import React from 'react';
import { Helmet } from 'react-helmet-async';
import { faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Text from '../Text';
import Sliders from '../Sliders';
import Heading from '../Heading';
import slider from "../../assets/images/slider.png";
import app_logo from "../../assets/images/app_logo.png";

const HomeSection = () => {
    const [voucherSlider, setVoucherSlider] = React.useState(0);
    const voucherSliderRef = React.useRef(null);

    const handleSetVoucherSlider = (e) => {
        setVoucherSlider(e?.item);
    };

    // Tạo mảng các phần tử cho slider
    const sliderItems = React.useMemo(() => {
        return [...Array(3)].map((_, index) => (
            <div key={index} className='flex bg-button'>
                <div className='mt-4 flex w-full items-center md:flex-col'>
                    <div className='z-[1] w-[48%] relative mb-2.5 flex justify-center self-end px-14 md:w-full md:self-auto md:px-5'>
                        <div className='mb-[34px] flex w-full flex-col gap-5'>
                            <div className='flex items-center gap-6'>
                            <img src={app_logo} alt="1200pxapple" className='h-[48px] object-cover' />
                            <Heading as='p' className='mb-2 self-end font-light text-text-0'>iPhone 14 Series</Heading>
                              
                            </div>
                            <Heading
                                size='heading_48px_semibold'
                                as='h1'
                                className='leading-[60px] w-[80%] !text-text-0 md:w-full'
                            >
                                Up to 10% off Voucher
                            </Heading>
                            <div className='gap-[9px] flex items-center'>
                                <div className='w-[24%] flex flex-col items-center gap-1'>
                                    <Heading as='h2' className='!text-text-0'>Shop Now</Heading>
                                    <div className='h-px w-full self-strectch bg-text-0'></div>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faArrowRight}  />
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src={slider} alt="Image" className='ml-[-66px] w-[52%] h-[328px] object-cover md:ml-0 md:w-full' />
                </div>
            </div>
        ));
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>Demo</title>
                <meta name='description' content='Web site created using create-react-app' />
            </Helmet>
            <div className='sm:gap-[70px] md:gap-[105px] gap-[140px] flex w-full flex-col items-center'>
                <div className='container-xs md:px-5'>
                    <div className='flex items-end justify-center md:flex-col'>
                        <div className='w-[18%] flex flex-col items-start gap-4 md:w-full'>
                            <div className='flex justify-between gap-5 self-stretch'>
                                <Text as="p">Woman's Fashion</Text>
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            </div>
                            <div className='flex justify-between gap-5 self-stretch'>
                                <Text as="p">Men's Fashion</Text>
                                <div>
                                    <FontAwesomeIcon icon={faChevronRight} />
                                </div>
                            </div>
                            <Text as="p">Electronics</Text>
                            <Text as="p">Home & Lifestyle</Text>
                            <Text as="p">Medicine</Text>
                            <Text as="p">Sports & Outdoor</Text>
                            <Text as="p">Baby's & Toys</Text>
                            <Text as="p">Groceries & Pets</Text>
                            <Text as="p">Health & Beauty</Text>
                        </div>
                        <div className='md:w-[384px] h-[384px] ml-4 w-px self-center bg-black-900_4c md:ml-0 md:h-px'>
                            <div className='w-[80%] h-[344px] relative content-center md:h-auto md:w-full'>
                                <div className='slider1200pxapp2 mx-auto flex w-full'>
                                    <Sliders
                                        autoPlay
                                        autoPlayInterval={2000}
                                        responsive={{ 0: { items: 1 }, 551: { items: 1 }, 1051: { items: 1 } }}
                                        activeIndex={voucherSlider}
                                        onSlideChanged={handleSetVoucherSlider}
                                        ref={voucherSliderRef}
                                        items={sliderItems}
                                        renderDotsItem={(props) => {
                                            return props?.isActive ? (
                                                <div
                                                    className='rounded-[50%] mr-[5px] w-[14px] h-[14px] inline-block cursor-pointer border-2 border-solid border-bg'
                                                />
                                            ) : (
                                                <div
                                                    className='rounded-[50%] mr-[5px] w-[12px] h-[12px] inline-block cursor-pointer bg-white-a700_7f'
                                                />
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default HomeSection;
