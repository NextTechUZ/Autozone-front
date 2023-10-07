import React, { createElement, useEffect, useRef, useState } from 'react';

const Map = (
  {
    width="100%",
    height="100%",
    maxHeight="100%",
    background="var(--color-brand--3)"
  }
  ) => {
    // let [state,setState]=useState({})
    // useEffect(()=>{
    //   const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };
    //   setState({...state,defaultProps})
    // },[])
  return(
    <div style={{height,maxHeight,width,backgroundColor:background}}>
      Map
    {/* <GoogleMapReact
      bootstrapURLKeys={{ key: "" }}
      defaultCenter={state.defaultProps?.center}
      defaultZoom={state.defaultProps?.zoom}
    >
      
    </GoogleMapReact> */}
  </div>
  ) 
};

export default Map;