import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from '@chakra-ui/react'

import React from 'react'

const Accordian = ({ arr, name }) => {
    // console.log(props)
    return (
        <div>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                {name}
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <AccordionItem>
                            {arr.map((el, index) => {
                                return <h2 style={
                                    {
                                        color: "teal", textDecoration: "underline", textAlign: "left"

                                    }
                                } key={index}>{el}</h2>
                            })}
                        </AccordionItem>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Accordian