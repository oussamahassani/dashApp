import React from 'react'

export default function GeneratorMain({ data }) {
    return (
        <div>GeneratorMain


            <div className="MainCompTransfor">
                <div className="contenuMain">
                    <div className="blockOne">
                        <h1>Recouvrir</h1>
                        <div className="oil standIcon">
                            <img src="images/oil.png" alt="" />
                            <p>0.00 °C</p>
                        </div>
                        <div className="temp standIcon">
                            <img src="images/temp.png" alt="" />
                            <p>0.00 °C</p>
                        </div>
                        <div className="wirless standIcon">
                            <img src="images/wireless.png" alt="" />
                            <div className="on">
                                <span></span>
                                <p>ON</p>
                            </div>
                        </div>
                    </div>
                    <div className="blockTwo">
                        <h1>local transfo</h1>
                    </div>
                    <div className="blockThree">
                        <h1>Centra de mesure</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
