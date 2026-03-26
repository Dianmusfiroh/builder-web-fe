import React from "react";
import PropTypes from "prop-types";

export function DesignCard({ title, image, description, href, category }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative group">
        {href && (
          <a href={href} target="_blank" rel="noreferrer">
            <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                Lihat
              </span>
            </div>
          </a>
        )}
        {!href && (
          <img src={image} alt={title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
        )}
        {category && (
          <span className="absolute top-3 left-3 bg-white/80 text-xs font-semibold text-gray-800 px-2 py-1 rounded z-10">
            {category}
          </span>
        )}
      </div>
      {/* <div className="p-4">
        <h5 className="font-bold mb-2">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800 hover:underline transition-colors"
          >
            Lihat
          </a>
        )}
      </div> */}
    </div>
  );
}

DesignCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  description: PropTypes.string,
  href: PropTypes.string,
  category: PropTypes.string,
};

DesignCard.defaultProps = {
  // title: "Desain",
  // description: "Deskripsi singkat desain.",
  href: "",
};

export default DesignCard;
