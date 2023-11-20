const LoadingDots = () => {
  return (
    <div className="inline-flex items-center justify-center space-x-2">
      <span className="sr-only">Loading...</span>
      <div className="h-1 w-1 animate-bounce rounded-full bg-red-500 [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 animate-bounce rounded-full bg-green-500 [animation-delay:-0.15s]"></div>
      <div className="h-1 w-1 animate-bounce rounded-full bg-blue-500"></div>
    </div>
  );
};

export default LoadingDots;
