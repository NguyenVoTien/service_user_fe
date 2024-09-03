//* LIB
import React from 'react'

import Heading from '../Heading'
import Text from '../Text'
import Button from '../Button'
import { NavLink } from 'react-router-dom'


const NotFoundSection = () => {
  return (
    <React.Fragment>
        <div className='mt-20 flex flex-col items-center'>
            <div className='container-xs sm:gap-[62px] md:gap-[93px] gap-[124px] flex flex-col md:px-5'>
                <div className='md:gap-[60px] mx-[170px] flex flex-col items-center gap-20 md:mx-0 sm:gap-10'>
                    <div className='gap-[22px] flex flex-col items-center self-stretch'>
                        <Heading size='heading_110px_medium' as='h1' className='!text-button'>
                            404 Not Found
                        </Heading>
                        <Text as="p" className='!text-button'>
                            Your visted page not found. You may go home page
                        </Text>
                    </div>
                    <NavLink to="/">
                    <Button color='secondary_2' size='5xl'>
                        Back to home page
                    </Button>
                    </NavLink>
                   
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default NotFoundSection
