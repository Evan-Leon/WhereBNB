# WhereBNB
A clone of the site www.airbnb.com/ allowing users to create an account, browse through several listings and find more details about the listings they are interested in. Users can also interact with a google maps feature to find more details about their desired listing. 

## Come for a visit at https://wherebnb-app.herokuapp.com/#/

## Technologies Used

* Ruby
* Rails
* Javascript
* React-Redux
* React
* Heroku
* CSS
* HTML

## Features

### Interactive Map Feature
Beside the list of all properties is an interactive google map which lists all properties that are registered. The user can click on the desired pin and that will bring them to that properties details page. This was done by fetching all the listings once the index page has loaded, then looping through each property and assigning it a pin based on its latitude and longitude.

![image, map_shot](https://user-images.githubusercontent.com/78226696/119146336-86e3f580-ba18-11eb-84a3-cc554160e710.png)

### Map Code Snippet
Code to add all the listings to the map, getting passed in the individual listing via props.

```js 
      componentDidMount(){
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.registerListeners();
        this.MarkerManager.updateMarkers(this.props.listings);
      } 
    ``

### Fast adapting Login and Logout dropdown

