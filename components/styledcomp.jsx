import { Fab, TextField, Button, IconButton, Accordion, SpeedDial, Box } from '@mui/material';
import styled from 'styled-components';

export const StyledFab = styled(Fab)`
  	&& {
		position: fixed;
		bottom: 16px;
		right: 16px;
		z-index: 1;
	}
`;

export const StyledTextField = styled(TextField)`
    &&{
        .MuiInputLabel-root, .MuiInputBase-root, .MuiOutlinedInput-root{
            color: white;
            outline: white;
            border: white;
            margin: 5px;

            & fieldset {
                border-color: white;
            }

            &:hover fieldset {
                border-color: white;
            }
            
            &.Mui-focused fieldset {
                border-color: white;
            }

            .MuiOutlinedInput-input {
                padding: 1em;
                font-size: 1em;
            }

            .Mui-disabled {
                -webkit-text-fill-color: white;
            }
        }

        input, label, fieldset, p, svg{
            fill: white;
            border-color: white;
            color: white;

            &:disabled {
                color: white;
            }
        }

        select{
            color: white;
        }

        option{
            color: black;
        }

        .Mui-disabled {
            color: white;
        }

        .MuiInputLabel-outlined {
            transform: translate(14px, 16px) scale(1);

            &.MuiInputLabel-shrink{
                transform: translate(14px, -6px) scale(0.75);
            }
        }
    }
`;

export const StyledButton = styled(Button)`
    &&{ 
        color: ${props => props.color ? 'black' : 'white'};
        text-transform: none;
        background: ${(props: any) => props.color1 ? props.color1 : props.variant !== 'outlined' ? 'black' : ''};
        padding: 5px 10px;
        margin: 5px;
        border: ${props => props.variant === 'outlined' ? '1px solid white' : ''};

        &:hover{
            background: grey;
            color: black;
        }

        &.Mui-disabled {
            color: rgba(214, 214, 214);
        }

        &.MuiButton-endIcon{
            margin-left: 4px;
        }

        .Hover {
            display: none;
            transition: display 2s linear 2s;
        }
        
        &:hover {
            .Hover {
                display: block;
            }
        }
    }
`;

export const StyledHR = styled.hr`
    color: white;
    margin: 0 0 10px 0;
`;

export const StyledIconButton = styled(IconButton)`
    &&{
        border-radius: 50%;
        padding: 10px;

        svg{
            fill: white;
        }

        .MuiSvgIcon-root{
            fill: white;
        }
    }
`;

export const StyledPaperCardPaper = styled.div`
    width: 310px;
    min-height: 300px;
    margin: 10px;

    @media (max-width: 600px) {
        width: 95%;
    }
`;

export const StyledClippy = styled.div`
    border: 0px solid transparent;
    border-radius: 10px;
    position: relative;
    margin: 10px;
    background: radial-gradient(circle at 0% 0%, #858897, #252736 75%, #1d1e26);
    height: 100%;

    .clippy {
        -webkit-clip-path: polygon(0 0, 28% 0, 54% 100%, 0% 100%);
        clip-path: polygon(0 0, 28% 0, 54% 100%, 0% 100%);
        background: black;
        border-radius: 10px;

        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }

    .clippy-left-content {
        -webkit-clip-path: polygon(0 0, 56% 0, 66% 100%, 0 100%);
        clip-path: polygon(0 0, 56% 0, 66% 100%, 0 100%);
    }
    
    .clippy-right-content {
        text-align: right;
        color: white;
        padding: 10px;
    }
`;

export const StyledAccordion = styled(Accordion)`
    &&{
        background: #1d1d1d;
        color: white;
        fill: white;
    }
`;

export const StyledSpeedDial = styled(SpeedDial)`
    &&{ 
        position: absolute;
        
        button {
            border-radius: 50%;
            background: black;
            fill: white;
            color: white;
        }
    }
`;

export const StyledImageBox = styled(Box)`
    &&{
        display: block;
        overflow: hidden;
        margin: 0 auto;
        max-width: 60vw;

        @media (max-width: 600px) {
            max-width: 100%;
        }
    }
`;