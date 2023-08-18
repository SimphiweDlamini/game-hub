import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'f1d3b763f96e4ee0bfe45a8895d0996e'
    }
})