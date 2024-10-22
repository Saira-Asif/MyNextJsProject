import Navbar from "../Components/Navbar";

export default async function About() {
 
    await new Promise((resolve) => setTimeout(resolve, 2000)); 

   return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center">
      <h1 className="text-4xl font-extrabold text-blue-400 mb-6">
        About Me
      </h1>
      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
        Hi, I'm <span className="font-semibold text-blue-600">Saira Asif</span>, a passionate IT student with a strong interest in web development. 
        Currently, I am learning modern technologies such as Next.js, Tailwind CSS, and TypeScript, 
        and I have successfully created several projects showcasing my skills.
      </p>
      <p className="text-lg text-gray-300 mb-4 leading-relaxed">
        I thrive on solving complex problems and enjoy crafting elegant, efficient code. 
        My experience includes building interactive applications and a commitment to continuous learning 
        in the ever-evolving tech landscape.
      </p>
      </div>
    </div>
  );
};
