import './App.css'

function App() {
  return (
< >
<h1>PROGRESS CHART</h1>
    <nav />
        <input type="text" id="search" placeholder="search">
        <div class="drop-down-list">
            <button id="buttonSort" class="drop-down-list__button"><span>SORT BY</span> <span class="arrow-button arrow-bottom"></span> </button>
            <div class="drop-down-list__options hide">
                <ul>
                    <li class="drop-down-list__option"><button type="button" class="drop-down-list__button">Points (high-low)</button></li>
                    <li class="drop-down-list__option"><button type="button" class="drop-down-list__button">Points (low-high)</button></li>
                    <li class="drop-down-list__option"><button type="button" class="drop-down-list__button">Top Rated</button></li>
                </ul>
            </div>
        </div>
    <article id="noResults">
      <p>The search has not given any results <br /> please clear the search</p></article>
    <section class="showcase-goods"></section>

    <section class="info-block">
            <h2>Information block</h2>
            <ol>
                <li>Search by  name.</li>
                <li>Drop-down list.</li>
                <li>Sort by:<ul>
                    <li>Points (high-low)</li>
                    <li>Points (low-high)</li>
                    <li>Top Rated</li>
                </ul></li>
                <li>Adaptive layout.</li>
            </ol>
        </section>


< / >
    ) 
}

export default App;
