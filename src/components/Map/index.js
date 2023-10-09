import React, { createElement, useEffect, useRef, useState } from 'react';

const Map = (
  {
    width="100%",
    height="",
    minHeight="10 rem",
    background="var(--color-brand--3)"
  }
  ) => {
  return(
    <div style={{height,minHeight,width,backgroundColor:background}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d37571.36604700241!2d69.2418148637839!3d41.29965285987481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1696863825635!5m2!1sen!2s"
        style={{border:"0"}} width="100%" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
  ) 
};

export default Map;