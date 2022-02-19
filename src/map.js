const MAPS = {
  Triad: {
    en: 'Haven',
  },
  Duality: {
    en: 'Bind',
  },
  Bonsai: {
    en: 'Split',
  },
  Ascent: {
    en: 'Ascent',
  },
  Port: {
    en: 'Icebox',
  },
  Foxtrot: {
    en: 'Breeze',
  },
  Canyon: {
    en: 'Fracture',
  },
};

const getMapName = (name, lang = 'en') =>
  MAPS.hasOwnProperty(name) ? MAPS[name][lang] : false;

const isMapExist = (name) => MAPS.hasOwnProperty(name);

const getEveryMap = (lang = 'en') => MAPS.map((map) => map[lang]);

export { MAPS, getMapName, isMapExist, getEveryMap };
