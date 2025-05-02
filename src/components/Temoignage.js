import React from 'react';

const Temoignage = () => {
  return (
    <section className="bg-gradient-to-b from-white via-indigo-50 to-indigo-200 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Témoignage du Fondateur
          </h2>
          <p className="text-gray-700 text-base sm:text-lg italic mb-8">
            "Je crois fermement que tout le monde peut réussir dans le montage vidéo avec la bonne méthode et un peu de persévérance. 
            Mon objectif est de vous guider pas à pas pour transformer votre passion en une carrière florissante."
          </p>
          <div className="flex flex-col items-center">
            <img
              src="/path/to/walid-avatar.jpg"
              alt="Walid Fiqhi"
              className="w-20 h-20 rounded-full mt-4 border-2 border-white shadow-md"
            />
            <div className="text-lg font-semibold mt-4">Walid Fiqhi</div>
            <div className="text-sm text-gray-600">Fondateur de WPRODACADEMY</div>
          </div>
        </div>
      </section>
  );
};

export default Temoignage;