import React from 'react'
import Sidebar from "../../component/sidebar/Sidebar";
import newRequest from "../../utils/newRequest";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Detailstranform from "./composant/Detailstranform"
import DetailMonArmoire from "./composant/DetailMonArmoire"
import GeneratorAppareil from '../../component/generatorAppareil/Genrator'
export default function SingleApparail() {
  const [devices, setDvices] = useState(null);
  const [relationDevice, setRelationDevice] = useState(null);

  let { appId } = useParams();

  useEffect(() => {
    newRequest.get(`/app/${appId}`)
      .then(res => {
        const devices = res.data.devices
        const relationDevice = res.data.relationDevice
        setDvices(devices)
        setRelationDevice(relationDevice)
      })
      .catch(err => console.log(err))

    return () => {

    }
  }, [setDvices, setRelationDevice])
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div></div>
        <div>
          {devices && <>
            <p><span className='text-danger'>type device : </span> {devices.typeDevice}</p>
            <p><span className='text-danger'> localtion :</span>  {devices.location}</p>

            <div>
              {devices.typeDevice == "armoire" ? <DetailMonArmoire data={relationDevice} /> : devices.typeDevice == "groupe" ? <GeneratorAppareil data={relationDevice} /> :
                devices.typeDevice == "transformateur" ? <Detailstranform data={relationDevice} /> : ""

              }
            </div>
          </>

          }
        </div>

        { }
      </div>
    </div>
  )
}
