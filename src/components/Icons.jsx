
import { FaFacebook, FaSnapchatGhost, FaWhatsapp, FaTiktok,  FaVoicemail } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="flex justify-center space-x-8 mt-10">
      <a
        href="https://www.facebook.com/Frankamg/Shopping"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
      >
        <FaFacebook size={27} />
      </a>
      <a
        href="https://www.snapchat.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-500 hover:text-yellow-700 transition-colors duration-300"
      >
        <FaSnapchatGhost size={25} />
      </a>

      <a
        href="https://wa.me/237690461830?text=Salut!!,%20ich%20habe%20eine%20Frage!!"
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-500 hover:text-green-700 transition-colors duration-300"
      >
        <FaWhatsapp size={25} />
      </a>
      <a
        href="https://www.tiktok.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-gray-700 transition-colors duration-300"
      >
        <FaTiktok size={25} />
      </a>
    </div>
  );
};

export default Icons;
