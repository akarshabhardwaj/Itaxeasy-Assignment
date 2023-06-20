import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdvanceTaxCalculator from '../Pages/AdvanceTaxCalculator'
import HomeRentCalculator from '../Pages/HomeRentCalculator'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<AdvanceTaxCalculator />} />
                <Route path='/homerent' element={<HomeRentCalculator />} />
            </Routes>
        </div>
    )
}

export default AllRoutes