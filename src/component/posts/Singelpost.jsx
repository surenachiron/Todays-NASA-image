import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import ReactLoading from 'react-loading';

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/fontawesome-free-solid";

const Singelpost = () => {

    const [getimagetoday, setimagetoday] = useState([])
    const [forloading, setforloading] = useState(false)

    let showhide = "hidden"
    if (forloading) {
        showhide = "hidden"
    } else {
        showhide = "block"
    }

    let showhidetagezafy = ""
    if (getimagetoday.length < 1) showhidetagezafy = "hidden"
    else showhidetagezafy = "block"

    const getdattapicture = async () => {
        setforloading(true);
        try {
            const { data } = await axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            setimagetoday(data)
            console.log(data, getimagetoday)
            setforloading(false)
        }
        catch {
            setforloading(false)
        }
    }

    useEffect(() => {
        getdattapicture()
    }, [])

    return (
        <Fragment>
            {forloading ? (
                <div className="flex flex-col items-center justify-center p-3" style={{ height: "89vh" }}>
                    <ReactLoading type={"spin"} color={"orange"} height={172} width={149} />
                    <h4 className="text-2xl">receiving data</h4>
                </div>)
                : <Fragment>
                    {getimagetoday.length !== 0 ?
                        <div className={`${showhide} my-3 p-3`}>

                            <div className="h-screen">
                                <h1 className="text-2xl text-center">{getimagetoday.title}</h1>

                                <div className="h-4/5 flex items-center justify-center mt-3">
                                    <img src={getimagetoday.url} className="h-full lg:w-3/5 md:w-4/5 sm:w-11/12 w-full rounded-2xl" />
                                </div>
                            </div>

                            <div className={`lg:mx-20 md:mx-10 sm:mx-4 ${showhidetagezafy}`}>
                                <h2 className="text-3xl text-red-800">photographer :{(getimagetoday.copyright !== undefined) ? <Fragment> {getimagetoday.copyright} </Fragment> : "  Telescope's"}</h2>
                                {getimagetoday ?
                                    <div className="flex my-3">
                                        <FontAwesomeIcon className="mt-1 mr-2" icon={faCalendar} color="orange" />
                                        <p>{getimagetoday.date}</p>
                                    </div> : ""}
                                <p>{getimagetoday.explanation}</p>
                            </div>

                        </div>
                        : <div className="flex items-center justify-center" style={{ height: "92vh" }}>
                            <div className="p-12 border rounded-2xl">
                                we are sorry! There is no content to display
                            </div>
                        </div>
                    }
                </Fragment>
            }
        </Fragment>
    )

}

export default Singelpost