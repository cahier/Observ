function(doc) { 
	if (doc.type == "site-non-industriel") {
    	emit(doc._id, doc);
    }  
}