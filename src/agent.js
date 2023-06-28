const AGENTS = {
  Rift_PC_C: {
    en: 'Astra',
  },
  Breach_PC_C: {
    en: 'Breach',
  },
  Sarge_PC_C: {
    en: 'Brimstone',
  },
  Deadeye_PC_C: {
    en: 'Chamber',
  },
  Gumshoe_PC_C: {
    en: 'Cypher',
  },
  Cable_PC_C: {
    en: 'Deadlock',
  },
  BountyHunter_PC_C: {
    en: 'Fade',
  },
  AggroBot_PC_C: {
    en: 'Harbor',
  },
  Mage_PC_C: {
    en: 'Gekko',
  },
  Wushu_PC_C: {
    en: 'Jett',
  },
  Grenadier_PC_C: {
    en: 'KAY/O',
  },
  Killjoy_PC_C: {
    en: 'Killjoy',
  },
  Sprinter_PC_C: {
    en: 'Neon',
  },
  Wraith_PC_C: {
    en: 'Omen',
  },
  Phoenix_PC_C: {
    en: 'Phoenix',
  },
  Clay_PC_C: {
    en: 'Raze',
  },
  Vampire_PC_C: {
    en: 'Reyna',
  },
  Thorne_PC_C: {
    en: 'Sage',
  },
  Guide_PC_C: {
    en: 'Skye',
  },
  Hunter_PC_C: {
    en: 'Sova',
  },
  Pandemic_PC_C: {
    en: 'Viper',
  },
  Stealth_PC_C: {
    en: 'Yoru',
  },
};

const getAgentName = (name, lang = 'en') =>
  AGENTS.hasOwnProperty(name) ? AGENTS[name][lang] : false;

const isAgentExist = (name) => AGENTS.hasOwnProperty(name);

const getEveryAgent = (lang = 'en') =>
  Object.keys(AGENTS).map((name) => AGENTS[name][lang]);

export { AGENTS, getAgentName, isAgentExist, getEveryAgent };
