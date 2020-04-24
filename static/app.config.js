const app_config = {
  types: {
    RB_ZBA: {
      id: 'RB_ZBA',
      text: 'ZBA',
      description: 'Zoning Board of Adjustment',
    },
    'Zoning Board of Adjustment': {
      id: 'Zoning Board of Adjustment%',
      text: 'ZBA',
      description: 'Zoning Board of Adjustment',
    },
    // RB_BBS: {
    //   id: 'RB_BBS',
    //   text: 'BBS',
    //   description: 'Board of Building Standards'
    // },
    // RB_LIRB: {
    //   id: 'RB_LIRB',
    //   text: 'LIRB',
    //   description: 'L&I Review Board of Appeals'
    // },
  }
}

// Set the app config globaly
window.appealsAppConfig = app_config;
