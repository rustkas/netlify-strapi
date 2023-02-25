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
    }
  
});