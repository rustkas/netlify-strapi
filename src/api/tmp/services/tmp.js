'use strict';

/**
 * tmp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tmp.tmp');
