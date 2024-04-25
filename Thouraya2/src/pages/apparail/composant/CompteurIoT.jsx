import React, { useState } from 'react';

function Form({ CompteurIoT }) {
    const [formData, setFormData] = useState({
        idslave: '',
        created_at: '',
        voltage1: '',
        current1: '',
        power1: '',
        frequency1: '',
        pf1: '',
        voltage2: '',
        current2: '',
        power2: '',
        frequency2: '',
        pf2: '',
        voltage3: '',
        current3: '',
        power3: '',
        frequency3: '',
        pf3: '',
        humidity: '',
        temperature: '',
        gasConcentration: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        CompteurIoT(formData)
    };



    return (
        <div>
            <div className="form-group">
                <label>idslave:</label>
                <input type="number" className="form-control" name="idslave" value={formData.idslave} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>created_at:</label>
                <input type="datetime-local" className="form-control" name="created_at" value={formData.created_at} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>voltage1:</label>
                <input type="number" className="form-control" name="voltage1" value={formData.voltage1} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>current1:</label>
                <input type="number" className="form-control" name="current1" value={formData.current1} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>power1:</label>
                <input type="number" className="form-control" name="power1" value={formData.power1} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>frequency1:</label>
                <input type="number" className="form-control" name="frequency1" value={formData.frequency1} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>pf1:</label>
                <input type="number" className="form-control" name="pf1" value={formData.pf1} onChange={handleChange} />
            </div>
            {/* Répéter les champs voltage2 à pf3 ici */}
            <div className="form-group">
                <label>humidity:</label>
                <input type="number" className="form-control" name="humidity" value={formData.humidity} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>temperature:</label>
                <input type="number" className="form-control" name="temperature" value={formData.temperature} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>gasConcentration:</label>
                <input type="number" className="form-control" name="gasConcentration" value={formData.gasConcentration} onChange={handleChange} />
            </div>

        </div>
    );
}

export default Form;
