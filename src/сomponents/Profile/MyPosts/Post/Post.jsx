import React from 'react';
import s from './Post.module.css';

function Post(props) {
	return (
		<div className={s.item}>
		<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU'	/>				
			{ props.message }
			<div>
				<span>like</span> { props.like }
				</div>
		</div>
		
		
		
		)
}
export default Post;