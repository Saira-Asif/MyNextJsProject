export default function Portfolio (){
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-400">
        My Portfolio
      </h1>
      <p className="mb-8 text-center text-lg text-gray-300">
        Here are some of the projects I've worked on, showcasing my skills in both command-line and graphical user interface applications.
      </p>
            {/* CLI Projects Section */}
      <h2 className="text-3xl font-semibold mb-6 text-blue-300">CLI Projects</h2>
      <ul className="space-y-6 mb-12">
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-200">Calculator</h3>
          <p className="text-gray-400">
            A command-line calculator that performs basic arithmetic operations, providing a user-friendly interface for quick calculations.
          </p>
        </li>
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-200">Interactive Games</h3>
          <p className="text-gray-400">
            A collection of engaging command-line games, including trivia and puzzles, designed to challenge and entertain users.
          </p>
        </li>
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-200">BMI Calculator</h3>
          <p className="text-gray-400">
            A simple command-line tool to calculate Body Mass Index (BMI), helping users determine their weight category based on height and weight inputs.
          </p>
        </li>
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-200">Bank System</h3>
          <p className="text-gray-400">
            A command-line banking system that simulates basic banking operations such as deposits, withdrawals, and account management.
          </p>
        </li>
      </ul>
          
           {/* UI Projects Section */}
      <h2 className="text-3xl font-semibold mb-6 text-blue-300">UI Projects</h2>
      <ul className="space-y-6">
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-200">Real-Time Updating Clock Website</h3>
          <p className="text-gray-400">
            A dynamic website that displays the current time and updates automatically, providing users with real-time information at a glance.
          </p>
        </li>
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-200">ChatGPT-like Bot Website</h3>
          <p className="text-gray-400">
            An interactive web application where users can ask questions, and the bot generates responses or code snippets, simulating a conversation with an AI.
          </p>
        </li>
      </ul>
    </div>
  );
};

