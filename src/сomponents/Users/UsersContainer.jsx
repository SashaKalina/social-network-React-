import React from "react";
import { connect } from 'react-redux';
import { usersAPI } from "../../api/api";
import { follow, setCurrentPage, unfollow, getUsers } from "../../redux/users-reducer";
import Users from "./Users";


class UsersContainer extends React.Component{
	
	componentDidMount(){
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	
	onPageChanged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize);
		
	}
	
	render(){
		return <Users totalUsersCount = {this.props.totalUsersCount}
					pageSize = {this.props.pageSize}
					currentPage = {this.props.currentPage}
					onPageChanged = {this.onPageChanged}
					users = {this.props.users}
					follow = {this.props.follow}
					unfollow = {this.props.unfollow}
	/> 
	}
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
    }
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setCurrentPage,
	getUsers}) 
	(UsersContainer);
