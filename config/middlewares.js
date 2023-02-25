module.exports = ({ env }) => [
  "strapi::errors",

  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          'connect-src': ["'self'", 'http:', env("SUPABASE_URL")],
          'img-src': ["'self'", 'data:', 'blob:', , env("SUPABASE_URL"), 'https://dl.airtable.com'],
          'media-src': ["'self'", 'data:', 'blob:', env("SUPABASE_URL")],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];