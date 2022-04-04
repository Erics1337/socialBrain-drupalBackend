import React from "react"
import PropTypes from "prop-types"

const YoutubeEmbed = ({ embedId }) => (
	<div className='pb-5 pl-10 overflow-hidden'>
		<iframe
			width='560'
			height='315'
			src='https://www.youtube.com/embed/zZF6vXMGBOw'
			title='YouTube video player'
			frameBorder='0'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
			allowFullScreen></iframe>
	</div>
)

YoutubeEmbed.propTypes = {
	embedId: PropTypes.string.isRequired,
}

export default YoutubeEmbed
