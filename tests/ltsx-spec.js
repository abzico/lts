var { ltsx, langs } = require('../index.js')

describe('get', function() {
	it('should get empty object at start', function() {
		expect(ltsx.get(langs.English, 'fake-page-key', 'fake-text-key')).toBeNull()
	})
})

describe('add', function() {
	beforeEach(function() {
		ltsx.clear()
	})

	it('should have a matching element after adding', function() {
		ltsx.add(langs.English, 'firstPage', 'firstKey', 'Hello')

		expect(ltsx.get(langs.English, 'firstPage', 'firstKey')).toEqual('Hello');
	})

	afterEach(function() {
		ltsx.clear()
	})
})

describe('remove', function() {
	beforeEach(function() {
		ltsx.clear()
	})

	it('should have empty element after removing', function() {
		ltsx.add(langs.English, 'firstPage', 'firstKey', 'Hello')
		expect(ltsx.get(langs.English, 'firstPage', 'firstKey')).toEqual('Hello')

		ltsx.remove(langs.English, 'firstPage', 'firstKey')
		expect(ltsx.get(langs.English, 'firstPage', 'firstKey')).toEqual(undefined)
	})
})

describe('clear', function() {
	beforeEach(function() {
		ltsx.clear()
	})

	it('should clear definitions thus having empty elements at the end', function() {
		ltsx.add(langs.English, 'firstPage', 'firstKey', 'Hello')
		expect(ltsx.get(langs.English, 'firstPage', 'firstKey')).toEqual('Hello')

		ltsx.clear()
		expect(ltsx.get(langs.English, 'firstPage', 'firstKey')).toBeNull()
	})
})