import React from 'react'
import "./MainGenerator.scss";

export default function GeneratorMain({ data }) {
    return (
        <div>

            <div className="MainCompTransfor">
                <div className="'d-flex align-items-center flex-column justify-content-center ">
                    <div className='d-flex justify-content-between'>
                    <div className="col-md-7 d-flex justify-content-between">
                        <img src="/images/immeuble.png" alt=''/>
                        <div>
                        <div className="">
                            <img src="images/oil.png" alt="" />
                            <p>  {data && data.voltage1} °C</p>
                        </div>
                        <div className="">
                            <img src="images/temp.png" alt="" />
                            <p>{data && data.current1} °C</p>
                        </div>
                        <div className="">
                            <img src="images/wireless.png" alt="" />
                            <p>{data && data.power1} °C</p>

                        </div>
                        </div>
                    </div>
                    <div className="blockTwo col-md-5">
                    <img src="/images/compteurGris.png" alt=''/>
                    {data && data.pf1}
                    <img src="/images/compteurGris.png" alt=''/>
                    {data && data.pf2}
                    </div>
                    </div>
               <div className='pl-5 pr-5 ml-5 mr-5'>
                <div className="blockOnegenerator">
                        <div className="oil standIcon">
                            <img src="images/oil.png" alt="" />
                            <p>{data && data.frequency3} °C</p>
                        </div>
                        <div className="temp standIcon">
                            <img src="images/temp.png" alt="" />
                            <p> {data && data.temperature}</p>
                        </div>
                        <div className="wirless standIcon">
                            <img src="images/wireless.png" alt="" />
                            {data && data.humidity}
                        </div>
                    </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
