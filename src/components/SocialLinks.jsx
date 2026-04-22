import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6 text-2xl">
      <a href="#" className="hover:text-green-400 hover:scale-125 transition">
        <FaGithub />
      </a>
      <a href="#" className="hover:text-green-400 hover:scale-125 transition">
        <FaLinkedin />
      </a>
      <a href="#" className="hover:text-green-400 hover:scale-125 transition">
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialLinks;