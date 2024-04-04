import type { Preview } from "@storybook/react";
import "../src/css/globals.css";

import { withThemeByDataAttribute } from "@storybook/addon-themes";

import { initialize, mswLoader } from 'msw-storybook-addon';
import { rest } from "msw";

// Initialize MSW
initialize({
  onUnhandledRequest: 'bypass'
});

export const mock = {
    "items": [
      {
        "has_synonyms": true,
        "is_moderator_only": false,
        "is_required": false,
        "count": 1917451,
        "name": "java"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 14,
        "name": "jautodoc"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 3,
        "name": "jaus++"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 37,
        "name": "jaunt-api"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 28,
        "name": "jaudiotagger"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 2,
        "name": "jatha"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 362,
        "name": "jasypt"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 12,
        "name": "jasync-sql"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 1,
        "name": "jastor"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 51,
        "name": "jaspic"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 16,
        "name": "jasperstarter"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 258,
        "name": "jaspersoft-studio"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 1100,
        "name": "jasperserver"
      },
      {
        "has_synonyms": true,
        "is_moderator_only": false,
        "is_required": false,
        "count": 8465,
        "name": "jasper-reports"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 61,
        "name": "jasper-plugin"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 1,
        "name": "jasper-jasp-toolkit"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 26,
        "name": "jasonette"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 107,
        "name": "jasny-bootstrap"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 2,
        "name": "jasmin-x86"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 22,
        "name": "jasmin-sms"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 4,
        "name": "jasmine-ts"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 17,
        "name": "jasmine-spec-reporter"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 38,
        "name": "jasmine-reporters"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 326,
        "name": "jasmine-node"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 38,
        "name": "jasmine-maven-plugin"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 14,
        "name": "jasmine-matchers"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 86,
        "name": "jasmine-marbles"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 243,
        "name": "jasmine-jquery"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 13,
        "name": "jasmine-headless-webkit"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 3,
        "name": "jasmine-async"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 18,
        "name": "jasmine-ajax"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 197,
        "name": "jasmine2.0"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 13355,
        "name": "jasmine"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 81,
        "name": "jasmin"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 1,
        "name": "jasmid.js"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 151,
        "name": "jasig"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 24,
        "name": "jasidepanels"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 23,
        "name": "jaseci"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 1,
        "name": "jasdb"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 31,
        "name": "jar-with-dependencies"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 7,
        "name": "jarsplice"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 235,
        "name": "jar-signing"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 342,
        "name": "jarsigner"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 77,
        "name": "jaro-winkler"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 28,
        "name": "jarjar"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 1,
        "name": "jargo"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 6,
        "name": "jarduino"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 28,
        "name": "jarbundler"
      },
      {
        "has_synonyms": true,
        "is_moderator_only": false,
        "is_required": false,
        "count": 18956,
        "name": "jar"
      },
      {
        "has_synonyms": false,
        "is_moderator_only": false,
        "is_required": false,
        "count": 731,
        "name": "japplet"
      }
    ],
    "has_more": true,
    "quota_max": 10000,
    "quota_remaining": 9694,
    "total": 10000
}

const preview: Preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers: [
        rest.get('https://api.stackexchange.com/2.3/tags', (req, res, ctx) => {
          return res(ctx.delay(1000), ctx.json(mock))
        })
      ]
    }
  },
  decorators: [
    withThemeByDataAttribute({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
    attributeName: "data-mode",
  })]
};

export default preview;
