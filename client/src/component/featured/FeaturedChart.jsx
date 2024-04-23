import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateFormData } from '../../redux/actions';
import './featuredchart.scss';

const FeaturedChart = ({ updateFormData }) => {
  const [formData, setFormData] = useState({
    state: '',
    city: '',
    address: '',
    postalCode: ''
  });

  const states = [
    'Ariana', 'Beja', 'Ben Arous', 'Bizerte', 'Gabes', 'Gafsa', 'Jendouba', 'Kairouan', 'Kasserine', 'Kebili', 'Kef', 
    'Mahdia', 'Manouba','Medenine', 'Monastir', 'Nabeul', 'Sfax', 'Sidi Bouzid', 'Siliana', 'Sousse', 'Tataouine', 
    'Tozeur', 'Tunis', 'Zaghouan' 
  ];
 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the submitted data
    console.log('Submitted data:', formData);
    // Dispatch action to update form data in Redux store
    updateFormData(formData);
  };

  return (
    <div className='featuredChart'>
      <form onSubmit={handleSubmit}>
        <div className='states'>
          <label>Gouvernorat:</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Gouvernorat : </option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className="city">
          <label htmlFor="">City : </label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder='City' />
        </div>
        <div className="address">
          <label htmlFor="">Address : </label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder='Address' />
        </div>
        <div className="postal">
          <label htmlFor="">Postal Code : </label>
          <input type="number" name="postalCode" value={formData.postalCode} onChange={handleChange} placeholder='Postal Code' />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default connect(null, { updateFormData })(FeaturedChart);
