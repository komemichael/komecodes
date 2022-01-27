import { useState } from 'react';
import axios from "axios";

const useRequest = () => {
    const [errors, setErrors] = useState<any | null>([]);

    const runRequest = async ({url, method, body, headers}: any) => {
        setErrors([]);
        try {
            const response = await axios({
                url,
                method,
                data: body
            });
            const { data, status } = response;
            return { data, status };
        } catch (error: any) {
            setErrors(error.response.data.errors);
        }
    };
    return { runRequest, errors };
}

export default useRequest;
