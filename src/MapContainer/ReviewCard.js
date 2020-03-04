import React from 'react'
import { Rating, Button } from 'semantic-ui-react'


class ReviewCard extends React.Component{

  render(){
    // console.log('this.props.review :', this.props.review)
    // console.log('this.props.currentUser :', this.props.currentUser)
    return(
      <div>
        <div>{this.props.review.content}
          <Rating defaultRating={this.props.review.rating} disabled icon='star' maxRating={5}/>
          {this.props.currentUser.id === this.props.review.user_id && <Button color="red" className="delete-button" onClick={() => this.props.deleteReview(this.props.review.id)} >Delete</Button>}
        </div>
        <div>--{this.props.review.user.username}</div>
        <hr></hr>
      </div>
    )
  }
}

export default ReviewCard