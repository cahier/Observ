function(doc) {
  if (doc.type == "utilisateurs") {
    	emit(doc._id, doc);  
    }

}