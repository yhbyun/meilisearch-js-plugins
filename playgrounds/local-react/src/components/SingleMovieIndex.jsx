import 'instantsearch.css/themes/algolia-min.css'
import React from 'react'
import {
  InstantSearch,
  InfiniteHits,
  SearchBox,
  Stats,
  Highlight,
  ClearRefinements,
  RefinementList,
} from 'react-instantsearch-dom'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch'

const searchClient = instantMeiliSearch('http://localhost:7700', '1VV9h--7f0L4m7DRvZQ7w06zj03S6JfdgleUi0A-b6g', {
  primaryKey: 'id',
  keepZeroFacets: true,
})

const SingleIndex = () => (
  <div className="ais-InstantSearch">
    <h1>Meilisearch + React InstantSearch</h1>
    <h2>Search in movies</h2>

    <InstantSearch indexName="movies" searchClient={searchClient}>
      <Stats />
      <div className="left-panel">
        <ClearRefinements />
        <h2>Language</h2>
        <RefinementList attribute="language" operator="or"/>
        <h2>Genres</h2>
        <RefinementList attribute="genres" operator="or" />
        
        <h2>Author</h2>
        <RefinementList attribute="authors" operator="or"/>
        <h2>Format</h2>
        <RefinementList attribute="format" operator="or"/>
      </div>
      <div className="right-panel">
        <SearchBox />
        <InfiniteHits hitComponent={Hit} />
      </div>
    </InstantSearch>
  </div>
)

const Hit = ({ hit }) => {
  return (
    <div key={hit.id}>
      <div className="hit-name">
        <Highlight attribute="title" hit={hit} />
      </div>
      <div className="hit-name">
        <Highlight attribute="genres" hit={hit} />
      </div>
      <div className="hit-name">
        <Highlight attribute="authors" hit={hit} />
      </div>
      <div className="hit-name">
        <Highlight attribute="publisher" hit={hit} />
      </div>
      <div className="hit-name">
        <Highlight attribute="language" hit={hit} />
      </div>
      <div className="hit-name">
        <Highlight attribute="format" hit={hit} />
      </div>
    </div>
  )
}

export default SingleIndex
