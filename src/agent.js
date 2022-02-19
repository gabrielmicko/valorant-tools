const AGENTS = {
  Clay_PC_C: {
    en: 'Raze',
  },
  Pandemic_PC_C: {
    en: 'Viper',
  },
  Wraith_PC_C: {
    en: 'Omen',
  },
  Hunter_PC_C: {
    en: 'Sova',
  },
  Thorne_PC_C: {
    en: 'Sage',
  },
  Phoenix_PC_C: {
    en: 'Phoenix',
  },
  Wushu_PC_C: {
    en: 'Jett',
  },
  Gumshoe_PC_C: {
    en: 'Cypher',
  },
  Sarge_PC_C: {
    en: 'Brimstone',
  },
  Breach_PC_C: {
    en: 'Breach',
  },
  Vampire_PC_C: {
    en: 'Reyna',
  },
  Killjoy_PC_C: {
    en: 'Killjoy',
  },
  Guide_PC_C: {
    en: 'Skye',
  },
  Stealth_PC_C: {
    en: 'Yoru',
  },
  Rift_PC_C: {
    en: 'Astra',
  },
  Grenadier_PC_C: {
    en: 'KAY/O',
  },
  Deadeye_PC_C: {
    en: 'Chamber',
  },
  Sprinter_PC_C: {
    en: 'Neon',
  },
};

const getAgentName = (name, lang = 'en') =>
  AGENTS.hasOwnProperty(name) ? AGENTS[name][lang] : false;

const isAgentExist = (name) => AGENTS.hasOwnProperty(name);

const getEveryAgent = (lang = 'en') =>
  Object.keys(AGENTS).map((name) => AGENTS[name][lang]);

export { AGENTS, getAgentName, isAgentExist, getEveryAgent };
