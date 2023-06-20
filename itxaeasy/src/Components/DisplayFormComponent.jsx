import React from 'react'
import HufForm from './HufForm'
import DomesticForm from './DomesticForm'
import ForeignForm from './ForeignForm'
import Cooperative from './CooperativeForm'

const DisplayFormComponent = ({ selected }) => {
    console.log(selected)
    if (selected === "HUF" || selected === "AOPs/BOI")
        return (
            <div><HufForm /></div>
        )
    else if (selected === "Domestic Company" || selected === "Firms" || selected === "LLP") {
        return (
            <div><DomesticForm /></div>
        )
    }
    else if (selected === "Foreign Company") {
        return (
            <div><ForeignForm /></div>
        )
    }
    else if (selected === "Co-operative Society") {
        return (
            <div><Cooperative /></div>
        )
    }
    else {
        return (
            <div><HufForm /></div>
        )
    }
}

export default DisplayFormComponent