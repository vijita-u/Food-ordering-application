import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();

  return (
    <div className="bg-black w-dvw h-dvh flex justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[3rem] font-bold text-white">
          {error.status}: {error.statusText}
        </h1>
        <p className="text-accent">{error.data}</p>
      </div>
    </div>
  );
};

export default ErrorBoundary;
