import axios from "axios";

export const getSalesReport = async function (venderId, startTime, endTime) {
    let json = {
        "venderId": venderId,
        "startTime": startTime,
        "endTime": endTime
    }

    try {
        const response = await axios.post("/api/report/get-sale-report", json)
        return response.data
    } catch (err) {
        console.log(err)
    }
}
