/**
 * ============================================================
 * GALERIE MAISON TÉRANGA EVENTS — Fichier de configuration
 * ============================================================
 * Modifiez ce fichier pour gérer les images de la galerie.
 *
 * Catégories disponibles :
 *   "mariage"     → Mariages
 *   "gala"        → Galas & Dîners
 *   "protocole"   → Protocole Officiel
 *   "corporatif"  → Événements Corporatifs
 *   "ceremonie"   → Cérémonies
 *
 * Structure d'une entrée :
 *   { src: "images/NomDuFichier.jpg", cat: "categorie", label: "Titre affiché" }
 *
 * Pour ajouter une image :
 *   1. Copiez le fichier image dans le dossier "images/"
 *   2. Ajoutez une ligne dans GALLERY_DATA ci-dessous
 *   3. Sauvegardez ce fichier
 * ============================================================
 */

const GALLERY_DATA = [
  { src: "images/im1.jpg",    cat: "ceremonie",  label: "Cérémonies" },
  { src: "images/im2.jpg",    cat: "gala",       label: "Accueil VIP" },
  { src: "images/im3.jpg",    cat: "mariage",    label: "Décoration Florale" },
  { src: "images/im4.jpg",    cat: "gala",       label: "Dîner de Gala" },
  { src: "images/im5.jpg",    cat: "corporatif", label: "Événement Corporatif" },
  { src: "images/im6.jpg",    cat: "protocole",  label: "Protocole Officiel" },
];
