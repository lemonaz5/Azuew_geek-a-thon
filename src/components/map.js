import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
    width: '30%',
    height: '30%'
  }

export class MapContainer extends React.Component {
  constructor(props){
    super(props);
  }


  
    render() {
        return (
          <Map google={this.props.google}
          style={style}
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
          zoom={15}
          onClick={this.onMapClicked}
          zoom={14}>
    
            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
    
            {/* <InfoWindow onClose={this.onInfoWindowClose}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow> */}
          </Map>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBV3AK9H93LfNYSB5Ax3MMRvmlqEmiZKXA")
  })(MapContainer)