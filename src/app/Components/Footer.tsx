const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Saira Asif. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a> | 
          <a href="/terms" className="text-blue-400 hover:underline"> Terms of Service</a>
        </p>
      </footer>
    );
  };
  
  export default Footer;