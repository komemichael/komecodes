import * as React from 'react';

import styled from 'styled-components'
import { Backdrop, Box, Modal, Fade } from '@mui/material';

export const MUIBox = styled(Box)`
	margin: ${(props: any) => props.margin ? `${props.margin}vh auto`: `5vh auto`};
	padding: 20px;
	width: 800px;
	height: auto;
	background: #292929;
	border-radius: 10px;
	box-shadow: 24px;

	@media (max-width: 800px) {
		width: 100%;
	}
`;

export const Scroll = styled.div`
	overflow-y: scroll;
	overflow-x: hidden;
	max-height: 85vh;
	width: 100%;
`;

const TransitionsModal = ({children, open, margin, handleClose}) => {
	return (
		<div >
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<Fade in={open}>
					<MUIBox margin={margin}>
						<Scroll> {children}</Scroll>
					</MUIBox>
				</Fade>
			</Modal>
		</div>
	);
}

export { TransitionsModal };