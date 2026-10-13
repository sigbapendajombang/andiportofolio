import { useState } from "react";
import { GlobalContext } from "./GlobalContext";
import webmapLoadBigData from "../assets/webmap_load_big_data.png";
import webmapSpatialEdit from "../assets/webmap_spatial_editt.png";
import webmapSpatialQuery from "../assets/webmap_spatial_query.png";
import webmapStreetView from "../assets/webmap_street_view.png";
import webmapThematicMap from "../assets/webmap_thematic_map.png";
import lahanAppOverview from "../assets/lahan_app.png";
import esposOverview from "../assets/e-spos.png";
import spptBarcode from "../assets/scan_barcode_lokasi_sppt .png";
import spptLocation from "../assets/scan_barcode_lokasi_sppt_view .png";
import spptTaxDetails from "../assets/scan_barcode_lokasi_sppt_view_ii .png";

import tapakIjoOverview from "../assets/mobile_project_one.jpg";

import a2Labeling from "../assets/a2_labeling.png";
import a2Login from "../assets/a2_login.png";
import a2Progres from "../assets/a2_progres.png";
import a2Symbology from "../assets/a2_symbology.png";

import a3Login from "../assets/a3_login.png";
import a3Property from "../assets/a3_property.png";
import a3Analysis from "../assets/a3_analaysis.png";
import a3Pov from "../assets/a3_pov.png";
import a3Catalog from "../assets/a3_cataloglist.png";

import actEspos from "../assets/act_espos.png";
import actLahan from "../assets/act_lahan.png";
import actPdl from "../assets/act_pdl.png";
import actStuba from "../assets/act_stuba.png";
import actZonasi from "../assets/act_zonasi.png";

// GlobalProvider component
export const GlobalProvider = ({ children }) => {
  const [state, setState] = useState({
    profile: {
      name: "Andi Surya Alam",
      title:
        "Full-stack GIS Developer | Tenaga Ahli Sistem Informasi Geografis – Bapenda Jombang",
      location: "Kediri, East Java, ID",
      summary:
        "I'm a Full-stack GIS Developer with over 3 years of professional experience builds powerful web-based mapping solutions. I specialize in transforming big geospatial data into fast, interactive map applicationsp. My expertise includes handling large-scale datasets, performing complex server-side spatial queries, and architecting modern web GIS applications using the modern JavaScript frameworks and backend technologies. I create mapping solutions that are not just functional, but scalable, performant, and built to last.",
      skills: [
        {
          category: "Frontend Development",
          items: ["React", "React Native", "Ionic JS"],
        },
        { category: "Backend Development", items: ["Node.js", "Laravel"] },
        { category: "Geospatial Database", items: ["PostGIS", "PostgreSQL"] },
        { category: "GIS Tools", items: ["ArcGIS", "QGIS"] },
        { category: "DevOps", items: ["Docker", "Redis", "Git"] },
      ],
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      contact: {
        email: "andalam2@gmail.com",
        whatsapp: "+6287887961807",
        github: "https://github.com/suryaalam12",
        linkedin: "http://linkedin.com/in/andisuryaalam/",
      },
    },
    projects: [
      {
        id: 1,
        title: "SI GIT",
        category: "webmap",
        description:
          "A comprehensive web-based GIS platform for managing spatial data related to tax records. It integrates PostGIS for spatial processing and provides real-time geospatial analysis tools.",
        technologies: [
          "React",
          "Laravel",
          "PostGIS",
          "Turf.js",
          "Redis",
          "FrankenPHP",
          "Docker",
        ],
        images: [
          webmapLoadBigData,
          webmapSpatialEdit,
          webmapSpatialQuery,
          webmapThematicMap,
          webmapStreetView,
        ],
        imageTitles: [
          "Mapping tax data across Jombang",
          "Spatial data editing",
          "Spatial queries and land-value analysis",
          "Thematic tax maps",
          "Street View verification",
        ],
        imageDescriptions: [
          "SI GIT serves 306 village users, with around 3,000 GeoJSON features per village. GeoServer delivers WMS layers, while its map tile caching helps reduce repeated rendering and improve map loading performance. Redis caching, GeoJSON decompression, and FrankenPHP help manage large datasets and spikes in traffic.",
          "A dedicated editing module keeps parcel geometry and tax records aligned. PostGIS handles geometry updates, while Turf.js adjusts block boundaries after edits.",
          "GeoServer and PostGIS support spatial analysis of large geospatial datasets for land-value zoning and annual PBB tax assessments. Spatial indexes help speed up intersection queries between property parcels and land-value zones, keeping analysis efficient as the dataset grows.",
          "Google Earth Engine is used to calculate building area, supporting tax potential assessment and data collection. Data from external APIs is integrated with spatial features and visualized through thematic map symbology, helping users explore tax potential and geographic patterns.",
          "Google Street View adds on-the-ground context alongside parcel and tax data. Officers can inspect property surroundings to support verification and assessment.",
        ],
      },
      {
        id: 4,
        title: "Lahan App",
        category: "mobile",
        overviewImage: lahanAppOverview,
        storeUrl:
          "https://play.google.com/store/apps/details?id=com.makelar.app",
        description:
          "A comprehensive real estate mobile application for property listings, spatial analysis, and agent management. This project is currently in progress and features interactive property catalogs, point-of-view (POV) imagery for property visualization, and advanced spatial analysis tools to help agents and buyers make informed decisions.",
        technologies: ["Ionic", "Firebase", "Gemini", "Node.js", "React"],
        images: [a3Login, a3Property, a3Pov, a3Analysis, a3Catalog],
        imageDescriptions: [
          "A comprehensive real estate mobile application for property listings, spatial analysis, and agent management. This project is currently in progress and features interactive property catalogs, point-of-view (POV) imagery for property visualization, and advanced spatial analysis tools to help agents and buyers make informed decisions.",
          "Detailed property view displaying comprehensive information including images, specifications, pricing, and location data with interactive maps.",
          "Point-of-view (POV) feature providing immersive property visualization, allowing users to explore properties through panoramic imagery and virtual tours.",
          "Advanced spatial analysis powered by Gemini AI, leveraging Points of Interest (POI) data, heat maps for population density and activity patterns, and real-time traffic data to provide intelligent property recommendations and market insights for data-driven decision making.",
          "Comprehensive property catalog with advanced search and filtering capabilities, enabling users to browse listings by location, price range, property type, and custom criteria.",
        ],
      },
      {
        id: 3,
        title: "E-SPOS PKB",
        category: "mobile",
        overviewImage: esposOverview,
        description:
          "A field application for the validation and verification of PKB (Motor Vehicle Tax) data. This app enables officers to track vehicles in real time, supported by PBB-P2 parcel data to simplify and accelerate field surveys.",
        technologies: ["Ionic", "React", "Redis", "Node.js", "Docker"],
        images: [a2Login, a2Symbology, a2Labeling, a2Progres],
        imageDescriptions: [
          "A field application for the validation and verification of PKB (Motor Vehicle Tax) data, supported by PBB-P2 spatial data to simplify and accelerate field surveys.",
          "I integrated East Java provincial tax arrears data, allowing field surveyors to clearly view prepared address information directly within the E-SPOS PKB application.",
          "Utilizes an external PBB API to display parcel labels for each land plot, helping field surveyors quickly identify and locate PKB owner address data.",
          "To monitor field surveyors’ work progress, I developed an admin dashboard that displays task statuses and daily activity summaries. This enables better coordination and real-time operational strategy adjustments.",
        ],
      },
      {
        id: 2,
        title: "Tapak Ijo Reborn",
        category: "mobile",
        overviewImage: tapakIjoOverview,
        overviewAlt: "Tapak Ijo Reborn login, clustered map, property records, and Street View screens",
        description:
          "Tapak Ijo Reborn is a field data collection application that combines property and tax records with PostGIS spatial analysis. Leaflet clustering helps officers explore large datasets, while searchable property details and coordinate-based selection support field surveys. Google Street View provides visual context for verifying properties on the ground.",
        technologies: ["Ionic", "React", "Node.js", "PostGIS"],
        images: [],
      },
      {
        id: 5,
        title: "Barcode SPPT",
        category: "mobile",
        imageLayout: "document-and-phones",
        technologies: [
          "React",
          "Vite",
          "Node.js",
          "Express",
          "PostgreSQL",
          "PostGIS",
          "Redis",
          "Leaflet",
          "Mapbox GL JS",
          "Turf.js",
        ],
        description:
          "Barcode SPPT gives taxpayers transparent access to their property and tax information by scanning the QR code on their SPPT land and building tax notice. The mobile view lets them cross-check the mapped property location and request corrections through Bapenda's WhatsApp service if it is inaccurate, helping improve data quality and support more accurate property tax assessments. Taxpayers can also review their tax details and access the payment option, making it easier to pay their taxes.",
        overviewImage: spptBarcode,
        overviewAlt: "SPPT land and building tax notice with a QR code for checking the property location",
        overviewCaption: "Scan the barcode on the SPPT notice",
        images: [spptLocation, spptTaxDetails],
        imageTitles: [
          "Verify the property location and request corrections",
          "Review property and tax details and access payment",
        ],
      },
    ],
    activities: [
      {
        id: 1,
        image: actZonasi,
        caption: "Zonasi: Spatial analysis and land-value zoning",
        date: "February 28, 2024",
        tags: ["gis", "analytics"],
        instagramUrl:
          "https://www.instagram.com/reel/DHU5OKthRSy/?igsh=czF5NW94bmh3Ym5o",
      },
      {
        id: 2,
        image: actStuba,
        caption:
          "Hosting a study visit to share WebGIS implementation practices",
        date: "April 25, 2024",
        tags: ["teamwork", "planning", "development"],
        instagramUrl:
          "https://www.instagram.com/reel/DIscpVIB74I/?igsh=MWRiOWV3Z3h0cmY4cA==",
      },
      {
        id: 3,
        image: actEspos,
        caption:
          "ESPOS: Field survey for vehicle tax mapping and data collection",
        date: "October 13, 2025",
        tags: ["survey", "data"],
        instagramUrl:
          "https://www.instagram.com/reel/DQWgbPiAX2V/?igsh=dDZyZm9rZWJrMnU1",
      },
      {
        id: 4,
        image: actPdl,
        caption: "Tapak Ijo: On-site presentations and reporting",
        date: "August 15, 2025",
        tags: ["presentation", "reporting"],
        instagramUrl:
          "https://www.instagram.com/reel/DI0n8mkBv60/?igsh=MThqamZtenp0eXM2aA==",
      },
      {
        id: 5,
        image: actLahan,
        caption: "Lahan App: Property discovery and location analysis",
        date: "March 3, 2026",
        tags: ["mobile", "property", "analysis"],
      },
    ],
  });

  // Helper to expose state directly for simpler consumption if needed,
  // though usually we destructure state in the consumer.
  const value = {
    ...state,
    state,
    setState,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
