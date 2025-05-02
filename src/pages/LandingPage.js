import Slider from "react-slick"; // Import react-slick for carousel functionality
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles

export default function LandingPage() {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <section className="text-center py-16 bg-gradient-to-b from-indigo-600 to-purple-600 text-white">
        <h1 className="text-6xl font-extrabold leading-tight">Deviens Monteur Vidéo Pro avec WPRODACADEMY</h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Forme-toi à ton rythme, depuis ton PC, avec une méthode testée et approuvée.
        </p>
        <button className="mt-8 bg-white text-indigo-600 hover:bg-gray-100 py-3 px-6 rounded-full text-lg shadow-lg">
          Je m’inscris maintenant
        </button>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-indigo-600">À propos du Fondateur</h2>
        <div className="mt-8 max-w-4xl mx-auto text-lg text-gray-700">
          <p>
            <span className="font-bold text-purple-600">Walid Fiqhi</span>, fondateur de WPRODACADEMY, est un expert en montage vidéo avec plus de 10 ans d'expérience dans l'industrie. 
            Passionné par la créativité et l'enseignement, il a aidé des centaines d'étudiants à maîtriser les techniques de montage et à lancer leur carrière en freelance.
          </p>
          <p className="mt-4">
            Grâce à son approche pédagogique unique et à sa connaissance approfondie des outils comme Adobe Premiere Pro, Walid a créé une méthode d'apprentissage 
            qui combine théorie et pratique pour garantir des résultats concrets. Son objectif est de permettre à chacun de vivre de sa passion pour le montage vidéo.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white shadow-md">
        <h2 className="text-4xl font-bold text-center text-indigo-600">Ce que tu vas apprendre chez WPRODACADEMY</h2>
        <ul className="mt-8 max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Maîtrise Adobe Premiere Pro comme un pro
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Développe une vraie méthodologie de montage
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Crée des vidéos pour les réseaux sociaux, publicités, clips, courts-métrages
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Ajoute du sound design, du rythme, et de la créativité à tes montages
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Lance-toi en freelance et génère minimum 8000 MAD/mois
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Apprends les techniques qui ont aidé +150 monteurs à se lancer
          </li>
        </ul>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-purple-600">Programme Structuré par Niveau</h2>
        <div className="mt-8 max-w-4xl mx-auto">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600">Pack 1 – Video Editing Basics</h3>
              <p className="mt-2 text-purple-600 font-bold">900 MAD</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Prise en main d’Adobe Premiere Pro</li>
                <li>• Découpe, rythme, transitions</li>
                <li>• Exportation pro pour réseaux sociaux</li>
                <li>• Bonnes pratiques dès le départ</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600">Pack 2 – Intermediate Editing Techniques</h3>
              <p className="mt-2 text-purple-600 font-bold">1500 MAD</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Montage de Vlogs, vidéos publicitaires</li>
                <li>• Vidéos pour TikTok / Reels / YouTube Shorts</li>
                <li>• Raccourcis, méthodo, organisation pro</li>
                <li>• Gestion de formats et templates</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-indigo-600">Pack 3 – Advanced Editing Techniques</h3>
              <p className="mt-2 text-purple-600 font-bold">3000 MAD</p>
              <ul className="mt-4 space-y-2 text-sm text-gray-600">
                <li>• Sound Design avancé</li>
                <li>• Pré-étalonnage et équilibre visuel</li>
                <li>• Montage de clips musicaux</li>
                <li>• Techniques de storytelling et rythme avancé</li>
              </ul>
            </div>
          </Slider>
        </div>
      </section>

      <section className="py-16 px-6 bg-white shadow-md">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-12">Packs & Tarification : Investis dans ta carrière</h2>
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-purple-600 mb-4">Pack complet (les 3 niveaux)</h3>
            <p className="text-sm text-gray-600 mb-6">Tu économises +1800 MAD en prenant tout d’un coup !</p>
            <ul className="space-y-3 text-gray-700">
              <li>Accès à vie</li>
              <li>Support 24/7</li>
              <li>2-3 séances live offertes à la fin</li>
              <li>Cadeaux inclus (templates, packs, presets…)</li>
            </ul>
            <p className="mt-8 text-lg font-bold text-purple-600">3500 MAD seulement !</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-purple-600 mb-4">Offre 1-to-1 (Coaching Premium)</h3>
            <p className="text-sm text-gray-600 mb-6">Tu veux un accompagnement 100% personnalisé et en direct ?</p>
            <ul className="space-y-3 text-gray-700">
              <li>Coaching en live 100% sur-mesure</li>
              <li>Suivi de ton projet personnel</li>
              <li>Accès à tous les bonus</li>
              <li>Support prioritaire</li>
              <li>Bilan et plan de carrière</li>
            </ul>
            <p className="mt-8 text-lg font-bold text-purple-600">Prix : 4000 MAD</p>
            <p className="mt-2 text-sm text-gray-600 font-bold">Places limitées chaque mois.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-indigo-600">Avis des Utilisateurs</h2>
        <p className="mt-4 text-center text-lg text-gray-700">
          Voici ce que nos étudiants disent de leur expérience avec WPRODACADEMY :
        </p>
        <div className="mt-8 max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              "Grâce à WPRODACADEMY, j'ai pu lancer ma carrière en freelance. Les cours sont clairs, pratiques et motivants. Merci Walid !"
            </p>
            <p className="mt-4 text-right text-purple-600 font-bold">- Sarah B.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              "Les packs sont super bien structurés. J'ai appris à maîtriser Adobe Premiere Pro en un temps record. Je recommande à 100%."
            </p>
            <p className="mt-4 text-right text-purple-600 font-bold">- Ahmed K.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              "Une formation complète et accessible. Les conseils de Walid m'ont permis de créer des vidéos professionnelles rapidement."
            </p>
            <p className="mt-4 text-right text-purple-600 font-bold">- Leila M.</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-indigo-600">Pourquoi cette méthode fonctionne ?</h2>
        <ul className="mt-8 max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Tu avances à ton rythme
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Tu apprends par la pratique, pas par la théorie
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Tu es guidé jusqu’à devenir opérationnel en freelance
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Tu n’es pas seul : tu as un support H24 + séances live
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            C’est une méthode testée par +150 monteurs marocains
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-indigo-600 rounded-full"></span>
            Tu te formes pour gagner de l’argent, pas juste apprendre
          </li>
        </ul>
      </section>

      

      <section className="py-16 px-6 bg-gradient-to-b from-purple-600 to-indigo-600 text-white">
        <h2 className="text-4xl font-bold text-center">Rejoins maintenant WPRODACADEMY !</h2>
        <p className="mt-6 text-center text-lg">
          Tu veux changer ta vie grâce au montage vidéo ? Lance-toi aujourd’hui. Apprends à ton rythme. Deviens freelance. Sois indépendant. Vis de ta passion.
        </p>
        <div className="mt-8 text-center">
          <button className="bg-white text-purple-600 hover:bg-gray-100 py-3 px-6 rounded-full text-lg shadow-lg">
            Je m’inscris maintenant
          </button>
        </div>
      </section>
    </div>
  );
}
