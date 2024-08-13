const Footer = () => {
    return (
      <footer className="bg-senshi-dark py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-senshi-light">&copy; {new Date().getFullYear()} Senshi. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;