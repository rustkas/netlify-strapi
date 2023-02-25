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

  'my-upload-folder-plugin': {
      enable: true,
      resolve: './src/plugins/my-upload-folder-plugin' 
    },

    // "netlify-deployments": {
    //   enabled: true,
    //   config: {
    //     accessToken: env('NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN'),
    //     sites: [
    //       {
    //         name: 'netlify-strapi',
    //         id: "eb72454e-f2e9-4340-bdcc-7dff4782dd38",
    //         buildHook: "https://api.netlify.com/build_hooks/63f9829254abe64181022804",
    //         branch: 'main' // optional
    //       }
    //     ]
    //   },
    // },
  
});