/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "i0pc4l3yb77i88v",
    "created": "2024-04-22 07:56:39.417Z",
    "updated": "2024-04-22 07:56:39.417Z",
    "name": "ostoslista",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nl7wdw48",
        "name": "nimi",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id, nimi FROM kauppalistat WHERE nimi LIKE '%ostos%';\n  \n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("i0pc4l3yb77i88v");

  return dao.deleteCollection(collection);
})
