// # INstagram URL Helper
// Usage: `{{instagram_url}}` or `{{instagram_url author.instagram}}`
//
// Output a url for a instagram username
const { socialUrls, localUtils } = require("../services/proxy");

// We use the name instagram_url to match the helper for consistency:
module.exports = function instagram_url(username, options) {
    // eslint-disable-line camelcase
    if (!options) {
        options = username;
        username = localUtils.findKey("instagram", this, options.data.site);
    }

    if (username) {
        return socialUrls.instagram(username);
    }

    return null;
};
