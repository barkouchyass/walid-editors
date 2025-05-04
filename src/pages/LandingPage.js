import { useState } from "react";
import Slider from "react-slick"; // Import react-slick for carousel functionality
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles
import img from "../images/IMG_6241 (1).jpg";
import emailjs from "emailjs-com"; // Import EmailJS

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pack: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation stricte pour l'e-mail
    if (!formData.email || !formData.email.includes("@")) {
      alert("Veuillez entrer une adresse e-mail valide.");
      console.log("Adresse e-mail invalide :", formData.email); // Log pour déboguer
      return;
    }

    // Email to admin
    const adminTemplateParams = {
      to_email: "barkouchy1@gmail.com",
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      user_pack: formData.pack,
    };

    // Email to user
    const userTemplateParams = {
      to_email: formData.email,
      user_name: formData.name,
      user_phone: formData.phone,
      user_pack: formData.pack,
    };

    console.log("Admin email parameters:", adminTemplateParams);
    console.log("User email parameters:", userTemplateParams);

    // Send emails using EmailJS
    emailjs
      .send("service_bds8bf9", "template_5w769l5", adminTemplateParams, "-PD1kZGW2xD80FEI7")
      .then(() => {
        emailjs
          .send("service_bds8bf9", "template_xp7ixhe", userTemplateParams, "-PD1kZGW2xD80FEI7")
          .then(() => {
            setShowSuccessMessage(true); // Show success message
            setTimeout(() => setShowSuccessMessage(false), 5000); // Hide after 5 seconds
            setIsModalOpen(false);
          })
          .catch((error) => {
            console.error("Erreur lors de l'envoi de l'e-mail utilisateur :", error);
            alert("Une erreur s'est produite lors de l'envoi de l'e-mail utilisateur.");
          });
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'e-mail administrateur :", error);
        alert("Une erreur s'est produite lors de l'envoi de l'e-mail administrateur.");
      });
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg transition-opacity duration-500">
          Votre candidature a été envoyée avec succès !
        </div>
      )}

      <section className="text-center py-16 bg-gradient-to-b from-accent to-dark text-primary">
        <h1 className="text-4xl font-semibold leading-tight">
          Deviens Monteur Vidéo Pro avec <span className="font-extrabold">WPRODACADEMY</span>
        </h1>
        <p className="mt-6 text-lg max-w-3xl mx-auto">
          Forme-toi à ton rythme, depuis ton PC, avec une méthode testée et approuvée.
        </p>
        <button
          className="mt-8 bg-primary text-dark hover:bg-secondary py-3 px-6 rounded-full text-lg shadow-lg"
          onClick={handleModalToggle}
        >
          Je m’inscris maintenant
        </button>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg transform transition-transform duration-500 scale-95 opacity-0 animate-modal"
          >
            <h2 className="text-3xl font-extrabold text-center text-gradient mb-6">
              Inscription
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-secondary font-semibold mb-2" htmlFor="name">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-4 focus:ring-accent-light focus:border-transparent bg-gray-50 text-gray-800"
                  placeholder="Entrez votre nom complet"
                  required
                />
              </div>
              <div>
                <label className="block text-secondary font-semibold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-4 focus:ring-accent-light focus:border-transparent bg-gray-50 text-gray-800"
                  placeholder="Entrez votre email"
                  required
                />
              </div>
              <div>
                <label className="block text-secondary font-semibold mb-2" htmlFor="phone">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-4 focus:ring-accent-light focus:border-transparent bg-gray-50 text-gray-800"
                  placeholder="Entrez votre numéro de téléphone"
                  required
                />
              </div>
              <div>
                <label className="block text-secondary font-semibold mb-2" htmlFor="pack">
                  Choisissez un pack
                </label>
                <select
                  id="pack"
                  value={formData.pack}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-accent rounded-lg focus:outline-none focus:ring-4 focus:ring-accent-light focus:border-transparent bg-gray-50 text-gray-800"
                  required
                >
                  <option value="" disabled>
                    Sélectionnez un pack
                  </option>
                  <option value="pack 1 - Video Editing Basics">Pack 1 – Video Editing Basics</option>
                  <option value="pack 2 – Intermediate Editing Techniques">Pack 2 – Intermediate Editing Techniques</option>
                  <option value="pack 3 – Advanced Editing Techniques">Pack 3 – Advanced Editing Techniques</option>
                  <option value="pack Complet (les 3 niveaux)">Pack complet (les 3 niveaux)</option>
                  <option value="offre 1 to 1 (Coaching Premium)">Offre 1-to-1 (Coaching Premium)</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                 className="mt-8 bg-gray-300 text-gray-700 px-5 py-2 hover:bg-gray-400 rounded-full text-lg shadow-lg"
                  onClick={handleModalToggle}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                   className="mt-8 bg-primary text-dark hover:bg-secondary py-3 px-6 rounded-full text-lg shadow-lg"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modal {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-modal {
          animation: modal 0.4s ease-out forwards;
        }
        .text-gradient {
          background: linear-gradient(to right, #3b82f6, #2563eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <section id="about" className="bg-gradient-to-b from-primary via-secondary to-accent py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            À propos du Fondateur
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            Fondateur de WPRODACADEMY, <span className="font-bold text-accent">Walid Fiqhi</span> , 22 ans, est un expert en montage vidéo avec plus de 8 ans d’expérience dans le cadrage, le montage, l’étalonnage et le sound design. Il a travaillé sur une grande variété de projets : clips musicaux, vidéos publicitaires, contenus pour les réseaux sociaux, etc.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-8">
          Senior Editor, Colorist, VFX Artist et Graphic Designer, il a accompagné de nombreux monteurs à lancer leur carrière en freelance. Sa méthode d’apprentissage allie pratique, structure et maîtrise d’Adobe Premiere Pro, avec un seul objectif : te rendre indépendant financièrement grâce au montage vidéo.
          </p>
          <div className="flex flex-col items-center">
          <div className="font-bold text-accent">« Mon objectif, c’est que tu deviennes indépendant financièrement, depuis ton PC. »</div>
            <div className="text-lg font-semibold text-accent">Walid Fiqhi</div>
            
            <img
              src={img}
              alt="Walid Fiqhi"
              className="w-16 h-16 rounded-full mt-2 border-2 border-white shadow-md"
            />
          </div>
        </div>
      </section>

      <section id="avantages" className="py-16 px-6 bg-primary shadow-md">
        <h2 className="text-4xl font-bold text-center text-accent flex items-center justify-center">
          <i className="fas fa-graduation-cap mr-3"></i> Ce que tu vas apprendre chez WPRODACADEMY
        </h2>
        <ul className="mt-8 max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-accent rounded-full"></span>
            Maîtrise Adobe Premiere Pro comme un pro
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-accent rounded-full"></span>
            Développe une vraie méthodologie de montage
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-accent rounded-full"></span>
            Crée des vidéos pour les réseaux sociaux, publicités, clips, courts-métrages
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-accent rounded-full"></span>
            Ajoute du sound design, du rythme, et de la créativité à tes montages
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-accent rounded-full"></span>
            Lance-toi en freelance et génère minimum 8000 MAD/mois
          </li>
          <li className="flex items-start">
            <span className="w-2.5 h-2.5 mt-2 mr-3 bg-accent rounded-full"></span>
            Apprends les techniques qui ont aidé +150 monteurs à se lancer
          </li>
        </ul>
      </section>

      <section id="curriculum" className="py-16 px-6 bg-secondary">
        <h2 className="text-4xl font-bold text-center text-accent flex items-center justify-center">
          <i className="fas fa-layer-group mr-3"></i> Programme Structuré par Niveau
        </h2>
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
              <h3 className="text-2xl font-semibold text-accent">Pack 1 – Video Editing Basics</h3>
              <p className="mt-2 text-xl text-accent font-bold">900 MAD</p>
              <ul className="mt-4 space-y-3 text-lg text-gray-700">
                <li>🎯 Prise en main d’Adobe Premiere Pro</li>
                <li>🎯 Découpe, rythme, transitions</li>
                <li>🎯 Exportation pro pour réseaux sociaux</li>
                <li>🎯 Bonnes pratiques dès le départ</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-accent">Pack 2 – Intermediate Editing Techniques</h3>
              <p className="mt-2 text-xl text-accent font-bold">1500 MAD</p>
              <ul className="mt-4 space-y-3 text-lg text-gray-700">
                <li>🎯 Montage de Vlogs, vidéos publicitaires</li>
                <li>🎯 Vidéos pour TikTok / Reels / YouTube Shorts</li>
                <li>🎯 Raccourcis, méthodo, organisation pro</li>
                <li>🎯 Gestion de formats et templates</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-accent">Pack 3 – Advanced Editing Techniques</h3>
              <p className="mt-2 text-xl text-accent font-bold">3000 MAD</p>
              <ul className="mt-4 space-y-3 text-lg text-gray-700">
                <li>🎯 Sound Design avancé</li>
                <li>🎯 Pré-étalonnage et équilibre visuel</li>
                <li>🎯 Montage de clips musicaux</li>
                <li>🎯 Techniques de storytelling et rythme avancé</li>
              </ul>
            </div>
          </Slider>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-accent to-dark text-primary">
        <h2 className="text-4xl font-bold text-center mb-8">
          <i className="fas fa-chart-line mr-3"></i> Résultats des étudiants
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary text-accent p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold">🏆 +150</h3>
            <p className="mt-2 text-lg">Étudiants formés avec succès</p>
          </div>
          <div className="bg-primary text-accent p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold">👥 80%</h3>
            <p className="mt-2 text-lg">Ont décroché leurs premiers clients freelance</p>
          </div>
          <div className="bg-primary text-accent p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold">💸 40%</h3>
            <p className="mt-2 text-lg">Ont atteint un revenu de +8000 MAD/mois</p>
          </div>
          <div className="bg-primary text-accent p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-3xl font-bold">🌍 International</h3>
            <p className="mt-2 text-lg">
              Certains travaillent avec des boîtes, créateurs, ou depuis l’étranger
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-6 bg-primary shadow-md">
        <h2 className="text-4xl font-bold text-center text-accent mb-12 flex items-center justify-center">
          <i className="fas fa-tags mr-3"></i> Packs & Tarification : Investis dans ta carrière
        </h2>
        <div className="mt-8 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-accent mb-4">Pack complet (les 3 niveaux)</h3>
            <p className="text-base text-gray-600 mb-6">
              Économisez plus de <span className="font-bold text-accent">1800 MAD</span> en optant pour le pack complet !
            </p>
            <ul className="space-y-3 text-gray-700 text-left w-full max-w-xs">
              <li>✅ Accès à vie</li>
              <li>✅ Support 24/7</li>
              <li>✅ 2-3 séances live offertes à la fin</li>
              <li>✅ Cadeaux inclus (templates, packs, presets…)</li>
              <li>✅ Certificat délivré à la fin de chaque niveau pour valoriser ton profil</li>
            </ul>
            <p className="mt-8 text-2xl font-bold text-accent">3500 MAD</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-accent mb-4">Offre 1-to-1 (Coaching Premium)</h3>
            <p className="text-base text-gray-600 mb-6">
              Un accompagnement 100% personnalisé pour atteindre vos objectifs rapidement.
            </p>
            <ul className="space-y-3 text-gray-700 text-left w-full max-w-xs">
              <li>✅ Coaching en live 100% sur-mesure</li>
              <li>✅ Suivi de votre projet personnel</li>
              <li>✅ Accès à tous les bonus</li>
              <li>✅ Support prioritaire</li>
              <li>✅ Bilan et plan de carrière</li>
            </ul>
            <p className="mt-8 text-2xl font-bold text-accent">4000 MAD</p>
            <p className="mt-2 text-sm text-accent font-bold">Places limitées chaque mois.</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-6 bg-secondary">
        <h2 className="text-4xl font-bold text-center text-accent flex items-center justify-center">
          <i className="fas fa-comments mr-3"></i> Avis des Utilisateurs
        </h2>
        <p className="mt-4 text-center text-lg text-gray-700">
          Voici ce que nos étudiants disent de leur expérience avec WPRODACADEMY :
        </p>
        <div className="mt-8 max-w-4xl mx-auto space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              "Grâce à WPRODACADEMY, j'ai pu lancer ma carrière en freelance. Les cours sont clairs, pratiques et motivants. Merci Walid !"
            </p>
            <p className="mt-4 text-right text-accent font-bold">- Sarah B.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              "Les packs sont super bien structurés. J'ai appris à maîtriser Adobe Premiere Pro en un temps record. Je recommande à 100%."
            </p>
            <p className="mt-4 text-right text-accent font-bold">- Ahmed K.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-lg text-gray-700">
              "Une formation complète et accessible. Les conseils de Walid m'ont permis de créer des vidéos professionnelles rapidement."
            </p>
            <p className="mt-4 text-right text-accent font-bold">- Leila M.</p>
          </div>
        </div>
      </section>

      <section id="bonus" className="py-16 px-6 bg-white shadow-md">
        <h2 className="text-4xl font-bold text-center text-accent flex items-center justify-center">
          <i className="fas fa-gift mr-3"></i> Bonus & Cadeaux inclus
        </h2>
        <div className="mt-8 max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
          <p>À la fin de chaque formation, tu reçois :</p>
          <ul className="list-disc list-inside space-y-3">
            <li>Des packs pro (templates, LUTs, effets, outils)</li>
            <li>Valeur totale des bonus : 200$ à 500$ par formation</li>
            <li>Fichiers de travail professionnels</li>
            <li>Projets concrets à monter</li>
          </ul>
        </div>
      </section>

      <section id="faq" className="py-16 px-6 bg-accent">
        <h2 className="text-4xl font-bold text-center text-secondary flex items-center justify-center">
          <i className="fas fa-question-circle mr-3"></i> Questions Fréquentes (FAQ)
        </h2>
        <div className="mt-8 max-w-4xl mx-auto space-y-6 text-lg text-primary">
          <div>
            <p className="font-semibold text-secondary"> ❓Est-ce que je peux commencer même si je suis débutant ?</p>
            <p className="mt-2">Oui ! Le pack Video Editing Basics est fait pour toi.</p>
          </div>
          <div>
            <p className="font-semibold text-secondary"> ❓Est-ce que je peux payer en plusieurs fois ?</p>
            <p className="mt-2">Tu pourras bientôt payer en plusieurs fois avec nos partenaires.</p>
          </div>
          <div>
            <p className="font-semibold text-secondary"> ❓Je suis déjà monteur, est-ce que j’ai quelque chose à apprendre ?</p>
            <p className="mt-2">Bien sûr. Le niveau Advanced est là pour les monteurs qui veulent aller plus loin.</p>
          </div>
          <div>
            <p className="font-semibold text-secondary"> ❓Et si je ne comprends pas quelque chose ?</p>
            <p className="mt-2">Tu as accès au support 24/7 + des séances live offertes à la fin pour clarifier tout.</p>
          </div>
          <div>
            <p className="font-semibold text-secondary"> ❓Est-ce que c’est en français ou darija ?</p>
            <p className="mt-2">La formation est disponible en darija (version EN bientôt dispo).</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-accent flex items-center justify-center">
          <i className="fas fa-lightbulb mr-3"></i> Pourquoi cette méthode fonctionne ?
        </h2>
        <div className="mt-8 max-w-4xl mx-auto space-y-6 text-lg text-gray-700">
          <ul className=" list-inside space-y-3">
            <li><i className="fas fa-check-circle text-accent mr-3"></i>Tu avances à ton rythme</li>
            <li><i className="fas fa-check-circle text-accent mr-3"></i>Tu apprends par la pratique, pas par la théorie</li>
            <li><i className="fas fa-check-circle text-accent mr-3"></i>Tu es guidé jusqu’à devenir opérationnel en freelance</li>
            <li><i className="fas fa-check-circle text-accent mr-3"></i>Tu n’es pas seul : tu as un support H24 + séances live</li>
            <li><i className="fas fa-check-circle text-accent mr-3"></i>C’est une méthode testée par +150 monteurs marocains</li>
            <li><i className="fas fa-check-circle text-accent mr-3"></i>Tu te formes pour gagner de l’argent, pas juste apprendre</li>
          </ul>
        </div>
      </section>

      <section id="engagements" className="py-16 px-6 bg-gradient-to-b from-accent to-dark text-primary">
        <h2 className="text-4xl font-bold text-center mb-8">
          <i className="fas fa-star mr-3"></i> Ce que tu obtiens en rejoignant WPRODACADEMY
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
          <div className="bg-primary text-accent p-6 rounded-lg shadow-lg">
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent mr-3"></i>
                Accès complet au programme choisi
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent mr-3"></i>
                Accès à vie (aucune limite de temps)
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent mr-3"></i>
                Support 24h/24 pour toutes tes questions
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent mr-3"></i>
                2 à 3 séances live offertes à la fin
              </li>
            </ul>
          </div>
          <div className="bg-primary text-accent p-6 rounded-lg shadow-lg">
            <ul className="space-y-4">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent mr-3"></i>
                Accès aux cadeaux (packs, fichiers, outils)
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent mr-3"></i>
                Communauté privée entre monteurs
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-accent mr-3"></i>
                Certificat à la fin de chaque niveau
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-dark to-accent text-primary">
        <h2 className="text-4xl font-bold text-center mb-8">
          <i className="fas fa-shield-alt mr-3"></i> Garantie Satisfaction 100%
        </h2>
        <div className="max-w-4xl mx-auto bg-primary text-dark p-8 rounded-lg shadow-lg">
          <p className="text-lg mb-4">
            Teste ta formation avec <span className="font-bold">2 séances live gratuites</span>.
          </p>
          <p className="text-lg mb-4">
            Si tu n’es pas satisfait avant la <span className="font-bold">3ᵉ séance</span>, tu seras remboursé.
          </p>
          <p className="text-lg mb-4">
            Après la <span className="font-bold">3ᵉ séance</span>, aucun remboursement ne sera possible.
          </p>
          <p className="text-lg">
            <span className="font-bold">Note :</span> Les formules 1-to-1 ne sont pas incluses gratuitement.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-b from-accent to-dark text-primary">
        <h2 className="text-4xl font-bold text-center">Rejoins maintenant WPRODACADEMY !</h2>
        <p className="mt-6 text-center text-lg">
          Transforme ta passion pour le montage vidéo en une carrière réussie. Apprends à ton rythme, deviens freelance, et vis de ta créativité.
        </p>
        <div className="mt-8 text-center">
          <button
            className="bg-primary text-dark hover:bg-secondary py-3 px-6 rounded-full text-lg shadow-lg"
            onClick={handleModalToggle}
          >
            Je m’inscris maintenant
          </button>
        </div>
      </section>
    </div>
  );
}
