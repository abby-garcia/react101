

class CommentBox extends React.Component {
  constructor(){ // we have to create an inital value.
    super(); // when you create a constructor, you must always call super()
    this.state = {
      showComments:false // here we set up the intal showComments to false
    };
  }

  render() {
    const comments = this._getComments() || [];
    return(
      <div className="comment-box">
        <h3>Comments</h3>
        {this._getPopularMessage(comments.length)}
        <h4 className="comment-count">{comments.length} comments</h4>
        <button onClick={this._handleClick.bind(this)}> Show comments </button> //create button that you will be toggling
        <div className="comment-list">
          {comments}
        </div>
      </div>
    );
  }

  _handleClick(){ //button click calls
      this.setState({
        showComments: !this.state.showComments //toggle state of showComments between true and false
      });
  }
}

  _getComments() {
    const commentList = [
      { id: 1, author: 'Clu', body: 'Just say no to love!', avatarUrl: 'images/default-avatar.png' },
      { id: 2, author: 'Anne Droid', body: 'I wanna know what love is...', avatarUrl: 'images/default-avatar.png' }
    ];

    return commentList.map((comment) => { //let's go over this part
      return (<Comment
               author={comment.author}
               body={comment.body}
               avatarUrl={comment.avatarUrl}
               key={comment.id} />);
    });
  }
}
// commentList.forEach(function(comment){
    // hello this is code

//})

class Comment extends React.Component {
  render() {
    return(
      <div className="comment">
        <img src={this.props.avatarUrl} alt={`${this.props.author}'s picture`}/>
        <p className="comment-header">
          {this.props.author}
        </p>
        <p className="comment-body">
          {this.props.body}
        </p>
        <div className="comment-actions">
          <a href="#">Delete comment</a>
        </div>
      </div>
    );
  }
}
