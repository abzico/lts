var { lts, langs } = require('../index.js')

describe('get', function() {
	it('should get empty object at start', function() {
		expect(lts.get(langs.English, 'fake-page-key', 'fake-text-key')).toBeNull()
	})
})

describe('add', function() {
	beforeEach(function() {
		lts.clear()
	})

	it('should have a matching element after adding', function() {
		lts.add(langs.English, 'firstPage', 'firstKey', 'Hello')

		expect(lts.get(langs.English, 'firstPage', 'firstKey')).toEqual('Hello');
	})

	afterEach(function() {
		lts.clear()
	})
})

describe('remove', function() {
	beforeEach(function() {
		lts.clear()
	})

	it('should have empty element after removing', function() {
		lts.add(langs.English, 'firstPage', 'firstKey', 'Hello')
		expect(lts.get(langs.English, 'firstPage', 'firstKey')).toEqual('Hello')

		lts.remove(langs.English, 'firstPage', 'firstKey')
		expect(lts.get(langs.English, 'firstPage', 'firstKey')).toEqual(undefined)
	})
})

describe('clear', function() {
	beforeEach(function() {
		lts.clear()
	})

	it('should clear definitions thus having empty elements at the end', function() {
		lts.add(langs.English, 'firstPage', 'firstKey', 'Hello')
		expect(lts.get(langs.English, 'firstPage', 'firstKey')).toEqual('Hello')

		lts.clear()
		expect(lts.get(langs.English, 'firstPage', 'firstKey')).toBeNull()
	})
})