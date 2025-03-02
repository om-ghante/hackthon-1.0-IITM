//const Footer = () => {
//    return (
//      <footer className="py-8 px-4 text-center">
//        <p>&copy; 2023 Hack the Future. All rights reserved.</p>
//      </footer>
//    )
//  }
//  
//  export default Footer
  
// components/Footer.jsx
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative pt-20 pb-10 px-6 lg:px-20 overflow-hidden">
      {/* Background blur elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-700 rounded-full filter blur-3xl opacity-10 -mb-48 -ml-48"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl opacity-10 -mt-48 -mr-48"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1 - Logo and About */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 flex items-center justify-center border-2 border-white rounded-full mr-3">
                <span className="text-white font-bold transform -translate-y-0.5">HE</span>
              </div>
              <span className="text-white text-xl font-bold tracking-wide">HackEclipse</span>
            </div>
            <p className="text-white text-opacity-70 mb-6">
              Join us in shaping the future through technology, innovation, and collaboration. Our hackathon brings together brilliant minds to solve real-world challenges.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
                <a 
                  key={platform} 
                  href={`#${platform}`}
                  className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-all"
                >
                  <span className="text-white text-sm">{platform.charAt(0).toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Sponsors', 'FAQ', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-white text-opacity-70 hover:text-opacity-100 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mt-0.5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white text-opacity-70">
                  123 Madras, Madras District<br />
                  India, PO 123456
                </span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-white text-opacity-70">info@HackEclipse.com</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-white text-opacity-70">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6">Stay Updated</h3>
            <p className="text-white text-opacity-70 mb-4">
              Fllow to our social account for the latest updates, announcements, and exclusive content.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg py-3 px-4 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-60 text-sm mb-4 md:mb-0">
              © {currentYear} HackEclipse. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#terms" className="text-white text-opacity-60 text-sm hover:text-opacity-100 transition-colors">
                Terms of Service
              </a>
              <a href="#privacy" className="text-white text-opacity-60 text-sm hover:text-opacity-100 transition-colors">
                Privacy Policy
              </a>
              <a href="#cookies" className="text-white text-opacity-60 text-sm hover:text-opacity-100 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;