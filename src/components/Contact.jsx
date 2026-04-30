import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

function Contact() {
  const { lang } = useLanguage();

  const text = {
    id: {
      title1: "Hubungi",
      title2: "Saya",
      desc:
        "Tertarik bekerja sama atau sekadar ngobrol soal teknologi? Hubungi saya melalui media sosial di bawah ini 👇",
      location: "📍 Pinrang, Sulawesi Selatan, Indonesia",
      cardTitle: "Kirim Pesan",
      emailBtn: "Kirim via Email",
      waBtn: "Chat via WhatsApp",
      subject: "Kontak dari Portfolio",
      body: "Halo, saya tertarik dengan portfolio Anda.",
    },

    en: {
      title1: "Get In",
      title2: "Touch",
      desc:
        "Interested in working together or just discussing technology? Reach me through the social platforms below 👇",
      location: "📍 Pinrang, South Sulawesi, Indonesia",
      cardTitle: "Send Message",
      emailBtn: "Send via Email",
      waBtn: "Chat via WhatsApp",
      subject: "Contact from Portfolio",
      body: "Hello, I'm interested in your portfolio.",
    },
  };

  const t = text[lang];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {t.title1} <span className="text-green-500">{t.title2}</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mt-5 leading-relaxed max-w-md">
            {t.desc}
          </p>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            {t.location}
          </p>

          <div className="flex gap-5 mt-8 text-2xl">

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

            <a
              href="https://instagram.com/andif_12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-500 hover:scale-125 transition"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

        {/* RIGHT */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-sm">

          <h3 className="text-xl font-semibold mb-6 text-center">
            {t.cardTitle}
          </h3>

          <a
            href={`mailto:andimagfirahmaqbul@gmail.com?subject=${encodeURIComponent(
              t.subject
            )}&body=${encodeURIComponent(t.body)}`}
            className="block text-center bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
          >
            {t.emailBtn}
          </a>

          <a
            href={`https://wa.me/6285255196113?text=${encodeURIComponent(
              t.body
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center border border-green-500 text-green-500 py-3 rounded-xl hover:bg-green-500 hover:text-white transition"
          >
            {t.waBtn}
          </a>

        </div>
      </div>
    </section>
  );
}

export default Contact;