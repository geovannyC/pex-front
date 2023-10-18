import treximage from "./trex.json";
import trexBrown from "./trexBrown.json";
import trexLGreen from "./trexLGreen.json";
import tiburonAzul from "./tiburonAzul.json";
import tiburonGris from "./tiburonGris.json";
import alien from "./alien.json";
import dinosaurioDomado from "./dinosaurioDomado.json";
import rana from "./rana.json";
import squeletonTrex from "./squeletonTrex.json";

export const data = [
  {
    id: 1,
    name: "Tiburon",
    status: true,
    price: 72,
    fontFamily: "woodman",
    data: {
      maxHeight: "2.40m",
      statureRange: "1.5m - 2.0m",
    },
    availableColors: [
      {
        id: 1,
        color: "#53c8d8",
        name: "blue",
      },
      {
        id: 2,
        color: "#586769",
        name: "gray",
      },
    ],
    images: [
      {
        id: 1,
        idColor: 1,
        image: tiburonAzul.tiburonAzul,
      },
      {
        id: 2,
        idColor: 2,
        image: tiburonGris.tiburonGris,
      },
    ],
  },
  {
    id: 2,
    name: "T-Rex",
    status: true,
    price: 74,
    fontFamily: "jurassicpark",
    data: {
      maxHeight: "2.30m",
      statureRange: "1.5m - 2.0m",
    },
    availableColors: [
      {
        id: 1,
        color: "#d87953",
        name: "brown",
      },
      {
        id: 2,
        color: "#d68334",
        name: "orange",
      },
      {
        id: 3,
        color: "#abd634",
        name: "green",
      },
    ],
    images: [
      {
        id: 1,
        idColor: 1,
        image: treximage.treximage,
      },
      {
        id: 2,
        idColor: 2,
        image: trexBrown.trexBrown,
      },
      {
        id: 3,
        idColor: 3,
        image: trexLGreen.trexLGreen,
      },
    ],
  },
  {
    id: 4,
    name: "Alien",
    status: true,
    price: 72,
    fontFamily: "nasalization",
    data: {
      statureRange: "1.5m - 2.0m",
    },
    availableColors: [
      {
        id: 1,
        color: "#6cd851",
        name: "green",
      },
    ],
    images: [
      {
        id: 1,
        idColor: 1,
        image: alien.alien,
      },
    ],
  },
  {
    id: 5,
    name: "Trex Domado",
    status: true,
    price: 78,
    fontFamily: "jurassicpark",
    data: {
      statureRange: "1.5m - 2.0m",
    },
    availableColors: [
      {
        id: 1,
        color: "#6cd851",
        name: "green",
      },
    ],
    images: [
      {
        id: 1,
        idColor: 1,
        image: dinosaurioDomado.dinosaurioDomado,
      },
    ],
  },
  {
    id: 6,
    name: "Trex Esqueleto",
    status: true,
    price: 80,
    fontFamily: "fear",
    data: {
      statureRange: "1.5m - 2.0m",
    },
    availableColors: [
      {
        id: 1,
        color: "#575757",
        name: "Negro",
      },
    ],
    images: [
      {
        id: 1,
        idColor: 1,
        image: squeletonTrex.squeletonTrex,
      },
    ],
  },
  {
    id: 7,
    name: "Rana",
    status: true,
    price: 78,
    fontFamily: "gutesWetter",
    data: {
      statureRange: "1.5m - 2.0m",
    },
    availableColors: [
      {
        id: 1,
        color: "#6cd851",
        name: "green",
      },
    ],
    images: [
      {
        id: 1,
        idColor: 1,
        image: rana.rana,
      },
    ],
  },
];
