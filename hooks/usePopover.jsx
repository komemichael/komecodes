import { useState } from 'react';
import Popover from '@mui/material/Popover';

const usePopover = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const element = ({ children, styles }) => (<div>
		<Popover
			id={id}
			open={open}
			anchorEl={anchorEl}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
		>
			<div style={{ ...styles }}>{children}</div>
		</Popover>
	</div>
	);

	const getElement = ({ children, styles }) => {
		return element({ children, styles });
	}

	return { getElement, handlePopoverClick: handleClick };
};

export default usePopover;
