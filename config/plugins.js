module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'strapi-provider-upload-supabase-strage', // For community providers pass the full package name (e.g. provider: 'strapi-provider-upload-google-cloud-storage')
      providerOptions: {
        url: env("SUPABASE_URL"),
        apiKey: env("SUPABASE_KEY"),
        bucket: env("SUPABASE_BUCKET"),
        directory: env('SUPABASE_DIRECTORY'),
        bucketPrefix: env("SUPABASE_BUCKET_PREFIX")
      },
    },
  },
  
  "netlify-deployments" : {
    enabled: true,

    config: {
      webhooks: [
        {
          // webhook configuration
        },
        // More webhook configurations...
      ],
      allowedOrigins: [
        "https://app.netlify.com",
        "https://api.netlify.com",
        "http://localhost:1337", // Add your local Strapi URL here
      ],

      accessToken: "_RO6cygMaLsjv4ly3ot4WpWn_FNIk7ppuKir87FpzqI",
      sites: [
        {
          name: 'netlify-strapi',
          id: "eb72454e-f2e9-4340-bdcc-7dff4782dd38",
          buildHook: "https://api.netlify.com/build_hooks/63f9829254abe64181022804",
          branch: 'main' // optional
        }
      ],
    },
  }
});