const {
  instantMeiliSearch: UMDinstantMeiliSearch,
} = require('../dist/instant-meilisearch.umd')
const {
  instantMeiliSearch: CJSinstantMeiliSearch,
} = require('../dist/instant-meilisearch.cjs')

const MASTER_KEY = 'masterKey'
const HOST = process.env.MEILISEARCH_HOST || 'http://127.0.0.1:7700'

const UMDclient = UMDinstantMeiliSearch(HOST, MASTER_KEY)
const CJSclient = CJSinstantMeiliSearch(HOST, MASTER_KEY)
const instantsearch = require('instantsearch.js')

test('UMD client should correctly created', () => {
  expect(UMDclient.search).not.toBeUndefined()
})

test('CJS client should correctly created', () => {
  expect(CJSclient.search).not.toBeUndefined()
})

test('CJS instantsearch client should correctly created', () => {
  const CJSInstantSearch = instantsearch.default({
    indexName: 'cjs_index',
    searchClient: CJSclient,
  })
  expect(CJSInstantSearch.indexName).toBe('cjs_index')
  expect(CJSInstantSearch.client.search).not.toBeUndefined()
})

test('UMD instantsearch client should correctly created', () => {
  const UMDInstantSearch = instantsearch.default({
    indexName: 'umd_index',
    searchClient: UMDclient,
  })
  expect(UMDInstantSearch.indexName).toBe('umd_index')
  expect(UMDInstantSearch.client.search).not.toBeUndefined()
})
