<!-- PROJECT LOGO -->
<br />
<p align="center">

  <h3 align="center">js-perf-toolkit</h3>

  <p align="center">
    A collection of (Open Source) performance tools which allow a js developer to reliably model and monitor a webapp.
    <br />
    <a href="https://github.com/unlikelyzero/js-perf-toolkit"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/unlikelyzero/js-perf-toolkit">View Demo</a>
    ·
    <a href="https://github.com/unlikelyzero/js-perf-toolkit/issues">Report Bug</a>
    ·
    <a href="https://github.com/unlikelyzero/js-perf-toolkit/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

A collection of (Open Source) performance tools which allow a js developer to reliably model and monitor a webapp. 

### Built With

* [playwright](https://github.com/microsoft/playwright)
* [k6](https://github.com/k6io/k6)
* [browserless](https://github.com/browserless/chrome)
* [grafana](https://github.com/grafana/grafana)
* [prometheus](https://github.com/prometheus/prometheus)
* [influxdb](https://github.com/influxdata/influxdb)

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* [Docker](https://docs.docker.com/get-docker/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/unlikelyzero/js-perf-toolkit.git
   ```
2. Add your webapp to compose file and expose port 9000
3. Start the monitoring containers (except browserless)
   ```
   docker compose up -d
   ```
4. Verify that the following webservers are up:
   ```
   localhost:9090
   localhost:8086
   localhost:8089
   localhost:3006
   ```
5. Start the browserless container
   ```
   docker compose -f ./browserless.dc.yaml up -d browserless
6. Verify that the following webserver is up
   ```
   localhost:3003
   ```
<!-- USAGE EXAMPLES -->
## Usage

This can be used to verify basic playwright functionality

```
cd playwright
npm install
npm run test:local:basic
```


<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/unlikelyzero/js-perf-toolkit/issues) for a list of proposed features (and known issues).

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

John Hill - [Email on https://github.com/unlikelyzero]

Project Link: [https://github.com/unlikelyzero/js-perf-toolkit](https://github.com/unlikelyzero/js-perf-toolkit)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

Sources
- https://medium.com/swlh/beautiful-load-testing-with-k6-and-docker-compose-4454edb3a2e3
- https://susi.dev/prometheus-grafana-loki-with-docker-compose
- https://github.com/browserless/chrome/issues/52
- https://michaljanaszek.com/blog/test-website-performance-with-puppeteer/
- https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
- https://automationrhapsody.com/performance-testing-in-the-browser/
- https://github.com/llatinov/sample-performance-testing-in-browser



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/unlikelyzero/repo.svg?style=for-the-badge
[contributors-url]: https://github.com/unlikelyzero/repo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/unlikelyzero/repo.svg?style=for-the-badge
[forks-url]: https://github.com/unlikelyzero/repo/network/members
[stars-shield]: https://img.shields.io/github/stars/unlikelyzero/repo.svg?style=for-the-badge
[stars-url]: https://github.com/unlikelyzero/repo/stargazers
[issues-shield]: https://img.shields.io/github/issues/unlikelyzero/repo.svg?style=for-the-badge
[issues-url]: https://github.com/unlikelyzero/repo/issues
[license-shield]: https://img.shields.io/github/license/unlikelyzero/repo.svg?style=for-the-badge
[license-url]: https://github.com/unlikelyzero/repo/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/unlikelyzero

