import React from 'react';
import { connect } from 'react-redux';
import './map.scss';

const Map = ({ formData }) => {
  // Access the localization data from props
  const { state, city, address } = formData;
  console.log("comes from reducer ", state, city)

  // Now you have the necessary data to render the map based on the address, city, postal code, etc.
  // You can use this data to fetch the map from a mapping service like Google Maps, Mapbox, etc.

  return (
    <div className='map'>
      {/* Render the map here using the localization data */}
      {/* Example: You can use an iframe to embed a map from Google Maps */}
      {/* Make sure to sanitize and validate the input before using it in the URL */}
      <iframe
        title='map'
        width='100%'
        height='450'
        frameBorder='0'
        scrolling='no'
        marginHeight='0'
        marginWidth='0'
        src={`https://www.google.com/maps/embed/v1/place?q=${address},${city},${state}&key=AIzaSyBWpWG3Wo-8pVMPcYXQXC7Zg7G2jBqlhGw`}
      ></iframe>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // Map the necessary state to props
  formData: state.formData, // Assuming formData is the reducer where the form data is stored
});

export default connect(mapStateToProps)(Map);
