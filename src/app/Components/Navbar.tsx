import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-blue-800 p-4 shadow-lg">
      <nav className="flex justify-center space-x-6">
        <Link href="/" className="hover:text-blue-300 transition-colors">Home</Link>
        <Link href="/About"className="hover:text-blue-300 transition-colors">About</Link>
        <Link href="/Contact" className="hover:text-blue-300 transition-colors">Contact</Link>
        <Link href="/Portfolio" className="hover:text-blue-300 transition-colors">Portfolio</Link>
        <Link href="/Services" className="hover:text-blue-300 transition-colors">Services</Link>
      </nav>
    </header>
  );
};

export default Navbar;
