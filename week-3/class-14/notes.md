# MongoDB
### Correr en una terminal el siguiente comando:
* ~/mongodb/bin/mongod --dbpath=/Users/moisesfernandez/data/db
### Correr en otra terminal o tab de terminal
* ~/mongodb/bin/mongo
### Para crear la base de datos
* USE DBNAME
* DBNAME.students (crea la tabla)
* db.students.insert({nombre: "Maria", matricula: 123456, apellido: "Salazar"});
* db.collection.update({_id:_}, {$set:{actualizar}.});
* db.collection.remove({_id:_});