/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "y2f1wd4ppyvdptb",
    "created": "2024-04-22 08:24:36.655Z",
    "updated": "2024-04-22 08:24:36.655Z",
    "name": "kauppalistan_asiat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7kvaabqn",
        "name": "lista",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "lnfymmjpnbb7pvb",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "7igd4ifs",
        "name": "nro",
        "type": "number",
        "required": false,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "sh1rvky8",
        "name": "teksti",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": 1,
          "max": 1000,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "rdppsgp7",
        "name": "ostettu",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y2f1wd4ppyvdptb");

  return dao.deleteCollection(collection);
})
