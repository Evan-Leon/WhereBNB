import React from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faIgloo  } from '@fortawesome/free-solid-svg-icons';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }



    render(){
        <a href=""></a>
        return(
            <footer className="main-footer">
                <div className="footer-logo-container">
                  <FontAwesomeIcon className="logo-footer" icon={faIgloo} size='5x' />
                    <p className='logo-footer-title'>WhereBNB</p>
                </div>
                
                <div className="link-container">
                    <a href="https://www.linkedin.com/in/evan-leon-737918211/"><i className="fab fa-linkedin"></i></a>
                    <a href="https://github.com/Evan-Leon"><i className="fab fa-github"  ></i></a>
                </div>
                {/* </ul> */}
            </footer>
        )
    }
}

export default Footer;