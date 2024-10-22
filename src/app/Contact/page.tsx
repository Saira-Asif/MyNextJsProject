export default function Contact(){
  //throw new Error("Simulated error!"); //?I threw an error on this page.
  return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold text-blue-400 mb-6 text-center">
          Contact Me
        </h1>
        <p className="text-gray-300 mb-6 text-center">
          If you have any questions, feel free to reach out!
        </p>
        <form className="space-y-4">
          <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-400 mb-2">Name:</label>
          <input 
          type="text" 
          name="name" 
          required 
          className="p-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus: ring-blue-500"
          />
          </div>
          <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-400 mb-2">Email:</label>
          <input 
          type="email" 
          name="email" 
          required 
          className="p-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus: ring-blue-500"/>
          </div>
          <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-400 mb-2"> Message:</label>
          <textarea 
          name="message" 
          required
          className="p-2 bg-gray-700 rounded-lg text-white h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          </div>
          <button
           type="submit"
           className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
          Send Message
          </button>
        </form>
      </div>
      </div>
    );
  };
  

  