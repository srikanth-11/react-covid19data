import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CovidDetailsCard({ country }) {

    const [covidDetails, setCovidDetails] = useState({ confirmed: '', recovered: '', deaths: '' });

    useEffect(() => {
        const CovidDataForCountry = async () => {
            const covidDetails = await axios.get(`https://covid19.mathdro.id/api/countries/${country}`);
            console.log(covidDetails.data);
            setCovidDetails(covidDetails.data);
        }
        CovidDataForCountry();

    }, [])

    
    return (
        <div className="card border-left-secondary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xl font-weight-bold text-primary text-uppercase mb-1">country:
                            {country}</div>
                        <div className="h5 mb-0 font-weight-bold text-primary">Confirmed :{covidDetails.confirmed.value}</div>
                        <div className="h5 mb-0 font-weight-bold text-success">Recovered : {covidDetails.recovered.value}</div>
                        <div className="h5 mb-0 font-weight-bold text-danger">Deaths : {covidDetails.deaths.value}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CovidDetailsCard