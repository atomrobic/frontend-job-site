import { useState } from 'react';

export default function ShareButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="button">
      {/* Main Share Button */}
      <button
        onClick={() => setOpen(!open)}
        className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-2 py-3  shadow-lg hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700 transition-all ease-in-out duration-300 flex items-center gap-2"
      >
        <span>Share</span>
        {/* Bootstrap Share Icon */}
        <i className="bi bi-share text-white"></i>
      </button>

      {/* Share Icons */}
      {open && (
        <div className="absolute top-0 left-full ml-60 mt-2 flex gap-4">
          {/* Twitter */}
          <a
            href="https://twitter.com/intent/tweet"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white p-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110 hover:bg-blue-600"
          >
            <i className="fab fa-twitter"></i>
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/sharer/sharer.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white p-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110 hover:bg-blue-700"
          >
            <i className="fab fa-facebook"></i>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/shareArticle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white p-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110 hover:bg-blue-800"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white p-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110 hover:bg-green-600"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white p-3 rounded-full shadow-md transform transition-transform duration-300 hover:scale-110 hover:bg-black"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      )}
    </div>
  );
}
