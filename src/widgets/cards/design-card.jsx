import React from "react";
import PropTypes from "prop-types";

export function DesignCard({ title, image, description, href, category }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        {category && (
          <span className="absolute top-3 left-3 bg-white/80 text-xs font-semibold text-gray-800 px-2 py-1 rounded">
            {category}
          </span>
        )}
      </div>
      <div className="p-4">
        <h5 className="font-bold mb-2">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-blue-600"
          >
            Lihat
          </a>
        )}
      </div>
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
  title: "Desain",
  description: "Deskripsi singkat desain.",
  href: "",
};

export default DesignCard;
