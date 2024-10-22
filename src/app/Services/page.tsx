export default function Services() {
  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-400">
        Our Services
      </h1>
      <p className="mb-12 text-center text-lg text-gray-300">
        I offer a range of services to help you create an interactive and engaging web experience. With expertise in JavaScript, TypeScript, HTML, CSS, Next.js, and React, I am here to bring your ideas to life!
      </p>
      <ul className="space-y-8">
        {/* Interactive Website Development */}
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-200">Interactive Website Development</h2>
          <p className="text-gray-400 mt-2">
            I specialize in creating dynamic, interactive websites tailored to your needs. Whether you need a personal blog or a business website, I can help you design and implement a solution that meets your requirements.
          </p>
        </li>
        {/* Custom Web Applications */}
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-200">Custom Web Applications</h2>
          <p className="text-gray-400 mt-2">
            Using the latest technologies, I can develop custom web applications that provide seamless user experiences. From concept to deployment, I will work closely with you to ensure your vision is realized.
          </p>
        </li>
        {/* Responsive Design */}
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-200">Responsive Design</h2>
          <p className="text-gray-400 mt-2">
            I create responsive designs that look great on all devices. Your website will be user-friendly and visually appealing, ensuring that visitors have a positive experience, whether they’re on a desktop, tablet, or smartphone.
          </p>
        </li>
        {/* Performance Optimization */}
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-200">Performance Optimization</h2>
          <p className="text-gray-400 mt-2">
            I optimize websites for speed and performance, ensuring fast load times and a smooth user experience. I focus on best practices for web development to keep your site running efficiently.
          </p>
        </li>
        {/* Ongoing Support and Maintenance */}
        <li className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-200">Ongoing Support and Maintenance</h2>
          <p className="text-gray-400 mt-2">
            I provide ongoing support and maintenance to keep your website up to date and running smoothly. From updates to troubleshooting, I’m here to help you every step of the way.
          </p>
        </li>
      </ul>
    </div>
  );
}
