export const uploadtoCloudinary = (e, cloudName, callback) => {
    const file = e.target.files[0];
    const upload = new Promise((resolve, reject) => {
        const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'yurieyus');
        const options = {
            method: 'POST',
            body: formData
        };
        fetch(url, options)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
    upload.then((res) => {
        callback(res.secure_url);
    });
};


export const uploadMultipleFilestoCloudinary = (e, cloudName, callback) => {
    const files = e.target.files;
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    const formData = new FormData();

    const upload = async() => {
        let secureUrls = [];
        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
            formData.append('upload_preset', 'yurieyus');
            const options = {
                method: 'POST',
                body: formData
            };
            const res = await fetch(url, options)
                .then(res => res.json())
                .catch(err => console.log(err));
            const { resource_type, secure_url, original_filename } = res;
            secureUrls.push({ resource_type, secure_url, original_filename });
        }
        return secureUrls;
    };

    upload().then((res) => { callback(res); });
};