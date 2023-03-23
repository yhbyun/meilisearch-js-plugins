const { MeiliSearch } = require('meilisearch')
const movies = require('./assets/movies.json')
const games = require('./assets/games.json')

;(async () => {
  const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: '1VV9h--7f0L4m7DRvZQ7w06zj03S6JfdgleUi0A-b6g',
  })

  const moviesIndex = client.index('movies')
  const gamesIndex = client.index('games')

  await moviesIndex.delete()
  await gamesIndex.delete()

  await moviesIndex.updateSettings({
    filterableAttributes: ['genres', 'publisher', 'language', 'authors', 'format'],
  })
  await gamesIndex.updateSettings({
    filterableAttributes: ['genres', 'color', 'platforms', 'misc', 'players'],
    searchableAttributes: ['name', 'description'],
    sortableAttributes: ['recommendationCount'],
  })

  const moviesRes = await moviesIndex.addDocuments(movies)
  const gamesRes = await gamesIndex.addDocuments(games)

  const moviesTask = await client.waitForTask(moviesRes.taskUid)
  const gamesTask = await client.waitForTask(gamesRes.taskUid)
  console.log(moviesTask)
  console.log(gamesTask)
  const res = await client.index("movies").search("", { filter: [['genres=fiction', 'genres=literature']] })
  console.log(res)
})()
