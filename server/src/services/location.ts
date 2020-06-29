export interface Coords {
  lat: number;
  lon: number;
}

export interface LocationEntity {
  id: string;
  name: string;
  tideStationIds: string[];
  marineZoneId: string;
  coords: {
    lat: number;
    lon: number;
  };
  usgsSiteIds: string[];
  noaaBuoyIds: string[];
  weatherGov: {
    apiBase: string;
    stationId: string;
    radarSiteId: string;
  };
  nowcastSubdomain?: string;
  saveOurLake?: boolean;
  modisArea: string;
  windfinder: {
    slug?: string;
  };
}

const locations: LocationEntity[] = [
  {
    id: "cypremort-point",
    name: "Cypremort Point",
    tideStationIds: [
      "8765251",
      "8765148",
      "8765551",
      "8765568",
      "8764931",
      "8765026",
    ],
    marineZoneId: "GMZ435",
    coords: {
      lat: 29.731474,
      lon: -91.841371,
    },
    usgsSiteIds: ["07387040", "07387050", "073816525"],
    weatherGov: {
      apiBase: "https://api.weather.gov/gridpoints/LCH/112,73",
      stationId: "KARA",
      radarSiteId: "LCH",
    },
    nowcastSubdomain: "0",
    modisArea: "USA7",
    windfinder: { slug: "cypremort-point_vermillion-bay" },
    noaaBuoyIds: ["FRWL1", "AMRL1", "EINL1"],
  },
  {
    id: "calcasieu-lake",
    name: "Calcasieu Lake",
    tideStationIds: ["8768094", "8767961", "8767816"],
    marineZoneId: "GMZ432",
    coords: {
      lat: 29.996,
      lon: -93.3421,
    },
    usgsSiteIds: ["08017118", "08017095", "08017044"],
    weatherGov: {
      apiBase: "https://api.weather.gov/gridpoints/LCH/54,83",
      stationId: "KLCH",
      radarSiteId: "LCH",
    },
    nowcastSubdomain: "cc",
    modisArea: "USA7",
    windfinder: { slug: "calcasieu_pass" },
    noaaBuoyIds: ["CAPL1", "BKTL1"],
  },
  {
    id: "cocodrie",
    name: "Cocodrie/Dulac",
    tideStationIds: [
      "8762928",
      "8762888",
      "8762850",
      "8763206",
      "8763506",
      "8762675",
    ],
    marineZoneId: "GMZ550",
    coords: {
      lat: 29.246742,
      lon: -90.661058,
    },
    usgsSiteIds: ["073813498", "07381324", "07381328"],
    weatherGov: {
      apiBase: "https://api.weather.gov/gridpoints/LIX/47,58",
      stationId: "KHUM",
      radarSiteId: "LIX",
    },
    nowcastSubdomain: "0",
    modisArea: "USA7",
    windfinder: { slug: "tambour_bay" },
    noaaBuoyIds: [],
  },
  {
    id: "dularge",
    name: "Dularge",
    tideStationIds: [
      "8763535", // calliou lake
      "8763506", // raccoon
      "8763206", // calliou boca
      "8763719", // ship shoal
      "8762928", // cocodrie
    ],
    marineZoneId: "GMZ550",
    coords: {
      lat: 29.412207,
      lon: -90.782918,
    },
    usgsSiteIds: ["07381349", "073813498"],
    weatherGov: {
      apiBase: "https://api.weather.gov/gridpoints/LIX/42,65",
      stationId: "KHUM",
      radarSiteId: "LIX",
    },
    nowcastSubdomain: "0",
    modisArea: "USA7",
    windfinder: { slug: "caillou-lake" },
    noaaBuoyIds: ["AMRL1", "EINL1"],
  },
  {
    id: "hopedale",
    name: "Hopedale/Shell Beach",
    tideStationIds: ["8761305", "8761529", "8760742", "8761108", "8760595"],
    marineZoneId: "GMZ536",
    coords: {
      lat: 29.8203972,
      lon: -89.65689,
    },
    usgsSiteIds: [
      "073745235",
      "073745257",
      // "295206089402400", not currently producing
      "07374526",
      "07374527",
      "073745275",
    ],
    weatherGov: {
      apiBase: "https://api.weather.gov/gridpoints/LIX/85,84",
      stationId: "KNBG",
      radarSiteId: "LIX",
    },
    saveOurLake: true,
    modisArea: "USA7",
    windfinder: { slug: "shell_beach" },
    noaaBuoyIds: ["SHBL1", "42067"],
  },
  {
    id: "grand-isle",
    name: "Grand Isle",
    tideStationIds: [
      "8761724",
      "8761826",
      "8761687",
      "8761677",
      "8761742",
      "8762075",
    ],
    marineZoneId: "gmz572",
    coords: {
      lat: 29.2366,
      lon: -89.9873,
    },
    usgsSiteIds: [
      "07380249",
      "073802516",
      "291929089562600",
      "073802514",
      "073802512",
      "07380251",
    ],
    weatherGov: {
      apiBase: "https://api.weather.gov/gridpoints/LIX/73,58",
      stationId: "KGAO",
      radarSiteId: "LIX",
    },
    nowcastSubdomain: "0",
    modisArea: "USA7",
    windfinder: { slug: "grand_isle_eastern_tip" },
    noaaBuoyIds: ["GISL1", "KXPY", "42093", "LOPL1"],
  },
  {
    id: "venice",
    name: "Venice",
    tideStationIds: [
      "8760721",
      "8760736",
      "8760551",
      "8760579",
      "8760922",
      "8760959",
      "8760416",
      "8760412",
      "8760424",
      "8760841",
      "8760889",
      "8761212",
      "8760595",
    ],
    marineZoneId: "GMZ555",
    coords: {
      lat: 29.277165,
      lon: -89.3547759,
    },
    usgsSiteIds: [
      "292952089453800",
      //  "291042089153000",
      "073745258",
      "07380260",
      "07374550",
      "073745275",
      "07374527",
      // "285554089242400",
    ],
    weatherGov: {
      apiBase: "https://api.weather.gov/gridpoints/LIX/97,61",
      stationId: "KMIS",
      radarSiteId: "LIX",
    },
    modisArea: "USA7",
    saveOurLake: true,
    windfinder: { slug: "pilottown" },
    noaaBuoyIds: ["PILL1", "KDLP", "PSTL1", "BURL1", "KDLP", "KVKY"],
  },
  {
    id: "lake-ponchartrain",
    name: "Lake Ponchartrain",
    tideStationIds: [
      "8761402",
      "8761487",
      "8761927",
      "8761529",
      "TEC4445",
      "8761473",
      "8761993",
      "8762372",
      "8762483",
    ],
    marineZoneId: "GMZ530",
    coords: {
      lat: 30.0385,
      lon: -90.0264,
    },
    usgsSiteIds: [
      "301001089442600",
      "301200090072400",
      "073802332",
      "07374581",
      // "300136090064800", not producing
      // "300406090231600", not producing
      "07375230",
      "073802339",
      "073802341",
      "300703089522700",
    ],
    weatherGov: {
      apiBase: "https://api.weather.gov/gridpoints/LIX/70,93",
      stationId: "KASD",
      radarSiteId: "LIX",
    },
    modisArea: "USA7",
    saveOurLake: true,
    windfinder: { slug: "lakefront_new_orleans" },
    noaaBuoyIds: ["NWCL1", "8762484"],
  },
  {
    id: "rigolets",
    name: "Rigolets",
    tideStationIds: ["8761402", "8761487", "8761473"],
    marineZoneId: "GMZ534",
    coords: {
      lat: 30.170021,
      lon: -89.711048,
    },
    usgsSiteIds: [
      "301001089442600",
      "07374581",
      "073802332",
      "300703089522700",
    ],
    weatherGov: {
      apiBase: "https://api.weather.gov/gridpoints/LIX/82,99",
      stationId: "KASD",
      radarSiteId: "LIX",
    },
    modisArea: "USA7",
    saveOurLake: true,
    windfinder: { slug: "lake_pontchartrain_rigolets" },
    noaaBuoyIds: [],
  },
  {
    id: "lafitte",
    name: "Lafitte",
    tideStationIds: ["8761732", "8761899", "8761819"],
    marineZoneId: "",
    coords: {
      lat: 29.6669,
      lon: -90.1084,
    },
    usgsSiteIds: [
      "07380251",
      "291929089562600",
      "292800090060000",
      "07380335",
      "07380330",
      "073802516",
    ],
    weatherGov: {
      apiBase: "https://api.weather.gov/gridpoints/LIX/68,77",
      stationId: "KGAO",
      radarSiteId: "LIX",
    },
    modisArea: "USA7",
    saveOurLake: false,
    nowcastSubdomain: "0",
    windfinder: { slug: "little-lake_bay-dosgris" },
    noaaBuoyIds: [],
  },
];

// lafitte
// bay gardene
// breton island
// port fouchon
// golden meadow
// Myrtle Grove
// Happy Jack
// Isle of Pitre, Cat Island, Ship Island, and Back Bay Biloxi, Bay St. Louis.

// https://www.facebook.com/groups/154496828630117/permalink/362118351201296/

// ideas:
// show tide stations on a map
// barometric pressure
// salinity tables? not sure what that is
// river guage info - The Atchafalaya river at butte Larose is pertinent to us here on vermilion bay.

export const getAll = (): LocationEntity[] =>
  locations.sort((a, b) => a.name.localeCompare(b.name));

export const getById = (id: string): LocationEntity | undefined => {
  return locations.find((location) => location.id === id);
};

export const getDataSources = (location: LocationEntity) => ({
  tideStationIds: location.tideStationIds,
  marineZoneId: location.marineZoneId,
  usgsSiteIds: location.usgsSiteIds,
  weatherStationId: location.weatherGov.stationId,
  weatherRadarSiteId: location.weatherGov.radarSiteId,
});

export const makeCacheKey = (location: LocationEntity, key: string) => {
  return `${location.id}-${key}`;
};
