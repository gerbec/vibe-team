export type player = {
  id: number;
  name: string;
  gender?: string;
  position?: string;
  positionShort?: string;
  number?: number;
  team?: string;
  age?: number;
  height?: number;
  stats?: playerStats;
  scores?: {
    [key: string]: number;
  };
  image?: string;
  description?: string;
};

export type playerStats = {
  teamplay?: number;
  fairplay?: number;
  speed?: number;
  stamina?: number;
  defense?: number;
  accuracy?: number;
  attack?: number;
};
export type playerScores = {
  [key: string]: number;
};

export const players: player[] = [
  {
    id: 1,
    name: "Denis Ammendolea",
    position: "Forward",
    positionShort: "FW",
    team: "boca",
    gender: "M",
    age: 28,
    height: 1.8,
    number: 9,
    stats: {
      teamplay: 5,
      fairplay: 5,
      speed: 5,
      stamina: 5,
      defense: 5,
      accuracy: 5,
      attack: 5,
    },
    scores: {
      goals: 1,
      assists: 5,
      appearances: 1,
      yellowCards: 0,
      redCards: 0,
      passes: 10,
      possession: 10,
      interceptions: 10,
    },
    image: "/images/players/denis-ammendolea.png",
    description: "",
  },
  {
    id: 2,
    name: "Alejandro Gerbec",
    position: "Defender",
    positionShort: "DF",
    gender: "M",
    team: "river",
    age: 28,
    height: 1.8,
    number: 22,
    stats: {
      teamplay: 8,
      fairplay: 7,
      speed: 6,
      stamina: 6,
      defense: 9,
      accuracy: 7,
      attack: 5,
    },
    scores: {
      goals: 1,
      assists: 5,
      appearances: 1,
      yellowCards: 0,
      redCards: 0,
      passes: 10,
    },
    image: "/images/players/alejandro-gerbec.png",
    description: "",
  },
  {
    id: 3,
    name: "Paulo Romero",
    position: "Midfielder",
    gender: "M",
    positionShort: "MD",
    team: "boca",
    age: 41,
    height: 1.74,
    number: 10,
    stats: {
      teamplay: 8,
      fairplay: 8,
      speed: 5,
      stamina: 5,
      defense: 4,
      accuracy: 9,
      attack: 9,
    },
    scores: {
      goals: 5,
      assists: 3,
      appearances: 1,
      yellowCards: 0,
      redCards: 0,
      passes: 10,
    },
    image: "/images/players/paulo-romero.png",
  },
  {
    id: 4,
    name: "Gustavo Caselli",
    gender: "M",
    position: "Archer",
    team: "independiente",
    positionShort: "AR",
    age: 36,
    height: 1.7,
    number: 1,
    stats: {
      teamplay: 5,
      fairplay: 5,
      speed: 5,
      stamina: 5,
      defense: 5,
      accuracy: 5,
      attack: 5,
    },
    scores: {
      goals: 1,
      assists: 5,
      appearances: 1,
      yellowCards: 0,
      redCards: 0,
      passes: 10,
    },
    image: "/images/players/gustavo-caselli.png",
  },
  {
    id: 5,
    name: "Sol Tarantino",
    position: "Forward",
    gender: "F",
    positionShort: "FR",
    team: "river",
    age: 24,
    height: 1.58,
    number: 23,
    stats: {
      teamplay: 7,
      fairplay: 8,
      speed: 8,
      stamina: 8,
      defense: 8,
      accuracy: 5,
      attack: 5,
    },
    scores: {
      goals: 5,
      assists: 5,
      appearances: 1,
      yellowCards: 0,
      redCards: 0,
      passes: 10,
    },
    image: "/images/players/sol-tarantino.png",
  },
  {
    id: 6,
    name: "Mica Russo",
    gender: "FI",
    position: "midline",
    positionShort: "MD",
    team: "quilmes",
    age: 30,
    height: 1.6,
    number: 1,
    stats: {
      teamplay: 5,
      fairplay: 8,
      speed: 5,
      stamina: 5,
      defense: 4,
      accuracy: 5,
      attack: 5,
    },
    scores: {
      goals: 1,
      assists: 5,
      appearances: 1,
      yellowCards: 0,
      redCards: 0,
      passes: 10,
    },
    image: "/images/players/mica-russo.png",
  },
  {
    id: 7,
    name: "Maca Perez",
    gender: "F",
    position: "Forward",
    positionShort: "FL",
    team: "river",
    age: 27,
    height: 1.55,
    number: 7,
    stats: {
      teamplay: 5,
      fairplay: 7,
      speed: 5,
      stamina: 5,
      defense: 5,
      accuracy: 5,
      attack: 5,
    },
    scores: {
      goals: 1,
      assists: 5,
      appearances: 1,
      yellowCards: 0,
      redCards: 0,
      passes: 10,
    },
    image: "/images/players/maca-perez.png",
  },
  {
    id: 8,
    name: "Lau Parravicini",
    gender: "F",
    position: "Defender",
    positionShort: "DL",
    team: "talleres",
    age: 26,
    height: 1.55,
    number: 33,
    stats: {
      teamplay: 6,
      fairplay: 8,
      speed: 5,
      stamina: 4,
      defense: 5,
      accuracy: 3,
      attack: 5,
    },
    scores: {
      goals: 1,
      assists: 5,
      appearances: 1,
      yellowCards: 0,
      redCards: 1,
      passes: 10,
    },
    image: "/images/players/lau-parravicini.png",
  },
];
