import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Input,
    Flex,
    Button,
    Checkbox,
    Box
} from '@chakra-ui/react'
import React, { useState } from 'react'
import Accordian from './Accordian'
import { arr1, arr2, arr3 } from '../utils/data'
import { Select } from '@chakra-ui/react'

const HufForm = () => {
    const [netTaxableIncome, setNetTaxableIncome] = useState('');
    const [incomeTax, setIncomeTax] = useState(0);
    const [surcharge, setSurcharge] = useState(0);
    const [healthCess, setHealthCess] = useState(0);
    const [totalTaxLiability, setTotalTaxLiability] = useState(0);
    const [relief, setRelief] = useState(0);
    const [tds, setTds] = useState(0);
    const [accessed, setAccessed] = useState(0);


    const calculateAdvanceTax = () => {
        const income = parseFloat(netTaxableIncome);

        // Income Tax Calculation
        let tax = 0;
        if (income <= 250000) {
            tax = 0;
        } else if (income <= 500000) {
            tax = 0.05 * (income - 250000);
        } else if (income <= 1000000) {
            tax = 0.2 * (income - 500000) + 25000;
        } else {
            tax = 0.3 * (income - 1000000) + 125000;
        }
        setIncomeTax(tax);

        // Surcharge Calculation
        let surchargePercentage = 0;
        if (income > 5000000) {
            surchargePercentage = 0.1;
        } else if (income > 10000000) {
            surchargePercentage = 0.15;
        }
        const surchargeAmount = surchargePercentage * tax;
        setSurcharge(surchargeAmount);

        // Health and Education Cess Calculation
        const cess = 0.04 * (tax + surchargeAmount);
        setHealthCess(cess);

        // Total Tax Liability Calculation
        let totalTax = tax + surchargeAmount + cess;
        setTotalTaxLiability(totalTax);

        if (relief > 0) {
            totalTax -= relief;
        }
        if (tds > 0) {
            totalTax -= tds
        }
        setAccessed(totalTax)
    };
    return (
        <div>
            <>
                <div style={{ display: "flex", justifyContent: "space-evenly" }} >
                    <div style={
                        {
                            width: "75%"
                        }
                    }>
                        <TableContainer >
                            <Table variant='striped' colorScheme='gray'>

                                <Tbody>
                                    <Tr>
                                        <Td>Whether opting for taxation under Section 115BAC?

                                        </Td>

                                        <Td isNumeric>
                                            <Select border="1px solid gray">
                                                <option value='option1'>Select</option>
                                                <option value='yes'>Yes</option>
                                                <option value='no'>No</option>
                                            </Select>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Net Taxable Income</Td>

                                        <Td isNumeric>
                                            <Input value={netTaxableIncome} type='number'
                                                onChange={(e) => {
                                                    setNetTaxableIncome(e.target.value)

                                                }}

                                                border="1px solid gray" />
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Income Tax</Td>

                                        <Td isNumeric><Input border="1px solid gray" type='number' value={incomeTax} disabled /></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Sucharge</Td>

                                        <Td isNumeric><Input border="1px solid gray" type="number" value={surcharge} disabled /></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Health and Education Cess</Td>

                                        <Td isNumeric><Input border="1px solid gray" type="number" value={healthCess} disabled /></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Total Tax Liability</Td>

                                        <Td isNumeric><Input border="1px solid gray" type="number" value={totalTaxLiability} disabled
                                        /></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Relief</Td>

                                        <Td isNumeric><Input border="1px solid gray" type='number' value={relief} onChange={(e) => { setRelief(e.target.value) }}
                                        /></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>TDS/TCS/MAT(AMT) Credit Utilized</Td>

                                        <Td isNumeric><Input border="1px solid gray" type='number' value={tds} onChange={(e) => { setTds(e.target.value) }} /></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>Accessed Tax</Td>

                                        <Td isNumeric><Input border="1px solid gray" type='number' value={accessed} /></Td>
                                    </Tr>
                                </Tbody>

                            </Table>
                        </TableContainer>
                    </div>
                    <div style={{
                        width: "20%"
                    }}>
                        <Accordian arr={arr1} name={"TAX INFORMATION AND SERVICES"} />
                        <Accordian arr={arr2} name={"TAX LAWS & RULES"} />
                        <Accordian arr={arr3} name={"INTERNATIONAL TAXATION"} />
                    </div>
                </div>


                <Flex width="25%" margin="auto" justifyContent="space-evenly">
                    <Button bg="tomato" onClick={calculateAdvanceTax} color="white" >Calculate</Button>
                    <Button bg="gray" color="white">Reset</Button>

                </Flex>


            </>
        </div>
    )
}

export default HufForm