import { sleep, group } from "k6";
import http from "k6/http";

export const options = {
  ext: {
    loadimpact: {
      distribution: {
        "amazon:us:ashburn": { loadZone: "amazon:us:ashburn", percent: 100 },
      },
    },
  },
  stages: [{ target: 1, duration: "1m" }],
  thresholds: {},
};

export default function main() {
  let response;

  group("page_2 - https://www.meetup.com/", function () {
    response = http.get("https://www.meetup.com/", {
      headers: {
        "cache-control": "no-cache",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
        "sec-ch-ua-mobile": "?0",
        dnt: "1",
        "upgrade-insecure-requests": "1",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "navigate",
        "sec-fetch-user": "?1",
        "sec-fetch-dest": "document",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9,ja;q=0.8",
        "sec-gpc": "1",
      },
    });
    response = http.get(
      "https://www.meetup.com/_next/image?url=%2Fimages%2Fshared%2Fonline_events.svg&w=1080&q=75",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/css/61af7b0caae9cacc00d7.css",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "text/css,*/*;q=0.1",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "style",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/css/2aa60a7450588f710f04.css",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "text/css,*/*;q=0.1",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "style",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/main-ed70ae135667b51396fd.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/webpack-2504c87d1cb25e21f7ee.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/framework.66a79ec164b9f6c6083c.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/commons.87243c40c4adf9332d31.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/f78efe678e3d4c6d2f3324b234ba879b394fd7a5.34f4dd8374861356bbfe.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/ab111e260f13b9af801980beaf2143243f3031f4.a7a5b776bc1c4ce3b640.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.fd6b1b5424913a584fa9.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/pages/_app-e4f9ab85afe7649be774.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/faf7f81857e86714c5b7ec6ee085feff2a058b19.96c6dbd48161f5e0614c.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/9b7bc37e5ed0342374271c973f94fd149c3c8f2f.04f317746d700ad3196d.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/1ea392b2883c1b78fe504ed021e0cbafff3e53cc.24574793eefaa605b884.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/6c783d5d1a4ac3619ac103246ed7b50684ef3e6a.030b03c467caa82f72fa.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/1bc96372777c09050872b165b2f2c126303ce1eb.b4eb28a35d797efb0e94.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/d951b7790b60983d82b33e53f3a34312c35ba38e.43f7b1155781ccde0df2.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/17f632b099af03e4e58dfce0e900177b533452f2.bb867dd59562531dfb72.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/c62b1f5506a3d85383b562dbd5dbc47675d7d427.6b800a74768e7ff40927.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/pages/index-e1dd67c9cba2f7c768c0.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    sleep(0.5);
    response = http.get(
      "https://www.meetup.com/_next/image/?url=%2Fimages%2Fshared%2Fonline_events.svg&w=1080&q=75",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "image",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/media/Graphik-Regular.5a6c8ef9a003d72adbb0b4afe7be75c3.woff2",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          origin: "https://www.meetup.com",
          "sec-ch-ua-mobile": "?0",
          dnt: "1",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/media/Graphik-Medium.e928c9211e8ec2178f619817ebe13fa8.woff2",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          origin: "https://www.meetup.com",
          "sec-ch-ua-mobile": "?0",
          dnt: "1",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/media/Graphik-Bold.6cf8492ed686fc8f8c3268c9c55d8ba7.woff2",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          origin: "https://www.meetup.com",
          "sec-ch-ua-mobile": "?0",
          dnt: "1",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/media/Graphik-Semibold.1e706ac579d254bd92f758b39369570d.woff2",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          origin: "https://www.meetup.com",
          "sec-ch-ua-mobile": "?0",
          dnt: "1",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "cors",
          "sec-fetch-dest": "font",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/f4678ea91ab83c0aa83ff0cc207835e50aa56f87/_buildManifest.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/f4678ea91ab83c0aa83ff0cc207835e50aa56f87/_ssgManifest.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    sleep(0.9);
    response = http.get(
      "https://www.meetup.com/_next/static/css/3a8076264c44bd8dffcf.css",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "text/css,*/*;q=0.1",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "style",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://www.meetup.com/_next/static/chunks/81.8c1c2c08edbbcb2376c8.js",
      {
        headers: {
          "cache-control": "no-cache",
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          dnt: "1",
          "sec-ch-ua-mobile": "?0",
          accept: "*/*",
          "sec-fetch-site": "same-origin",
          "sec-fetch-mode": "no-cors",
          "sec-fetch-dest": "script",
          "accept-encoding": "gzip, deflate, br",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "sec-gpc": "1",
        },
      }
    );
    response = http.get(
      "https://analytics-tracking.meetup.com/data?records=eyJyZWNvcmRzIjpbeyJzb3VyY2UiOiJidWlsZC1tZWV0dXAiLCJzY2hlbWFGdWxsbmFtZSI6ImNvbS5tZWV0dXAuYmFzZS5hdnJvLlZpZXciLCJzY2hlbWFWZXJzaW9uIjoidjIiLCJpc1Rlc3REYXRhIjpmYWxzZSwiZGF0YSI6IntcInZpZXdJZFwiOlwiZDRlNDZiODgtMjQxOC00ZDRlLTlmMjEtNWI5N2YwODc4ZmY0XCIsXCJicm93c2VySWRcIjpcIjA2Njc1NTZiLTBmZTUtNDAyMS05MmZiLTEzYTYzN2FjMWY0NFwiLFwiZGV2aWNlVGltZXN0YW1wXCI6XCIyMDIxLTA4LTA0VDE5OjQ3OjIyLjYzOS0wNDowMFwiLFwibWVtYmVySWRcIjowLFwicmVmZXJyZXJcIjpcImh0dHBzOi8vd3d3Lm1lZXR1cC5jb20vXCIsXCJwYWdlTmFtZVwiOlwiaG9tZXBhZ2VMb2dnZWRPdXRcIixcInZpZXdOYW1lXCI6XCJob21lcGFnZUxvZ2dlZE91dFwiLFwidmlld1R5cGVcIjpcInBhZ2VcIn0ifV0sIm1lbWJlcklkIjowLCJ2aWV3SWQiOiJkNGU0NmI4OC0yNDE4LTRkNGUtOWYyMS01Yjk3ZjA4NzhmZjQiLCJicm93c2VySWQiOiIwNjY3NTU2Yi0wZmU1LTQwMjEtOTJmYi0xM2E2MzdhYzFmNDQiLCJyZWZlcmVyIjoiaHR0cHM6Ly93d3cubWVldHVwLmNvbS8iLCJ1cmwiOiJodHRwczovL3d3dy5tZWV0dXAuY29tLyJ9",
      {
        headers: {
          "sec-ch-ua":
            '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
          DNT: "1",
          "sec-ch-ua-mobile": "?0",
        },
      }
    );
    sleep(0.5);
    response = http.get("https://www.meetup.com/img/favicon.ico", {
      headers: {
        "cache-control": "no-cache",
        "sec-ch-ua":
          '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
        dnt: "1",
        "sec-ch-ua-mobile": "?0",
        accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "sec-fetch-site": "same-origin",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-dest": "image",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9,ja;q=0.8",
        "sec-gpc": "1",
      },
    });
  });
}

