'use strict';

module.exports = {
  name: require('./package').name,

  contentFor(type, config) {
    if (type !== 'head') { return ''; }

    const tokens = config.originTrials && config.originTrials.tokens;

    if (!tokens) { return ''; }

    return tokens.filter(Boolean).map((token) => `<meta http-equiv="origin-trial" content="${token}">`).join("\n");
  }
};
