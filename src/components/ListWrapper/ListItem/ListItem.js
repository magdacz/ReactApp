import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';


const ListItem = ({
	name,
	description,
	image,
	twitterLink
}) => (
	<li className='listItem__wrapper'>
		<img 
			src={image}
			className ='listItem__image'
			alt={name}
		/>
		<div>
			<h2 className='listItem__name'>
				{name}
			</h2>
			<p className='listItem__description'>					{description}
			</p>
			<a href={twitterLink} 
			className ='listItem__button'
			target="_blank">visit twitter page</a>
		</div>
		
	</li>
);

ListItem.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string,
	twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
	description: 'One of the React creators'
}

export default ListItem;