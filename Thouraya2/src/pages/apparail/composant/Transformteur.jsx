import React, { useState } from 'react';

function Form({ Transformteur }) {
    const [formData, setFormData] = useState({
        marque: '',
        modèle: '',
        puissance: '',
        tensionEntrée: '',
        tensionSortie: '',
        courantSortie: '',
        poids: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        Transformteur(formData)
    };



    return (
        <div>
            <div className="form-group">
                <label>Marque:</label>
                <input type="text" className="form-control" name="marque" value={formData.marque} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Modèle:</label>
                <input type="text" className="form-control" name="modèle" value={formData.modèle} onChange={handleChange} />
            </div>
            <div className="form-group">
                <label>Puissance:</label>
                <input type="number" className="form-control" name="puissance" value={formData.puissance} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Tension d'Entrée:</label>
                <input type="number" className="form-control" name="tensionEntrée" value={formData.tensionEntrée} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Tension de Sortie:</label>
                <input type="number" className="form-control" name="tensionSortie" value={formData.tensionSortie} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Courant de Sortie:</label>
                <input type="number" className="form-control" name="courantSortie" value={formData.courantSortie} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label>Poids:</label>
                <input type="number" className="form-control" name="poids" value={formData.poids} onChange={handleChange} required />
            </div>
        </div>
    );
}

export default Form;
