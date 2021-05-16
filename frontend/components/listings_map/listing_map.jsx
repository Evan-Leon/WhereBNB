import React from 'react';

class ListingMap extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        const mapOptions = {
            center: {lat: 100.00, lng: -100.00},
            zoom: 10
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions)
    }



    render(){


        return(
            <div id='map-container' ref="map">

            </div>
        )
    }
}

export default ListingMap;