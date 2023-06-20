import React, { useState } from 'react'
import "./styles.css"
import { Box, TableContainer, Table, Tbody, Tr, Td, Button } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { CalendarIcon, ChevronDownIcon } from '@chakra-ui/icons'
import HufForm from '../Components/HufForm'
import DomesticForm from '../Components/DomesticForm'
import DisplayFormComponent from '../Components/DisplayFormComponent'

const AdvanceTaxCalculator = () => {
    const [selected, setSelected] = useState("Select")
    return (
        <div>
            <div className="head1">(As amended upto Finance Act, 2023)</div>
            <Box bg='rgb(59,154,198)' w='37%' ml='2%' textAlign='left' mt='2%' p={4} color='white' display='flex' justifyContent='space-evenly'>
                <CalendarIcon />
                ADVANCE TAX CALCULATOR FOR FINANCIAL YEAR 2023-24
            </Box>
            <div style={{ width: "75%", marginBottom: "1%", marginLeft: "1.5%" }}>
                <TableContainer>
                    <Table variant='striped' colorScheme='gray'>

                        <Tbody>
                            <Tr >
                                <Td>Tax Payer</Td>

                                <Td isNumeric background="white">

                                    <Menu >
                                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                            {selected}
                                        </MenuButton>
                                        <MenuList>
                                            <MenuItem onClick={() => { setSelected("Select") }}>Select</MenuItem>
                                            <MenuItem onClick={() => { setSelected("Individual") }}>Individual</MenuItem>
                                            <MenuItem onClick={() => { setSelected("HUF") }}>HUF</MenuItem>
                                            <MenuItem onClick={() => { setSelected("AOPs/BOI") }}>AOPs/BOI</MenuItem>
                                            <MenuItem onClick={() => { setSelected("Domestic Company") }}>Domestic Company</MenuItem>
                                            <MenuItem onClick={() => { setSelected("Foreign Company") }}>Foreign Company</MenuItem>
                                            <MenuItem onClick={() => { setSelected("Firms") }}>Firms</MenuItem>
                                            <MenuItem onClick={() => { setSelected("LLP") }}>LLP</MenuItem>
                                            <MenuItem onClick={() => { setSelected("Co-operative Society") }}>Co-operative Society</MenuItem>
                                        </MenuList>
                                    </Menu>

                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
            <DisplayFormComponent selected={selected} />


        </div>
    )
}

export default AdvanceTaxCalculator