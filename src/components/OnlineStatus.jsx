import useOnlineStatus from "../utils/useOnlineStatus";

const OnlineStatus = () => {
  const onlineStatus = useOnlineStatus();

  return (
    <>
      {onlineStatus ? (
        <div className="text-green-600 absolute top-0 left-0 text-[10px] px-4 bg-[#fee4e2]">
          Connected 🟢
        </div>
      ) : (
        <div className="text-red-600 absolute top-0 left-0 text-[10px] px-4 bg-[#fee4e2]">
          Offline 🔴
        </div>
      )}
    </>
  );
};

export default OnlineStatus;
