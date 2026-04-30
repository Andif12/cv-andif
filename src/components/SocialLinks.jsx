import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="flex gap-4 mt-6 text-2xl">

      <a
        href="https://github.com/Andif12"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-green-500 hover:scale-125 transition"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/andi-magfirah-maqbul/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-green-500 hover:scale-125 transition"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:andimagfirahmaqbul@gmail.com"
        className="text-gray-500 hover:text-green-500 hover:scale-125 transition"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}

export default SocialLinks;