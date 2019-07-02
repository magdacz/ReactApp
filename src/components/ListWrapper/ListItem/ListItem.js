import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';


const ListItem = ({
	name,
	description,
	image,
	twitterLink
}) => {
	
	const ImageTag = image ? 'img' : 'div';
	
	return (
		<li className={styles.wrapper}>
			<ImageTag 
				src={image}
				className ={image ? styles.image : styles.imageNone}
				alt={name}
			/>
			<div>
				<h2 className={styles.name}>
					{name}
				</h2>
				<p className={styles.description}>					{description}
				</p>
				<a href={twitterLink} 
				className ={styles.button}
				target="_blank"
				rel="noopener noreferrer">visit twitter page</a>
			</div>

		</li>
	)
};

ListItem.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string,
	twitterLink: PropTypes.string.isRequired,
};

ListItem.defaultProps = {
	description: 'One of the React creators',
	image: null,
}

export default ListItem;