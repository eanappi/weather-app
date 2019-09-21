import WeatherDay from './WeatherDay.js'
import WeatherForecast from './WeatherForecast.js'

const App = () => {
  return `
    <section class="hero is-fullheight is-warning">
      <div class="hero-head">
        <nav class="navbar">
          <div class="navbar-brand">
            <a class="navbar-item" href="/">
              <img src="public/logo.png" alt="Weather New Style">
            </a>
          </div>
        </nav>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="columns">
            <div class="column"></div>
            <div class="column" id="WeatherDay">
              <a class="button is-large is-text is-warning is-loading">Loading ...</a>
            </div>
            <div class="column"></div>
          </div>

          <div class="columns">
            <div class="column">
              First column
            </div>
            <div class="column">
              Second column
            </div>
            <div class="column">
              Third column
            </div>
            <div class="column">
              Fourth column
            </div>
          </div>

        </div>
      </div>
    </section>
    <div id="debug"></div>
  `
}

export default App()