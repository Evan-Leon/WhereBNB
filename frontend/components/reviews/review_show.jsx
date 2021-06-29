import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faClipboardList, faHandSparkles, faStar, faMedal, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { format, formatDistanceStrict, addDays } from 'date-fns';

class ReviewShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            reviews: ''
        }
    }

    componentDidMount(){
        debugger
        this.props.fetchReviews(this.props.currentUser)
            

    }

    render(){
        debugger
        let {reviews} = this.props;

        if (!reviews) return null;
        
;        return(

                <div className="review-show-container">
                    <h1>REVIEWS</h1>
                    <li className="user-rev" ><FontAwesomeIcon className="rev-user-icon"  icon={faUserCircle}  />Name </li>
                    {Object.values(reviews).map((rev, i) =>(
                        <div key={i} className="review-show-box">
                            <div className="user-title-container">
                                        
                                        <li > {rev.body} </li>
                                        <li className="rev-date">{format(new Date(rev.createdAt),'MMMM yyyy' )}</li>
                                    </div>
                                    
                        </div>
                    ) )}
                </div>
               
            // <div className="review-container">
            //     <h3 className="review-title">  <FontAwesomeIcon icon={faStar} className="star"/> {this.props.roundRating} ({this.props.reviewNum} reviews)</h3>
            //     {/* <div className="review-box">
            //         <div className='act-review'>
            //             <h4 className="title-review"> <FontAwesomeIcon className="user-rev" icon={faUserCircle}  /> Amazing Home</h4>
            //             <p className="review-body">Loved it! Everything about it was just perfect and the host and the location were great!</p>
            //         </div>
            //     </div> */}
            //     <div className='actual-reviews'>
                    
                    
                        
            //             {
                            
            //                 Object.values(reviews).map((review, i) => (
            //                     <div className="review-display-container" key={i}>
            //                         <div className="user-title-container">
            //                             <li className="user-rev" ><FontAwesomeIcon className="rev-user-icon"  icon={faUserCircle}  />{review.guest.first_name} </li>
            //                             <li className="rev-date">{format(new Date(review.createdAt),'MMMM yyyy' )}</li>
            //                         </div>
            //                         <li > {review.body} </li>
            //                     </div>
            //                 ))
            //             }
                    
            //     </div>
            // </div>
        )
    }


}

export default ReviewShow;