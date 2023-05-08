function makeFoldersDb({ cockroach }) {
  return {
    createFolderInDb,
    deleteFolderFromDb,
    displayFoldersFromDb,
    updateFolderInDb,
    selectFolderByNameFromDb,
    selectFolderByProviderIdFromDb,
  };

  async function createFolderInDb({
    databaseName,
    userId,
    folderName,
    providerId,
  }) {
    try {
      let result = await cockroach.query(
        `INSERT INTO ${databaseName}.folders (folder_name, user_id, provider_id) values($1,$2, $3) RETURNING folder_id`,
        [folderName, userId, providerId]
      );
    } catch (err) {
      throw err;
    }
  }

  async function displayFoldersFromDb({ databaseName, userId }) {
    try {
      let result = await cockroach.query(
        `SELECT  folder_name FROM ${databaseName}.folders WHERE user_id = $1 `,
        [userId]
      );
      return [result.rows, "fields"];
    } catch (err) {
      throw err;
    }
  }
  async function deleteFolderFromDb({ databaseName, folderId }) {
    try {
      console.log("DATA ACCES DELETE", folderId, databaseName);
      let result = await cockroach.query(
        `DELETE FROM ${databaseName}.folders WHERE folder_id = $1`,
        [folderId]
      );
    } catch (err) {
      throw err;
    }
  }
  async function updateFolderInDb({ databaseName, folderId, folderName }) {
    try {
      let result = await cockroach.query(
        `UPDATE ${databaseName}.folders SET folder_name= $1 WHERE folder_id = $2`,
        [folderName, folderId]
      );
    } catch (err) {
      throw err;
    }
  }
  async function selectFolderByNameFromDb({
    databaseName,
    userId,
    folderName,
  }) {
    try {
      let result = await cockroach.query(
        `SELECT folder_name from ${databaseName}.folders WHERE user_id = $1 AND folder_name = $2`,
        [userId, folderName]
      );
      return [result, "fields"];
    } catch (err) {
      throw err;
    }
  }
  async function selectFolderByProviderIdFromDb({
    databaseName,
    userId,
    providerId,
  }) {
    try {
      let result = await cockroach.query(
        `SELECT folder_name, provider_id from ${databaseName}.folders WHERE user_id = $1 AND provider_id = $2`,
        [userId, providerId]
      );
      return [result, "fields"];
    } catch (err) {
      throw err;
    }
  }
}

module.exports = makeFoldersDb;
