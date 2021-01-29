import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getdata from '../api-service'

function Card (props){
let [countrydata,setcountrydata] = useState({
 confirmed: { value: "", details: "" },
        recovered: { value: "", details: "" },
        deaths: { value: "", details: "" },

    })


 useEffect(async () => {
try {
   countrydata = await getdata()
   setcountrydata(countrydata.data)
 console.log(countrydata.data)
} catch (error) {
 console.log(error)
}

  
}, []);



 return< div className="row justify-content-center" >
      {/* Earnings (Monthly) Card Example */}
      < div className="col-xl-3 col-md-6 mb-4" >
          <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                  <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                              Confirmed</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">{countrydata.confirmed.value}</div>
                      </div>
                      <div className="col-auto">
                          <i className="fas fa-calendar fa-2x text-gray-300" />
                      </div>
                  </div>
              </div>
          </div>
      </div >
      {/* Earnings (Monthly) Card Example */}
      < div className="col-xl-3 col-md-6 mb-4" >
          <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                  <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                              Recovered</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">{countrydata.recovered.value}</div>
                      </div>
                      <div className="col-auto">
                          <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                      </div>
                  </div>
              </div>
          </div>
      </div >
      {/* Earnings (Monthly) Card Example */}

      {/* Pending Requests Card Example */}
      < div className="col-xl-3 col-md-6 mb-4" >
          <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                  <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                              Deaths</div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">{countrydata.deaths.value}</div>
                      </div>
                      <div className="col-auto">
                          <i className="fas fa-comments fa-2x text-gray-300" />
                      </div>
                  </div>
              </div>
          </div>
      </div >
  </div >


  

}
export default Card;