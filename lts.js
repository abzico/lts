// manage localized text

// wrap inside function to not pollute to global state in browser
(function() {

	// definition of localized texts
	var defs = {};

	/**
	 * Get localized text from input specs.
	 * @param  {string} lang    Language key. See const-lang.js for definition.
	 * @param  {string} pageKey Top level key. Usually it's page key to differentiate each page from one another.
	 * @param  {string} textKey Text key. Individual text key to get localized text.
	 * @return {string}         Localized text in specified language. Return null if cannot find.
	 * @function get
	 */
	var get = function(lang, pageKey, textKey) {
		// check property is there and not null
		if (defs[pageKey] != null && defs[pageKey][textKey] != null) {
			return defs[pageKey][textKey][lang];
		}
		else {
			return null;
		}
	};

	/**
	 * Add a new localized text for specified specs.
	 * @param {string} lang    Languaeg key. See const-lang.js for definition.
	 * @param {string} pageKey Top level key. Usually it's page key to differentiate each page from one another.
	 * @param {string} textKey Text key. Individual text key to get localized text.
	 * @param {string} text    Text to be added.
	 * @function add
	 */
	var add = function(lang, pageKey, textKey, text) {
		// to make sure property is there before setting text value
		if (defs[pageKey] == null)
			defs[pageKey] = {};
		if (defs[pageKey][textKey] == null)
			defs[pageKey][textKey] = {};

		defs[pageKey][textKey][lang] = text;
	}

	/**
	 * Remove text from definition for specified specs.
	 * Note it will do a deep removing of such target text.
	 * @param  {string} lang    Language key. See const-lang.js for definition.
	 * @param  {string} pageKey Top level key. Usually it's page key to differentiate each page from one another.
	 * @param  {string} textKey Text key. Individual text key to get localized text.
	 * @function remove
	 */
	var remove = function(lang, pageKey, textKey) {
		if (defs[pageKey] != null && defs[pageKey][textKey] != null) {
			delete defs[pageKey][textKey][lang];
		}
	}

	/**
	 * Clear definitions.
	 * @function clear
	 */
	var clear = function() {
		defs = {};
	}

	// export module
	module.exports = {
		get: get,
		add: add,
		remove: remove,
		clear: clear
	}
}());