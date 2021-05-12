import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        
        return(
            <footer className="main-footer">
                <h3>[I AM THE FOOTER]</h3>
                <ul>
                    <li>[List o links]</li>
                </ul>
            </footer>
        )
    }
}

export default Footer;