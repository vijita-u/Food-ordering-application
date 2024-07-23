import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    // Check online status through web API
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

    }, [])


    return onlineStatus;
}

export default useOnlineStatus;