import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex justify-center md:justify-start space-x-6">
      <a href="https://www.linkedin.com" className="text-gray-700 hover:text-indigo-600" title="LinkedIn">
        <FaLinkedin size={24} />
      </a>
      <a href="https://github.com" className="text-gray-700 hover:text-indigo-600" title="GitHub">
        <FaGithub size={24} />
      </a>
      <a href="https://twitter.com" className="text-gray-700 hover:text-indigo-600" title="Twitter">
        <FaTwitter size={24} />
      </a>
      <a href="https://instagram.com" className="text-gray-700 hover:text-indigo-600" title="Instagram">
        <FaInstagram size={24} />
      </a>
    </div>
  );
};

export default SocialIcons;
