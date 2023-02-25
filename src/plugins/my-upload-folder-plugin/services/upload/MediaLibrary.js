module.exports = {

    async afterCreate(result, data) {
      const { path } = data;
      const { model } = result;
      console.log('afterCreate','result', result);
      console.log('afterCreate','data', data);
      if (model === 'folder') {
        await supabaseStorage.from("folders").insert([{ path }]);
      } else if (model === 'file') {
        // if the created item is a file, update the parent folder's timestamp
        const { data: parentFolder, error } = await strapi
          .query('folder')
          .findOne({ id: data.folder.id });
        if (!error && parentFolder) {
          await strapi.query('folder').update(
            { updated_at: new Date() },
            { id: parentFolder.id }
          );
        }
      }
    },

    async afterUpdate(result, data) {
      const { id, path } = data;
      const { model } = result;
      if (model === 'folder') {
        const { data: folders, error } = await supabaseStorage
          .from("folders")
          .select("*")
          .eq("id", id)
          .single();
        if (!error && folders) {
          await supabaseStorage.from("folders").update({ path }).eq("id", folders.id);
        }
      } else if (model === 'file') {
        // if the updated item is a file, update the parent folder's timestamp
        const { data: parentFolder, error } = await strapi
          .query('folder')
          .findOne({ id: data.folder.id });
        if (!error && parentFolder) {
          await strapi.query('folder').update(
            { updated_at: new Date() },
            { id: parentFolder.id }
          );
        }
      }
    },

    async afterDelete(result, data) {
      const { id } = data;
      const { model } = result;
      if (model === 'folder') {
        const { data: folders, error } = await supabaseStorage
          .from("folders")
          .select("*")
          .eq("id", id)
          .single();
        if (!error && folders) {
          await supabaseStorage.from("folders").delete().eq("id", folders.id);
        }
      } else if (model === 'file') {
        // if the deleted item is a file, update the parent folder's timestamp
        const { data: parentFolder, error } = await strapi
          .query('folder')
          .findOne({ id: data.folder.id });
        if (!error && parentFolder) {
          await strapi.query('folder').update(
            { updated_at: new Date() },
            { id: parentFolder.id }
          );
        }
      }
    },

  

};