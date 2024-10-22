export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold text-blue-500">404</h1>
      <h2 className="text-3xl mt-4 font-semibold">Page Not Found</h2>
      <p className="mt-4 text-lg text-gray-400">Sorry, the page you are looking for does not exist.</p>
      <p className="mt-2">
        You can go back to the{" "}
        <a href="/" className="text-blue-400 hover:text-blue-600 hover:underline transition duration-300">
          homepage
        </a>
        .
      </p>
    </div>
  );
};

  