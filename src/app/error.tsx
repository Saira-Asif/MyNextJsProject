'use client'; // This line is important for client components


export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-4xl font-bold text-red-500">Oops! Something went wrong.</h1>
      <p className="mt-4 text-lg text-gray-400">Error: {error.message}</p>
      <p className="mt-2 text-gray-500">Please try again later, or contact support if the issue persists.</p>
    </div>
  );
};