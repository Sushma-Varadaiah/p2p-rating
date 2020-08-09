import React, { useEffect, useState } from "react"
import web3 from "./network/web3"
import rating from "./network/rating"
import users from "./users.json"

const Rating = () => {
    const [ratingOfInAddress, setRatingOfInAddress] = useState(null)
    useEffect(() => {
    })

    const rateUser = async (address, value) => {
        console.log(address, value)
        let res = await rating.methods.rateUser(address, value).send({
            from: web3.currentProvider.selectedAddress,
            gas: 6721975
        })
        console.log(res)
    }

    const getRatings = async (address) => {
        let res = await rating.methods.getUserRatings(address).call()
        setRatingOfInAddress(res)
        console.log("Ratings", res)
    }
    return (
        <div>
            <p>Your Current Address - {web3.currentProvider.selectedAddress} </p>

            <div class="row">
                {
                    users.map((user) =>
                        <div class="col-md-3">
                            <div class="card">
                                <img class="card-img-top" src={user.picture} alt={user["Account Address"]} />
                                <div class="card-body">

                                {ratingOfInAddress && <span>Your rating is {ratingOfInAddress[0]} and timestamp {ratingOfInAddress[1]} </span>} <br></br>
                                    <button className="btn btn-primary btn-sm" onClick={()=>getRatings(user["Account Address"])}>Get Ratings</button>
                                    

                                   &nbsp;
                                    <label>Rate : </label>{[1, 2, 3, 4, 5].map((value) => <button className="btn btn-outline-primary btn-sm" onClick={() => rateUser(user["Account Address"],value)}>{value}</button>)}

                                </div>
                            </div>
                        </div>)
                }
            </div>

        </div>
    )
}
export default Rating