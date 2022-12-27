import React, { useRef } from 'react'
import "./map.scss";

function Map(props) {
    const mapRef = useRef();
    const map = new Window.google.maps.Map(mapRef.current,{
        center:props.center,
        zoom:props.zoom,
    });

    new Window.google.maps.Marker({
        position:props.center,
        map:map,
    })
  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}>
      
    </div>
  )
}


export default Map

