/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lnfymmjpnbb7pvb",
    "created": "2024-04-22 07:47:33.246Z",
    "updated": "2024-04-22 07:47:33.246Z",
    "name": "Kauppalistat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ilxrtk8z",
        "name": "nimi",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 100,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "pysvibo3",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("lnfymmjpnbb7pvb");

  return dao.deleteCollection(collection);
})
