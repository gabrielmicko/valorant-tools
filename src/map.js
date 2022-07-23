const MAPS = {
  Ascent: {
    en: 'Ascent',
  },
  Duality: {
    en: 'Bind',
  },
  Foxtrot: {
    en: 'Breeze',
  },
  Canyon: {
    en: 'Fracture',
  },
  Triad: {
    en: 'Haven',
  },
  Port: {
    en: 'Icebox',
  },
  Pitt: {
    en: 'Pearl',
  },
  Bonsai: {
    en: 'Split',
  },
};

const getMapName = (name, lang = 'en') =>
  MAPS.hasOwnProperty(name) ? MAPS[name][lang] : false;

const isMapExist = (name) => MAPS.hasOwnProperty(name);

const getEveryMap = (lang = 'en') =>
  Object.keys(MAPS).map((name) => MAPS[name][lang]);

export { MAPS, getMapName, isMapExist, getEveryMap };
