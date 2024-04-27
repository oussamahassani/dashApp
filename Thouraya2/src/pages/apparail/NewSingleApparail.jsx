import React, { useState } from 'react';
import Armoir from './composant/armoir'
import CompteurIoT from './composant/CompteurIoT'
import Transformteur from './composant/Transformteur'
import newRequest from "../../utils/newRequest";
import Sidebar from "../../component/sidebar/Sidebar";

export default function NewSingleApparail({ role }) {

  const [typeData, setTypeData] = useState();
  const [formData, setFormData] = useState({
    idslave: '',
    device_name: '',
    manufacturer: '',
    location: '',
    description: '',
    typeDevice: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newRequest.post('/app/add', { ...formData, device: { ...typeData } })
      .then(res => {console.log(res.data)
    
    alert("votre appareil a eté ajouter avec success")})
      .catch(err => console.log(err))
  };
  const gouvernerats = [
    'Ariana',
    'Béja',
    'Ben Arous',
    'Bizerte',
    'Gabès',
    'Gafsa',
    'Jendouba',
    'Kairouan',
    'Kasserine',
    'Kébili',
    'Le Kef',
    'Mahdia',
    'La Manouba',
    'Médenine',
    'Monastir',
    'Nabeul',
    'Sfax',
    'Sidi Bouzid',
    'Siliana',
    'Sousse',
    'Tataouine',
    'Tozeur',
    'Tunis',
    'Zaghouan'
  ];
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <form onSubmit={handleSubmit} className='p-3 m-3 '>
          <div className="form-group ">
            <label>Id Slave:</label>
            <input type="text" className="form-control" name="idslave" value={formData.idslave} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Device Name:</label>
            <input type="text" className="form-control" name="device_name" value={formData.device_name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Manufacturer:</label>
            <input type="text" className="form-control" name="manufacturer" value={formData.manufacturer} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <select  className="form-control" name="location" value={formData.location} onChange={handleChange} >
            <option value=''>Sélectionnez un gouvernorat</option>
        {gouvernerats.map((gouvernerat) => (
          <option key={gouvernerat} value={gouvernerat}>
            {gouvernerat}
          </option>
        ))}
        </select>
          </div>
          <div className="form-group">
            <label>Description:</label>
            <input type="text" className="form-control" name="description" value={formData.description} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Type Device:</label>
            <select className="form-control" name="typeDevice" value={formData.typeDevice} onChange={handleChange} >
              <option value={""}>selectioner un type de device</option>
              <option value={"armoire"}>Armoire</option>
              <option value={"groupe"}>groupe électrogène</option>
              <option value={"transformateur"}>transformateur</option>

            </select>
          </div>
          {formData.typeDevice == "armoire" ? <Armoir FormArmoir={setTypeData} /> : formData.typeDevice == "groupe" ? <CompteurIoT CompteurIoT={setTypeData} /> :
            formData.typeDevice == "transformateur" ? <Transformteur Transformteur={setTypeData} /> : ""

          }
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}


