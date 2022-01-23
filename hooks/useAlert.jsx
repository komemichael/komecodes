import { useState } from 'react';
import { MUISnack, NotificationBar } from '../components/alerts';

const useAlert = () => {
    const [alert, setAlert] = useState<any | null>(null);

    const showAlert = (message, variant) => {
        setAlert({ message, variant });
        setTimeout(function () {
            setAlert(null);
        }, 3000);
    };

    const alertComponent = () => {
        return alert && <MUISnack>
            <NotificationBar notification={alert.message} variant={alert.variant} />
        </MUISnack>
    }

    return {showAlert, alertComponent};
}

export default useAlert;
