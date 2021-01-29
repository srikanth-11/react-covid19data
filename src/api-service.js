import axios from "axios";

  export default  function getdata () {
 return axios.get("https://covid19.mathdro.id/api")
}

