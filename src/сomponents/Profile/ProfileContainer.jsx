import * as axios from "axios";
import React from 'react';
import { connect } from 'react-redux';
import { usersAPI } from "../../api/api";
import { setUserProfile } from '../../redux/profile-reducer';
import Profile from './Profile';



class ProfileContainer extends React.Component {

	componentDidMount() {
		usersAPI.getProfile()
		.then(response =>{
		this.props.setUserProfile(response.data);
				});	
	}


	render(){
	return (
		<Profile {...this.props} profile={this.props.profile}/>
		)
	}
}
let mapStateToProps =(state) => ({
	profile: state.profilePage.profile
});



export default connect(mapStateToProps,{setUserProfile}) (ProfileContainer);