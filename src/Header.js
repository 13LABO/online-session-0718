import React from 'react';


const Header = (props) => {
	return (
		<div className={props.name}>
			<span className={`${props.name}-title`}>{props.title}</span>
		</div>
	);
}

export default Header;