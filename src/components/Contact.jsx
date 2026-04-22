import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-gray-950">

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT - INFO */}
        <div>
          <h2 className="text-3xl font-bold text-green-500 mb-4">
            Get In Touch
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Tertarik bekerja sama atau sekadar ngobrol soal teknologi?
            Hubungi saya melalui Media Sosisial di bawah ini 👇
          </p>

          <div className="space-y-3 text-gray-600 dark:text-gray-400">

            <p>📍 Pinrang, South Sulawesi, Indonesia</p>

          </div>

          {/* SOCIAL ICON */}
          <div className="flex gap-5 mt-6 text-xl">

            <a
              href="https://github.com/Andif12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-green-500 hover:scale-125 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/andi-magfirah-maqbul/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-green-500 hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:andifff12@gmail.com"
              className="text-gray-500 dark:text-gray-400 hover:text-green-500 hover:scale-125 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://instagram.com/andif_12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-400 hover:text-green-500 hover:scale-125 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT - CTA */}
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col justify-center">

          <h3 className="text-lg font-semibold mb-4 text-center">
            Kirim Pesan
          </h3>

          <a
            href="mailto:andifff12@gmail.com?subject=Kontak%20dari%20Portfolio&body=Halo%."
            className="block text-center bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Kirim via Email
          </a>

          {/* OPTIONAL WA BUTTON */}
          <a
            href="https://wa.me/6285255196113?text=Halo%20Andi,%20saya%20tertarik%20dengan%20portfolio%20Anda"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center border border-green-500 text-green-500 py-3 rounded-lg hover:bg-green-500 hover:text-white transition"
          >
            Chat via WhatsApp
          </a>

        </div>

      </div>
    </div>
  );
}

export default Contact;