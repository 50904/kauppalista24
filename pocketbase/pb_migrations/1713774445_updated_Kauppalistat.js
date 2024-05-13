/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnfymmjpnbb7pvb")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ilxrtk8z",
    "name": "nimi",
    "type": "text",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 1,
      "max": 100,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("lnfymmjpnbb7pvb")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
