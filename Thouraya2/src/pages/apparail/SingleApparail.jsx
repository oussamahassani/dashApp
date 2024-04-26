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
        <div>SingleApparail</div>
        <div>
          {devices && <>
            <span>name device : {devices.name}</span>
            <span>type device : {devices.device_type}</span>
            <span> localtion : {devices.location}</span>

            <div>
              {devices.typeDevice == "armoire" ? <DetailMonArmoire data={relationDevice} /> : formData.typeDevice == "groupe" ? <GeneratorAppareil data={relationDevice} /> :
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
