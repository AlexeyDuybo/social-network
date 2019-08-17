import React from "react";
import FriendsList from "./FriendsList";
import { compose } from "redux";
import { connect } from "react-redux";
import { getFriends } from "../../store/friendsList/reducer";
import { requestFriends, clearFriends } from "../../store/friendsList/action";
import  withUserId from "../../HOC/withUserId";
class FriendsListContainer extends React.Component {

    componentDidMount(){
        this.props.requestFriends(this.props.userId);
    }

    componentWillUnmount(){
        this.props.clearFriends();
    }

    render(){
        return <FriendsList friends={this.props.friends} />
    }


}

const mapStateToProps = state => (
    {
        friends: getFriends(state)
    }
)

export default compose(
    withUserId, 
    connect(mapStateToProps, { requestFriends, clearFriends }) 
)(FriendsListContainer);