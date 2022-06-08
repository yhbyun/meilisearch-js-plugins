import { instantMeiliSearch } from '../src'
import {
  dataset,
  Movies,
  meilisearchClient,
  HOST,
  MASTER_KEY,
} from './assets/utils'

describe('Pagination browser test', () => {
  beforeAll(async () => {
    const deleteTask = await meilisearchClient.deleteIndex('movies')
    await meilisearchClient.waitForTask(deleteTask.uid)
    await meilisearchClient
      .index('movies')
      .updateFilterableAttributes(['genres'])
    const documentsTask = await meilisearchClient
      .index('movies')
      .addDocuments(dataset)
    await meilisearchClient.index('movies').waitForTask(documentsTask.uid)
  })

  test('Test placeholdersearch set to false', async () => {
    const customClient = instantMeiliSearch(HOST, MASTER_KEY, {
      paginationTotalHits: 5,
      placeholderSearch: true,
    })
    const response = await customClient.search<Movies>([
      {
        indexName: 'movies',
      },
    ])
    const hits = response.results[0].hits
    expect(hits.length).toBe(5)
  })

  test('Test placeholdersearch set to true', async () => {
    const customClient = instantMeiliSearch(HOST, MASTER_KEY, {
      paginationTotalHits: 5,
      placeholderSearch: false,
    })
    const response = await customClient.search<Movies>([
      {
        indexName: 'movies',
      },
    ])
    const hits = response.results[0].hits
    expect(hits.length).toBe(0)
  })
})
