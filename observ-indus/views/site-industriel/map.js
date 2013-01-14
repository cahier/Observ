function(doc) {
	if (doc.type == "site-industriel") {
    	emit(doc._id, doc);  
    }
}