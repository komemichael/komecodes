import React, {useState, useEffect} from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';

export const NotificationBar = ({ notification, variant, action }) => {
    const { enqueueSnackbar } = useSnackbar();
    const [state_variant, setStateVariant] = useState(variant);

    useEffect(() => {
        if (variant !== state_variant) return setStateVariant(variant);
        notification && enqueueSnackbar(notification, 
            { variant: state_variant
                , anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left'
                }, 
                autoHideDuration: 3000,
                preventDuplicate: false,
                action: action ? action : null
            });
    }, [notification, state_variant, variant, enqueueSnackbar]);

    return (
        <React.Fragment>
        </React.Fragment>
    );
};

export const MUISnack = ({ children }) => {
    return (
        <SnackbarProvider maxSnack={4}>
            {children}
        </SnackbarProvider>
    );
};