import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CovidDetailsCard from './coviddetails';

function Reports() {

    const [countries, setCountries] = useState([]);
    useEffect(async () => {
        const fetchCountryDetails = async () => {
            const countryDetails = await axios.get('https://covid19.mathdro.id/api/countries');
            setCountries(countryDetails.data.countries);
        };
        fetchCountryDetails();
    }, [])

    return (
        < div className="container-fluid">
            <div className="row">
                {countries.map((country, index) => {
                    return <div className="col-xl-4 col-md-6 mb-4" key={index}>
                        <CovidDetailsCard country={country.name} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Reports

