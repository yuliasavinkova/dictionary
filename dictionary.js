function Dictionary (elements) {
	this.elements = elements || {};
	this.hasSpecialProto = false;
	this.specialProto = undefined;
}

Dictionary.prototype.has = function(key) {
	if (key === '__proto__') {
		return this.hasSpecialProto;
	}
	return {}.hasOwnProperty.call(this.elements, key);
}

Dictionary.prototype.get = function(key) {
		if (key === '__proto__') {
		return this.specialProto;
	}
	return this.has(key) ? 
		this.elements[key] : 
		undefined;
}

Dictionary.prototype.set = function(key, val) {
	if (key === '__proto__') {
		this.hasSpecialProto = true;
		this.specialProto = val;
	} else {
		this.elements[key] = val;
	}
}

Dictionary.prototype.remove = function(key) {
	if (key === '__proto__') {
		this.hasSpecialProto = false;
		this.specialProto = undefined;
	} else {
		delete this.elements[key];
	}
}
