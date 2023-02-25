'use strict';

/**
 * tmp router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::tmp.tmp');
