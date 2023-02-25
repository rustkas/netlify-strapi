const { Storage } = require("@supabase/storage");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabaseStorage = new Storage(supabaseUrl, supabaseKey);
console.log('supabaseUrl', supabaseUrl);
module.exports = supabaseStorage;