export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold text-blue-400 mb-6">
        Welcome to My Website
      </h1>
      <p className="text-xl text-gray-400 mb-4">
        This is the home page content.
      </p>
      <a href="/About" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
        Learn More About Me!!
      </a>
    </div>
  );
};

