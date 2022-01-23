import React, { useState, useEffect } from 'react';

import throttle from 'lodash/throttle';
import styled from 'styled-components';

import { StyledTextField, StyledPaperCardPaper, StyledClippy, StyledAccordion, StyledImageBox } from './styledcomp';
import { Typography, Autocomplete } from '@mui/material';
import { Paper, Grid, Box, Skeleton, Stack, MobileStepper, Button, Avatar } from '@mui/material';

import { Popover } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText, ListItemAvatar, ListSubheader } from '@mui/material';


import { Backdrop, CircularProgress } from '@mui/material';

import AlarmIcon from '@mui/icons-material/Alarm';
import SnoozeIcon from '@mui/icons-material/Snooze';
import ClockIcon from '@mui/icons-material/AccessTime';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ImageList, ImageListItem } from '@mui/material';


import AdapterDateFns from '@mui/lab/AdapterMoment';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker';

import { AccordionSummary, AccordionDetails } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { autoPlay } from 'react-swipeable-views-utils';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';


import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Rotate = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));



export const CardSkeleton = () => {
    return (
        <Box>
            <Stack style={{ padding: '10px' }}>
                <Skeleton variant="text" />
                <Skeleton variant="circular" width={40} height={40} />
                <Skeleton variant="rectangular" height={250} />
            </Stack>
        </Box>
    );
};

export const PaperCard = ({ children }) => {
    return (
        <StyledPaperCardPaper>
            {children}
        </StyledPaperCardPaper>
    );
};

export const Flex = ({ children, justify, align }) => {
    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent={justify || 'center'}
                    alignItems={align || 'center'} spacing={0.5}>
                    {children}
                </Grid>
            </Grid>
        </Grid>
    )
};

export const AutoComplete = ({ field_label, getOptions, setOptionValue, autoVal, isMultiple }) => {
    const [value, setValue] = React.useState(autoVal || null);
    const [inputValue, setInputValue] = React.useState('');
    const [options, setOptions] = React.useState([]);

    const getSelectedOption = (selectedId) => {
        if (isMultiple) {
            return setOptionValue(selectedId);
        }
        const selected_option = options.filter(option => option.label && option.label
            .toLowerCase()
            .includes(selectedId?.label.toLowerCase()));
        setOptionValue(selected_option[0]);
    }

    const fetch = React.useMemo(
        () =>
            throttle(async (request, callback) => {
                const opts = await getOptions({ inputValue: request.input });
                callback(opts);
            }, 600),
        [],
    );

    React.useEffect(() => {
        let active = true;

        if (inputValue === '') {
            setOptions(value ? [value] : []);
            return undefined;
        }

        fetch({ input: inputValue }, (results) => {
            if (!active) return;
            let newOptions = [];
            if (value) newOptions = [value];
            if (results) newOptions = [...newOptions, ...results];
            setOptions(newOptions);
        });

        return () => {
            active = false;
        };
    }, [value, inputValue, fetch]);

    return (
        <Autocomplete
            multiple={isMultiple}
            getOptionLabel={(option) =>
                typeof option === 'string' ? option : option.label
            }
            style={{ marginRight: '10px', color: 'white' }}
            filterOptions={(x) => x}
            options={options}
            autoComplete
            includeInputInList
            filterSelectedOptions
            value={value}
            onChange={(event, newValue) => {
                setOptions(newValue ? [newValue, ...options] : options);
                setValue(newValue);
                getSelectedOption(newValue);
            }}
            onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
            }}
            renderInput={(params) => (
                <StyledTextField {...params} label={field_label} fullWidth />
            )}
            renderOption={(props, option) => {
                return (
                    <li {...props}>
                        <Grid container alignItems="center">
                            <Grid item xs>
                                {option.label}
                            </Grid>
                        </Grid>
                    </li>
                );
            }}
        />
    );
}

export const Swipeable = ({ width, height, images, showLabels }) => {
    const theme = useTheme();
    const maxSteps = images.length;
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: width, flexGrow: 1 }}>
            {showLabels && <Paper square elevation={0}
                sx={{ display: 'flex', alignItems: 'center', height: 50, pl: 2 }}>
                <Typography>{images[activeStep].label}</Typography>
            </Paper>}
            <div style={{ maxHeight: height ? height : 'auto', margin: '10px' }}>
                <AutoPlaySwipeableViews axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents >
                    {images.map((step, index) => (
                        <div key={step.label}> {Math.abs(activeStep - index) <= 2 ? (
                            <StyledImageBox component="img" src={step.imgPath} alt={step.label} />
                        ) : null} </div>
                    ))}
                </AutoPlaySwipeableViews>
            </div>
            <MobileStepper steps={maxSteps} position="static" activeStep={activeStep}
                nextButton={<Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                    {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                </Button>}
                backButton={<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                    {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                </Button>} />
        </Box>
    );
};

export const ClipComponent = ({ left, right }) => {
    return (
        <StyledClippy>
            <div className="clippy clippy-left-content ">
                {left}
            </div>
            <div className="clippy-right-content ">
                {right}
            </div>
        </StyledClippy>
    )
};

export const AlignItemsList = ({ listHeader, listitems }) => {
    return (
        <>
            <ListSubheader style={{ borderRadius: '5px' }}>{listHeader}</ListSubheader>
            <List dense sx={{
                width: '100%', bgcolor: 'background.paper', position: 'relative',
                overflow: 'auto',
                maxHeight: 200, borderRadius: '10px', background: 'black'
            }}>
                {listitems.map((listitem) => {
                    const labelId = `checkbox-list-secondary-label-${listitem}`;
                    return (
                        <ListItem key={listitem}  >
                            <ListItemButton>
                                <ListItemAvatar>
                                    <Avatar alt={`Avatar n°${listitem + 1}`} src={`/static/images/avatar/${listitem + 1}.jpg`} />
                                </ListItemAvatar>
                                <ListItemText id={labelId} primary={`Line item ${listitem + 1}`} />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </>

    );
}

export const DateTimePickerUtil = ({ setReturnValue, isMobile, ...props }) => {
    const [value, setValue] = useState(null);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
                {!isMobile && <DateTimePicker
                    clearable
                    disableFuture={props.disableFuture || false}
                    disablePast={props.disablePast || false}
                    hideTabs
                    showTodayButton
                    todayText="now"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                        setReturnValue(newValue);
                    }}
                    components={{
                        LeftArrowIcon: AlarmIcon,
                        RightArrowIcon: SnoozeIcon,
                        OpenPickerIcon: ClockIcon,
                    }}
                    leftArrowButtonText="Open previous month"
                    rightArrowButtonText="Open next month"
                    renderInput={(params) => (
                        <StyledTextField {...params} helperText={props.helperText || null} />
                    )}
                />}
                {isMobile && <MobileDateTimePicker
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    label="With error handler"
                    onError={console.log}
                    minDate={new Date('2018-01-01T00:00')}
                    inputFormat="yyyy/MM/dd hh:mm a"
                    mask="___/__/__ __:__ _M"
                    renderInput={(params) => <StyledTextField {...params} />}
                />}
            </Stack>
        </LocalizationProvider>
    );
}

export const AccordionUtil = ({ headers, contents }) => {
    return contents.map((content, index) =>
        <StyledAccordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />} id={index}>
                <Typography style={{ paddingLeft: '20px' }}>{headers[index]}</Typography>
            </AccordionSummary>
            <AccordionDetails>{content}</AccordionDetails>
        </StyledAccordion>);
};

export const BasicPopover = ({ event, children }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        event && setAnchorEl(event.target);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        handleClick(event);
    }, [event]);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}>
            {children}
        </Popover>
    );
}

export const FullScreenDialogUtil = ({ children, openInit, setClose, ...props }) => {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        setOpen(false);
        setClose && setClose();
    };

    useEffect(() => {
        openInit && setOpen(true);
    }, [openInit]);

    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            {props.title && <AppBar sx={{ position: 'relative' }}>
                <Toolbar>
                    <IconButton edge="start" onClick={handleClose}><CloseIcon /></IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        {props.title}
                    </Typography>
                </Toolbar>
            </AppBar>}
            {!props.title && <div style={{margin: '5px'}}><IconButton edge="end" onClick={handleClose}>
                <CloseIcon />
                <Divider />
            </IconButton></div>}
            {children}
        </Dialog>
    );
}

export const ImageListUtil = ({ images, showlabel }) => {
    const imagesLength = images.length;
    const [viewImages, setViewImages] = useState(false);
    const [aspectRatios, setAspectRatios] = useState([]);
    const srcset = (image, size, rows = 1, cols = 1) => {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    return (
        <>
            <ImageList
                variant="quilted"
                style={{ cursor: 'pointer' }}
                cols={4}
                rowHeight={221}
                onClick={() => setViewImages(true)}>
                {images.map((item, index) => (
                    <ImageListItem key={item.url} cols={4 / imagesLength} rows={4 / imagesLength}>
                        <img {...srcset(item.url, 121, item.rows, item.cols)}
                            alt={item.name} loading="lazy" />
                    </ImageListItem>
                ))}
            </ImageList>
            <div style={{maxHeight: '600px'}}>
                {viewImages && <FullScreenDialogUtil openInit={viewImages} setClose={() => setViewImages(false)}>
                    <Swipeable width={'100%'} showLabels={showlabel} 
                        images={images.map((image) => ({...image, imgPath: image.url, label: image.name}))} 
                    setClose={() => setViewImages(false)}/>;
                </FullScreenDialogUtil>}
            </div>
        </>
    );
}

export const BackdropUtil = () => {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => setOpen(false);
    
    return (
        <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open} onClick={handleClose}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
