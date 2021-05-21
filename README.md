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
```

### Fast adapting Login and Logout dropdown
A quick and responsive dropdown users toolbar allows user to either signup or login, via modal, or continue as a demo user on one click. Thanks to the nature of React-Redux once the user has completed their action, the state of the app will be changed to reflect the users decision, which causes a re-render of the component and a quick responsive update to the interface. The user can see this change in real time, without refreshing, as well as logout in the same manner. 

![image, users dropdown](https://user-images.githubusercontent.com/78226696/119150465-79c90580-ba1c-11eb-8fcc-e96055a01ad0.png)

### Dropdown Code Snippet
Code that on click, either pops out a modal to login or sign up, or allows the user to, in one click, sign in as the demo user.
```js
      navSessionLinks = () =>(
        <div className="login-signup-dropdown">
                <ul className="login-buttons">
                    <li onClick={() => this.props.openModal('login')}>Login</li>
                    <li onClick={() => this.props.openModal('signup')}>Signup</li>
                    <li onClick={() => this.props.login(this.props.demoUser)}>Demo User</li>
                </ul>
        </div>
    )
```
## Future Directions
* Add booking functionality
* Add hover states on map pins
* Have search and filter functionality for listings

