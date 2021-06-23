import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faClipboardList, faHandSparkles, faStar, faMedal, faUserCircle } from '@fortawesome/free-solid-svg-icons';

class ReviewDisplay extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {reviews} = this.props;

        debugger
        if (!reviews) return null;
        
        let review_num = reviews.length;
        let counter = 0;
        let ratings = reviews.forEach(review => counter += review.rating)
        let avg_rating = [counter/review_num]
        let round_rating = Math.round(avg_rating * 100)/100
;        return(
            <div className="review-container">
                <h3 className="review-title">  <FontAwesomeIcon icon={faStar} className="star"/> {round_rating} ({review_num} reviews)</h3>
                {/* <div className="review-box">
                    <div className='act-review'>
                        <h4 className="title-review"> <FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> Amazing Home</h4>
                        <p className="review-body">Loved it! Everything about it was just perfect and the host and the location were great!</p>
                    </div>
                </div> */}
                <div>
                    
                    <ul className="act-review">
                        
                        {
                            Object.values(reviews).map((review, i) => (
                                <div key={i}>
                                    <li ><FontAwesomeIcon className="user-rev" icon={faUserCircle}  />{review.guest.first_name} </li>
                                    <li > {review.body} </li>
                                </div>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }


}

export default ReviewDisplay;