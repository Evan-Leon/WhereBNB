import * as ReviewApiUtils from '../utils/review_utils';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
})

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const fetchReviews = userId => dispatch => (
    ReviewApiUtils.fetchReviews(userId)
    .then(reviews => dispatch(receiveReviews(reviews)))
)

export const fetchReview = reviewId => dispatch => (
    ReviewApiUtils.fetchReview(reviewId)
    .then(review => dispatch(receiveReview(review)))
)

export const createReview = review => dispatch => {
    return(
    ReviewApiUtils.createReview(review)
    .then(review => dispatch(receiveReview(review))))
}

export const updateReview = review => dispatch => (
    ReviewApiUtils.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
)

export const deleteReview = reviewId => dispatch => (
    ReviewApiUtils.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)))
)