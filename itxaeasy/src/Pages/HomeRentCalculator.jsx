import React from 'react'
import "./styles.css"
import { Box } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import Tables from '../Components/Tables'

const HomeRentCalculator = () => {
    return (
        <div>
            <div className="head1">(As amended upto Finance Act, 2023)</div>
            <Box bg='rgb(59,154,198)' w='20%' ml='2%' textAlign='left' mt='2%' p={4} color='white' display='flex' justifyContent='space-evenly'>
                <CalendarIcon />
                HOUSE RENT ALLOWANCE
            </Box>
            <Tables />
        </div>
    )
}

export default HomeRentCalculator