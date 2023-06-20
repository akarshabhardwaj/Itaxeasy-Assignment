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

export const Tables = () => {
    const [basicSalary, setBasicSalary] = useState('');
    const [da, setDA] = useState('');
    const [commissions, setCommissions] = useState('');
    const [hraReceived, setHRAReceived] = useState('');
    const [rentPaid, setRentPaid] = useState('');
    const [hraExemption, setHRAExemption] = useState(0);
    const [taxablehra, setTaxableHra] = useState(0);

    const [check, setCheck] = useState(false)

    const calculateHRA = () => {
        const basicDA = parseFloat(basicSalary) + parseFloat(da);
        const metropolitanCity = false; // Set to false if non-metropolitan city
        const hraPercentage = check ? 0.5 : 0.4;

        const rentPaidMinus10Percent = parseFloat(rentPaid) - (0.1 * basicDA);
        const calculatedHRA = Math.min(
            parseFloat(hraReceived),
            hraPercentage * basicDA,
            rentPaidMinus10Percent
        );

        setHRAExemption(calculatedHRA);
        setTaxableHra(hraReceived - calculatedHRA)
    };

    const ResetFunction = () => {
        setBasicSalary(0);
        setDA(0);
        setCommissions(0);
        setHRAReceived(0);
        setRentPaid(0);
        setHRAExemption(0);
        setTaxableHra(0);
    }


    return (
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
                                    <Td>Basic Salary</Td>

                                    <Td isNumeric>
                                        <Input placeholder="Enter basic salary" border="1px solid gray" value={basicSalary} onChange={(e) => {
                                            setBasicSalary(e.target.value)
                                            // console.log(salary)
                                        }} />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>DA forming part of salary</Td>

                                    <Td isNumeric>
                                        <Input border="1px solid gray" value={da} onChange={(e) => {
                                            setDA(e.target.value)
                                            // console.log(salary)
                                        }} />
                                    </Td>
                                </Tr>
                                <Tr>
                                    <Td>Commission (as % of turnover achieved by the employee)</Td>

                                    <Td isNumeric><Input border="1px solid gray" value={commissions} onChange={(e) => {
                                        setCommissions(e.target.value)
                                        // console.log(salary)
                                    }} /></Td>
                                </Tr>
                                <Tr>
                                    <Td>HRA Received</Td>

                                    <Td isNumeric><Input border="1px solid gray" value={hraReceived} onChange={(e) => {
                                        setHRAReceived(e.target.value)
                                        // console.log(salary)
                                    }} /></Td>
                                </Tr>
                                <Tr>
                                    <Td>Rent Paid</Td>

                                    <Td isNumeric><Input border="1px solid gray" value={rentPaid} onChange={(e) => {
                                        setRentPaid(e.target.value)
                                        // console.log(salary)
                                    }} /></Td>
                                </Tr>
                                <Tr>
                                    <Td>Tick if residing in metro city.</Td>

                                    <Td isNumeric><Checkbox border="0px solid gray" value={check} onChange={() => {
                                        setCheck(!check);
                                        console.log(check)
                                    }} >Tick One</Checkbox></Td>
                                </Tr>
                                <Tr>
                                    <Td>Exempted House Rent Allowance</Td>

                                    <Td isNumeric><Input border="1px solid gray" value={hraExemption}
                                        disabled /></Td>
                                </Tr>
                                <Tr>
                                    <Td>Taxable House Rent Allowance</Td>

                                    <Td isNumeric><Input border="1px solid gray" disabled value={taxablehra} /></Td>
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
                <Button bg="tomato" color="white" onClick={calculateHRA}>Calculate</Button>
                <Button bg="gray" color="white" onClick={ResetFunction}>Reset</Button>

            </Flex>


        </>
    )
}

export default Tables