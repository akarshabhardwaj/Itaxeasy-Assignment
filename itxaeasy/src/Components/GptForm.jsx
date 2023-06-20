import React, { useState } from 'react';

const HRAForm = () => {
    const [basicSalary, setBasicSalary] = useState('');
    const [da, setDA] = useState('');
    const [commissions, setCommissions] = useState('');
    const [hraReceived, setHRAReceived] = useState('');
    const [rentPaid, setRentPaid] = useState('');
    const [hraExemption, setHRAExemption] = useState(0);

    const calculateHRA = () => {
        const basicDA = parseFloat(basicSalary) + parseFloat(da);
        const metropolitanCity = false; // Set to false if non-metropolitan city
        const hraPercentage = metropolitanCity ? 0.5 : 0.4;

        const rentPaidMinus10Percent = parseFloat(rentPaid) - (0.1 * basicDA);
        const calculatedHRA = Math.min(
            parseFloat(hraReceived),
            hraPercentage * basicDA,
            rentPaidMinus10Percent
        );

        setHRAExemption(calculatedHRA);
    };

    return (
        <div>
            <label>
                Basic Salary:
                <input type="number" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} />
            </label>
            <br />
            <label>
                DA:
                <input type="number" value={da} onChange={(e) => setDA(e.target.value)} />
            </label>
            <br />
            <label>
                Commissions:
                <input type="number" value={commissions} onChange={(e) => setCommissions(e.target.value)} />
            </label>
            <br />
            <label>
                HRA Received:
                <input type="number" value={hraReceived} onChange={(e) => setHRAReceived(e.target.value)} />
            </label>
            <br />
            <label>
                Rent Paid:
                <input type="number" value={rentPaid} onChange={(e) => setRentPaid(e.target.value)} />
            </label>
            <br />
            <button onClick={calculateHRA}>Calculate HRA</button>
            <br />
            <label>
                HRA Exemption:
                <input type="number" value={hraExemption} disabled />
            </label>
        </div>
    );
};

export default HRAForm;
