const useShare = ({ title, text, url }: 
    { title: string; text: string; url: string}) => {
    const shareData = { title, text, url };

    const handleShare = async () => {
        try {
            await navigator.share(shareData);
        } catch (err) {
    ('Error Sharing Data');
            console.log({ err });
        }
    };

    return { handleShare };
};

export default useShare;
