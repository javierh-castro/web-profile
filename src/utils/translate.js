// src/utils/translate.js
const { translateFileCsv } = require("@neiderruiz/translate-files");
const documentId = '1tAzHyZY5L4HEyS7ZU322AnCpXD8iIqe1LTRk5iMGoBA';
const folderSave = './src/services/langs'


translateFileCsv(documentId, folderSave, {
    separator: '.',
})
 