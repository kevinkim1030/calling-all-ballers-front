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
          {this.props.currentUser.id === this.props.review.user_id && <Button className="delete-button" onClick={() => this.props.deleteReview(this.props.review.id)} >Delete</Button>}
        </div>
        <div>--{this.props.review.user.username}</div>
        {/* {this.props.currentUser.id === this.props.review.user_id && 
          <Modal closeIcon onClose={this.props.closeReviewModal} open={this.props.showReviewUpdateModal} trigger={<Button onClick={() => this.props.updateReview(this.props.review.id)}>Edit Review</Button>}>
            <Header icon='archive' content='Edit your Review!' />
            <Modal.Content>
              <p>
                How am I going to make this happen? CourtReviewForm is not a parent component...
              </p>
            </Modal.Content>
            <Form>
              <Form.Field>
                <label>Review</label>
                <input 
                  type="text"
                  name="content"
                  placeholder='Review'
                  // value={this.state.modalFormData.email}
                  // onChange={(e) => this.onModalFormChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label>Rating</label>
                <input 
                  type="number"
                  name="rating"
                  placeholder='Rating'
                  // value={this.state.modalFormData.username}
                  // onChange={(e) => this.onModalFormChange(e)}
                />
              </Form.Field>
              <Modal.Actions>
                <Button onClick={(e)=> this.props.closeReviewModal(e)} color='green' inverted>
                  <Icon name='checkmark' /> Edit
                </Button>
              </Modal.Actions>
              </Form>
          </Modal>} */}
        <hr></hr>
      </div>
    )
  }
}

export default ReviewCard