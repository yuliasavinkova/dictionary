function Dictionary (elements) {
	this.elements = elements || {};
}

Dictionary.prototype.has = function(key) {
	return {}.hasOwnProperty.call(this.elements, key);
}

Dictionary.prototype.get = function(key) {
	return this.has(key) ? 
		this.elements[key] : 
		undefined;
}

Dictionary.prototype.set = function(key, val) {
	this.elements[key] = val;
}

Dictionary.prototype.remove = function(key) {
	delete this.elements[key];
}
