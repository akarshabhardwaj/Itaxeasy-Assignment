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
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Accordian from "./Accordian";
import { arr1, arr2, arr3 } from "../utils/data";
import { Select } from "@chakra-ui/react";

const IndividualForm = () => {
  const [change, setChange] = useState(false);
  const [table2, setTable2] = useState(false);
  const [capital, setCapital] = useState(false);
  const [netincome, setNetIncome] = useState(0);
  const [houseproperty, setHouseproperty] = useState(0);
  const [capitalgain, setCapitalgains] = useState(0);
  const [profit, setProfit] = useState(0);
  const [other, setOther] = useState(0);
  const [agri, setAgriculture] = useState(0);
  const [deduction, setDeduction] = useState(0);
  const [surcharge, setSurcharge] = useState(0);
  const [healthCess, setHealthCess] = useState(0);
  const [totalTaxLiability, setTotalTaxLiability] = useState(0);
  const [relief, setRelief] = useState(0);
  const [tds, setTds] = useState(0);
  const [accessed, setAccessed] = useState(0);
  const [incomeTax, setIncomeTax] = useState(0);
  const [nettaxableincome, setNettaxableIncome] = useState(0);

  const CalculateAdvanceTax = () => {
    const totalIncome =
      parseFloat(netincome) +
      parseFloat(houseproperty) +
      parseFloat(capitalgain) +
      parseFloat(other) +
      parseFloat(profit) +
      parseFloat(agri);
    const totalDeductions = parseFloat(deduction);
    const incomeTaxBeforeRelief = totalIncome - totalDeductions - 50000; // Assuming standard deduction of Rs. 50000
    setNettaxableIncome(incomeTaxBeforeRelief);
    // let totalIncomeGot =
    //   netincome +
    //   houseproperty +
    //   capitalgain +
    //   profit +
    //   other +
    //   agri -
    //   deduction;
    // setNettaxableIncome(totalIncomeGot);
    let it = 0;
    if (incomeTaxBeforeRelief <= 250000) {
      it = 0;
    } else if (incomeTaxBeforeRelief <= 500000) {
      it = 0.05 * (incomeTaxBeforeRelief - 250000);
    } else if (incomeTaxBeforeRelief <= 750000) {
      it = 0.1 * (incomeTaxBeforeRelief - 500000) + 25000;
    } else if (incomeTaxBeforeRelief <= 1000000) {
      it = 0.15 * (incomeTaxBeforeRelief - 750000) + 75000;
    } else if (incomeTaxBeforeRelief <= 1250000) {
      it = 0.2 * (incomeTaxBeforeRelief - 1000000) + 125000;
    } else if (incomeTaxBeforeRelief <= 1500000) {
      it = 0.25 * (incomeTaxBeforeRelief - 1250000) + 175000;
    } else {
      it = 0.3 * (incomeTaxBeforeRelief - 1500000) + 225000;
    }
    console.log(it);
    setIncomeTax(it);
    // let it = 0;
    // if (totalIncomeGot <= 250000) {
    //   it = 0;
    // } else if (totalIncomeGot > 250000 && totalIncomeGot <= 500000) {
    //   it = 0.05 * totalIncomeGot;
    // } else if (totalIncomeGot > 500000 && totalIncomeGot <= 1000000) {
    //   it = 0.2 * totalIncomeGot;
    // } else if (totalIncomeGot > 1000000) {
    //   it = 0.3 * totalIncomeGot;
    // }
    // setIncomeTax(it);

    let surchargePercentage = 0;
    if (incomeTaxBeforeRelief > 10000000) {
      surchargePercentage = 0.07;
    } else if (incomeTaxBeforeRelief > 100000000) {
      surchargePercentage = 0.12;
    }
    const surchargeAmount = surchargePercentage * it;
    setSurcharge(surchargeAmount);

    // let sur = 0;
    // if (totalIncomeGot > 5000000) {
    //   sur = 0.1 * it;
    // } else if (totalIncomeGot > 10000000) {
    //   sur = 0.15 * it;
    // } else if (totalIncomeGot > 20000000) {
    //   sur = 0.25 * it;
    // } else if (totalIncomeGot > 50000000) {
    //   sur = 0.37 * it;
    // }
    // setSurcharge(sur);
    const cess = 0.04 * (it + surchargeAmount);
    setHealthCess(cess);

    let totalTax = it + surchargeAmount + cess;
    if (relief > 0) {
      totalTax -= relief;
    }
    if (tds > 0) {
      totalTax -= tds;
    }
    setAccessed(totalTax);

    // let final = incomeTax + surcharge + healthCess;
    // setAccessed(final);
  };

  const table_attributes = {
    display: change ? "block" : "none",
  };
  const table_gains = {
    display: table2 ? "block" : "none",
  };
  const table_capital = {
    display: capital ? "block" : "none",
  };
  return (
    <div>
      <>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <div
            style={{
              width: "75%",
            }}
          >
            <TableContainer>
              <Table variant="striped" colorScheme="gray">
                <Tbody>
                  <Tr>
                    <Td>Whether opting for taxation under Section 115BAC?</Td>

                    <Td isNumeric>
                      <Select border="1px solid gray">
                        <option value="option1">Select</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                      </Select>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Male / Female / Senior Citizen</Td>

                    <Td isNumeric>
                      <Select border="1px solid gray">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="senior">Senior Citizen</option>
                      </Select>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Residential Status</Td>

                    <Td isNumeric>
                      <Select border="1px solid gray">
                        <option value="resident">Resident</option>
                        <option value="nonresident">Non-Resident</option>
                      </Select>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      Income from Salary (Income from salary after standard
                      deduction of Rs.50000.)
                    </Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={netincome}
                        onChange={(e) => {
                          setNetIncome(e.target.value);
                        }}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td display="grid" gridTemplateColumns="repeat(2,1fr)">
                      Income From House Property
                    </Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={houseproperty}
                        onChange={(e) => {
                          setHouseproperty(e.target.value);
                        }}
                      />
                    </Td>
                  </Tr>

                  <Tr>
                    <Td display="grid" gridTemplateColumns="repeat(2,1fr)">
                      Capital Gain
                    </Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={capitalgain}
                        onChange={(e) => {
                          setCapitalgains(e.target.value);
                        }}
                      />
                    </Td>
                  </Tr>

                  <Tr>
                    <Td>
                      Profits and Gains of Business or Profession (enter profit
                      only)
                    </Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={profit}
                        onChange={(e) => {
                          setProfit(e.target.value);
                        }}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td display="grid" gridTemplateColumns="repeat(2,1fr)">
                      Income From Other Sources
                    </Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={other}
                        onChange={(e) => {
                          setOther(e.target.value);
                        }}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Table style={table_gains} border="2px solid black">
                      <Tbody>
                        <Tr>
                          <Td>Interest</Td>
                          <Td>
                            <Input border="1px solid gray" type="number" />
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>Commission/Other Income</Td>
                          <Td>
                            <Input border="1px solid gray" type="number" />
                          </Td>
                        </Tr>
                        <Tr>
                          <Td>
                            Winnings from Lottery, Crossword Puzzles, etc.
                          </Td>
                          <Td>
                            <Input border="1px solid gray" type="number" />
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Tr>
                  <Tr>
                    <Td>Agricultural Income</Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={agri}
                        onChange={(e) => {
                          setAgriculture(e.target.value);
                        }}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Deductions</Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={deduction}
                        onChange={(e) => {
                          setDeduction(e.target.value);
                        }}
                        placeholder="Enter All Deductions"
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Net Taxable Income</Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        disabled
                        value={nettaxableincome}
                      />
                    </Td>
                  </Tr>

                  <Tr>
                    <Td>Income Tax</Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={incomeTax}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Sucharge</Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={surcharge}
                        onChange={(e) => {
                          setSurcharge(e.target.value);
                        }}
                        disabled
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Health and Education Cess</Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={healthCess}
                        onChange={(e) => {
                          setHealthCess(e.target.value);
                        }}
                        disabled
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Total Tax Liability</Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={totalTaxLiability}
                        onChange={(e) => {
                          setTotalTaxLiability(e.target.value);
                        }}
                        disabled
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Relief</Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={relief}
                        onChange={(e) => {
                          setRelief(e.target.value);
                        }}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>TDS/TCS/MAT(AMT) Credit Utilized</Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={tds}
                        onChange={(e) => {
                          setTds(e.target.value);
                        }}
                      />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Accessed Tax</Td>

                    <Td isNumeric>
                      <Input
                        border="1px solid gray"
                        type="number"
                        value={accessed}
                        onChange={(e) => {
                          setAccessed(e.target.value);
                        }}
                        disabled
                      />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </div>
          <div
            style={{
              width: "20%",
            }}
          >
            <Accordian arr={arr1} name={"TAX INFORMATION AND SERVICES"} />
            <Accordian arr={arr2} name={"TAX LAWS & RULES"} />
            <Accordian arr={arr3} name={"INTERNATIONAL TAXATION"} />
          </div>
        </div>

        <Flex width="25%" margin="auto" justifyContent="space-evenly">
          <Button bg="tomato" onClick={CalculateAdvanceTax} color="white">
            Calculate
          </Button>
          <Button bg="gray" color="white">
            Reset
          </Button>
        </Flex>
      </>
    </div>
  );
};

export default IndividualForm;
