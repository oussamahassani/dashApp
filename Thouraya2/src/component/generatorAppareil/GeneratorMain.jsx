import React from 'react'
import "./MainGenerator.scss";

export default function GeneratorMain({ data }) {
    return (
        <div>

            <div className="MainCompTransfor">
                <div className='row'>
                    <div className="col-md-9 ">
                        <div className='d-flex justify-content-between'>
                            <div className="col-md-6 d-flex justify-content-between blockboredmaingfenerator">
                                <h3>local Groupes</h3>
                                <img src="/images/immeuble.png" alt='' />
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
                            <div className="blockTwo col-md-6 blockboredmaingfenerator d-flex justify-content-between ">
                                <div>
                                    <h3>Eau De Ref</h3>
                                    <img src="/images/compteurGris.png" alt='' />
                                    {data && data.pf1}
                                </div>
                                <div>
                                    <h3>Huile</h3>
                                    <img src="/images/compteurGris.png" alt='' />
                                    {data && data.pf2}
                                </div>
                            </div>
                        </div>
                        <div className='pl-1 pr-1 ml-1 mr-1 blockboredmaingfenerator'>
                            <div className='text-center'>
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

                    <div className='col-md-3 blockboredmaingfenerator'>
                        <div className="wirless standIcon">
                            <img src="images/wireless.png" alt="" />
                            {data && data.humidity}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
