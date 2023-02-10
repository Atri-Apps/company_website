import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Flex10": {
      "callbacks": {}
    },
    "Flex154": {
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Menu1": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 36,
        "alignRight": true,
        "src": "/app-assets/menu_new.svg",
        "gap": ""
      },
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Flex243": {
      "callbacks": {}
    },
    "Flex160": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Flex62": {
      "callbacks": {}
    },
    "Flex60": {
      "callbacks": {}
    },
    "Flex51": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Flex52": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Flex53": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Flex54": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Flex250": {
      "callbacks": {}
    },
    "Flex251": {
      "callbacks": {}
    },
    "Flex252": {
      "callbacks": {}
    },
    "Flex259": {
      "callbacks": {}
    },
    "Flex258": {
      "callbacks": {}
    },
    "Flex256": {
      "callbacks": {}
    },
    "Flex86": {
      "callbacks": {}
    },
    "Flex85": {
      "callbacks": {}
    },
    "Flex84": {
      "callbacks": {}
    },
    "Flex241": {
      "callbacks": {}
    },
    "Flex195": {
      "callbacks": {}
    },
    "Flex193": {
      "callbacks": {}
    },
    "Flex183": {
      "callbacks": {}
    },
    "Flex242": {
      "callbacks": {}
    },
    "Flex229": {
      "callbacks": {}
    },
    "Flex227": {
      "callbacks": {}
    },
    "Flex228": {
      "callbacks": {}
    },
    "Flex232": {
      "callbacks": {}
    },
    "Flex230": {
      "callbacks": {}
    },
    "Flex231": {
      "callbacks": {}
    },
    "Flex271": {
      "callbacks": {}
    },
    "Flex269": {
      "callbacks": {}
    },
    "Flex270": {
      "callbacks": {}
    },
    "Flex223": {
      "callbacks": {}
    },
    "Flex219": {
      "callbacks": {}
    },
    "Flex207": {
      "callbacks": {}
    },
    "Flex198": {
      "callbacks": {}
    },
    "Flex199": {
      "callbacks": {}
    },
    "Flex208": {
      "callbacks": {}
    },
    "Flex226": {
      "callbacks": {}
    },
    "Flex224": {
      "callbacks": {}
    },
    "Flex225": {
      "callbacks": {}
    },
    "Div1": {
      "callbacks": {}
    },
    "Flex788": {
      "callbacks": {}
    },
    "Flex789": {
      "callbacks": {}
    },
    "Flex830": {
      "callbacks": {}
    },
    "Flex831": {
      "callbacks": {}
    },
    "Div40": {
      "callbacks": {}
    },
    "Flex871": {
      "callbacks": {}
    },
    "Flex872": {
      "callbacks": {}
    },
    "Flex874card": {
      "callbacks": {}
    },
    "Flex873data": {
      "callbacks": {}
    },
    "Flex875": {
      "callbacks": {}
    },
    "Flex876det": {
      "callbacks": {}
    },
    "Flex877": {
      "callbacks": {}
    },
    "Flex884card": {
      "callbacks": {}
    },
    "Flex883": {
      "callbacks": {}
    },
    "Flex881": {
      "callbacks": {}
    },
    "Flex880": {
      "callbacks": {}
    },
    "Flex879": {
      "callbacks": {}
    },
    "Flex890card": {
      "callbacks": {}
    },
    "Flex889": {
      "callbacks": {}
    },
    "Flex887": {
      "callbacks": {}
    },
    "Flex886": {
      "callbacks": {}
    },
    "Flex885": {
      "callbacks": {}
    },
    "Flex909": {
      "callbacks": {}
    },
    "Flex906card": {
      "callbacks": {}
    },
    "Flex900": {
      "callbacks": {}
    },
    "Flex897": {
      "callbacks": {}
    },
    "Flex894": {
      "callbacks": {}
    },
    "Flex891": {
      "callbacks": {}
    },
    "Flex907card": {
      "callbacks": {}
    },
    "Flex902": {
      "callbacks": {}
    },
    "Flex898": {
      "callbacks": {}
    },
    "Flex895": {
      "callbacks": {}
    },
    "Flex892": {
      "callbacks": {}
    },
    "Flex908card": {
      "callbacks": {}
    },
    "Flex905": {
      "callbacks": {}
    },
    "Flex899": {
      "callbacks": {}
    },
    "Flex896": {
      "callbacks": {}
    },
    "Flex893": {
      "callbacks": {}
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_without_bg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Showcase"
            }
          }
        ]
      }
    },
    "TextBox11": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox155": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox156": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image37": {
      "custom": {
        "alt": "github",
        "src": "/app-assets/github_darkmode.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "Get Started"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/category/getting-started",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox7": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox8": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Showcase"
            }
          }
        ]
      }
    },
    "TextBox14": {
      "custom": {
        "text": "Build better apps faster"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox16": {
      "custom": {
        "text": "Fewer lines of code. Better code quality. Minimal learning curve."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox160": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image66": {
      "custom": {
        "alt": "github logo",
        "src": "/app-assets/github%20star%20button.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image38": {
      "custom": {
        "alt": "intro",
        "src": "/app-assets/optimized_intro.gif"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "Discussions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine/discussions",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "Contribute"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine#how-to-contribute",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "SHOWCASE"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Showcase"
            }
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "Repo traffic history"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Apps/traffic-history",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "Personal blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Apps/personal_blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "Ecommerce website"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Apps/full_stack_ecommerce_website",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "RESOURCES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox66": {
      "custom": {
        "text": "ABOUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "Conference talks"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/conferences",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image76": {
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.linkedin.com/company/atri-labs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image77": {
      "custom": {
        "alt": "twitter",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/atrilabs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image78": {
      "custom": {
        "alt": "youtube",
        "src": "/app-assets/youtube.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.youtube.com/channel/UC1uR2Q5x_8olWS_Y4PdK1Bw",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image79": {
      "custom": {
        "alt": "slack",
        "src": "/app-assets/slack.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://join.slack.com/t/atricommunity/shared_invite/zt-1e756m1at-bZBxngvw7KWWO0riI4pc0w",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox230": {
      "custom": {
        "text": "Full stack web development framework to build Progressive Web Apps faster"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image85": {
      "custom": {
        "alt": "github",
        "src": "/app-assets/github%20star%20button.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image84": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_without_bg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox229": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "custom": {
        "text": "Copyright © 2022 Pulastya, Inc."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox94": {
      "custom": {
        "text": "Terms of Use"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image63": {
      "custom": {
        "alt": "made with atri",
        "src": "/app-assets/made_with_atri_2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox185": {
      "custom": {
        "text": "Developer approved stack for the entire product team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox186": {
      "custom": {
        "text": "A new approach to full-stack development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image60": {
      "custom": {
        "alt": "feature_3",
        "src": "/app-assets/feature_3.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox213": {
      "custom": {
        "text": "BETTER CODE QUALITY"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox214": {
      "custom": {
        "text": "Reduce compliance breaches by using our object model which serves as a single source of truth for both frontend and backend"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox215": {
      "custom": {
        "text": "Use something better than REST APIs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox216": {
      "custom": {
        "text": "Access to productivity tools"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox217": {
      "custom": {
        "text": "REDUCED DEVELOPMENT TIME"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox218": {
      "custom": {
        "text": "Get the best of both no-code and code worlds by using productivity tools such as visual editor and simultaneously writing custom React code"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image59": {
      "custom": {
        "alt": "feature_2",
        "src": "/app-assets/feature_1.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image96": {
      "custom": {
        "alt": "feature_2",
        "src": "/app-assets/feature_2.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox237": {
      "custom": {
        "text": "Write backend in your favorite language, be it Python or NodeJS.  Use our utility functions to speed up your development"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox238": {
      "custom": {
        "text": "MINIMAL LEARNING CURVE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox239": {
      "custom": {
        "text": "Go beyond JavaScript world"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input4": {
      "custom": {
        "value": "",
        "placeholder": "Enter your email"
      },
      "callbacks": {}
    },
    "Button16": {
      "custom": {
        "text": "Subscribe"
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox192": {
      "custom": {
        "text": "Thanks for subscribing to our newsletter.   You will receive monthly updates from us right in your inbox."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox201": {
      "custom": {
        "text": "Keep up to date with our new feature releases,  blog posts on web development and our journey of creating a new web-development framework"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox202": {
      "custom": {
        "text": "Subscribe to our free monthly newsletter"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox209": {
      "custom": {
        "text": "Install and get started"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox210": {
      "custom": {
        "text": "Get started with the full-stack Atri framework in three easy steps and follow our documentation to create your first Atri app "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image56": {
      "custom": {
        "alt": "installation",
        "src": "/app-assets/installation_figure.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox508": {
      "custom": {
        "text": "TRUSTED BY DEVELOPERS AT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image339": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aws-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image340": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/jhu0logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image341": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mit-logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image342": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Stanford_Cardinal_logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image343": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/redhat-new-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image356": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/nhs-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image344": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/redhat-new-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image345": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Stanford_Cardinal_logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image346": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mit-logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image347": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/jhu0logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image348": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aws-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image354": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/nhs-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image349": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/redhat-new-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image350": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Stanford_Cardinal_logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image351": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mit-logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image352": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/jhu0logo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image353": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aws-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image358": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/nhs-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex878lay": {
      "callbacks": {}
    },
    "TextBox634": {
      "custom": {
        "text": "Notification infrastructure is the most essential part of any product that I'd never dare build myself from scratch or operate at scale. Knock's APIs allow me to focus on my frontend experience, while all the complexity is abstracted away."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image382": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arnab.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox636": {
      "custom": {
        "text": "Arnab Manna"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox637": {
      "custom": {
        "text": "Founding Machine Learning Enngineer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex882lay": {
      "callbacks": {}
    },
    "TextBox640": {
      "custom": {
        "text": "Atri framework has enabled us to execute more client projects in less time. Business teams are now able to modify web pages quickly and without developer's intervention. We are excited for the upcoming feature releases."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image385": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exl.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image384": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/jay.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox638": {
      "custom": {
        "text": "Senior Manager"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox639": {
      "custom": {
        "text": "Jay Vishal"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex888lay": {
      "callbacks": {}
    },
    "TextBox643": {
      "custom": {
        "text": "I have been using Atri framework since its alpha release. It is solving a critical problem of collaboration and handoff between engineering and creative teams. I strongly believe that it will be a game changer for the web development industry."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image387": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aws-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image386": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/devesh.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox641": {
      "custom": {
        "text": "Software Developer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox642": {
      "custom": {
        "text": "Devesh Kumar"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex901lay": {
      "callbacks": {}
    },
    "TextBox650": {
      "custom": {
        "text": "I have been using Atri framework since its alpha release. It is solving a critical problem of collaboration and handoff between engineering and creative teams. I strongly believe that it will be a game changer for the web development industry."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image391": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aws-logo.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image388": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/devesh.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox644": {
      "custom": {
        "text": "Devesh Kumar"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox645": {
      "custom": {
        "text": "Software Engineer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex903lay": {
      "callbacks": {}
    },
    "TextBox651": {
      "custom": {
        "text": "Atri framework has enabled us to execute more client projects in less time. Business teams are now able to modify web pages quickly and without developer's intervention. We are excited for the upcoming feature releases."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image392": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/exl.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image389": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/jay.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox646": {
      "custom": {
        "text": "Jay Vishal"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox647": {
      "custom": {
        "text": "Senior Manager"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex904lay": {
      "callbacks": {}
    },
    "TextBox652": {
      "custom": {
        "text": "Python devs, check out Atri framework - it is the most powerful solution for creating responsive web apps. The generated code for your frontend is of very high quality and production-grade & you get the freedom to develop your backend using Python."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image390": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arnab.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox648": {
      "custom": {
        "text": "Founding Machine Learning Engineer"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox649": {
      "custom": {
        "text": "Arnab Manna"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "trial": {
    "Flex115": {
      "callbacks": {}
    },
    "Flex113": {
      "callbacks": {}
    },
    "Flex106": {
      "callbacks": {}
    },
    "Flex99": {
      "callbacks": {}
    },
    "Flex100": {
      "callbacks": {}
    },
    "Flex107": {
      "callbacks": {}
    },
    "Flex101": {
      "callbacks": {}
    },
    "Flex102": {
      "callbacks": {}
    },
    "Flex108": {
      "callbacks": {}
    },
    "Flex114": {
      "callbacks": {}
    },
    "Flex109": {
      "callbacks": {}
    },
    "Flex103": {
      "callbacks": {}
    },
    "Flex110": {
      "callbacks": {}
    },
    "Menu2": {
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex98": {
      "callbacks": {}
    },
    "Flex104": {
      "callbacks": {}
    },
    "Flex111": {
      "callbacks": {}
    },
    "Flex105": {
      "callbacks": {}
    },
    "Flex112": {
      "callbacks": {}
    },
    "Overlay2": {
      "custom": {
        "open": true
      },
      "callbacks": {}
    },
    "Flex712": {
      "callbacks": {}
    },
    "Flex710": {
      "callbacks": {}
    },
    "Flex722": {
      "callbacks": {}
    },
    "Flex760": {
      "callbacks": {}
    },
    "Flex759": {
      "callbacks": {}
    },
    "Flex756": {
      "callbacks": {}
    },
    "Flex751": {
      "callbacks": {}
    },
    "Flex752": {
      "callbacks": {}
    },
    "Flex757": {
      "callbacks": {}
    },
    "Flex753": {
      "callbacks": {}
    },
    "Flex754": {
      "callbacks": {}
    },
    "Flex755": {
      "callbacks": {}
    },
    "Flex758": {
      "callbacks": {}
    },
    "Flex711": {
      "callbacks": {}
    },
    "Flex738": {
      "callbacks": {}
    },
    "Flex736": {
      "callbacks": {}
    },
    "Flex737": {
      "callbacks": {}
    },
    "Flex741": {
      "callbacks": {}
    },
    "Flex739": {
      "callbacks": {}
    },
    "Flex740": {
      "callbacks": {}
    },
    "Flex744": {
      "callbacks": {}
    },
    "Flex742": {
      "callbacks": {}
    },
    "Flex743": {
      "callbacks": {}
    },
    "Flex747": {
      "callbacks": {}
    },
    "Flex745": {
      "callbacks": {}
    },
    "Flex746": {
      "callbacks": {}
    },
    "Flex136": {
      "callbacks": {}
    },
    "Flex133": {
      "callbacks": {}
    },
    "Flex129": {
      "callbacks": {}
    },
    "Flex121": {
      "callbacks": {}
    },
    "Flex134": {
      "callbacks": {}
    },
    "Flex130": {
      "callbacks": {}
    },
    "Flex122": {
      "callbacks": {}
    },
    "Flex135": {
      "callbacks": {}
    },
    "Flex131": {
      "callbacks": {}
    },
    "Flex123": {
      "callbacks": {}
    },
    "Flex124": {
      "callbacks": {}
    },
    "Flex116": {
      "callbacks": {}
    },
    "Flex132": {
      "callbacks": {}
    },
    "Flex125": {
      "callbacks": {}
    },
    "Flex117": {
      "callbacks": {}
    },
    "Flex126": {
      "callbacks": {}
    },
    "Flex118": {
      "callbacks": {}
    },
    "Flex127": {
      "callbacks": {}
    },
    "Flex119": {
      "callbacks": {}
    },
    "Flex128": {
      "callbacks": {}
    },
    "Flex120": {
      "callbacks": {}
    },
    "Flex152": {
      "callbacks": {}
    },
    "Flex150": {
      "callbacks": {}
    },
    "Flex147": {
      "callbacks": {}
    },
    "Flex143": {
      "callbacks": {}
    },
    "Flex139": {
      "callbacks": {}
    },
    "Flex144": {
      "callbacks": {}
    },
    "Flex140": {
      "callbacks": {}
    },
    "Flex148": {
      "callbacks": {}
    },
    "Flex145": {
      "callbacks": {}
    },
    "Flex141": {
      "callbacks": {}
    },
    "Flex137": {
      "callbacks": {}
    },
    "Flex146": {
      "callbacks": {}
    },
    "Flex142": {
      "callbacks": {}
    },
    "Flex138": {
      "callbacks": {}
    },
    "Flex151": {
      "callbacks": {}
    },
    "Flex149": {
      "callbacks": {}
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/landing_page_img.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "installation",
        "src": "/app-assets/installation_figure.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "custom": {
        "text": "Get started with the full-stack Atri framework in three easy steps and follow our documentation to create your first Atri app "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "Install and get started"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "custom": {
        "text": "$ atri start"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "$ pipenv shell"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "custom": {
        "text": "$ pipenv install atri"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "custom": {
        "text": "Ready to get started?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox113": {
      "custom": {
        "text": "Get started with the full-stack Atri framework in three easy steps"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox116": {
      "custom": {
        "text": "Fewer lines of code. Better code quality. Minimal learning curve."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox117": {
      "custom": {
        "text": "Build better apps faster"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox114": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox115": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button7": {
      "custom": {
        "text": "Get Started"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_only.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox118": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_without_bg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image314": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/cross-svgrepo-com%20(1).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image313": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screen%20Shot%202022-11-06%20at%202.45%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox493": {
      "custom": {
        "text": "Creator Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image310": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/user.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image311": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image312": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/git.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button229": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button230": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button231": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox494": {
      "custom": {
        "text": "Personal blog with minimalist design. It includes four pages - landing page, blog, talks and about page."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox495": {
      "custom": {
        "text": "Title of the website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button228": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox482": {
      "custom": {
        "text": "Creator's Image"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload2": {
      "custom": {
        "multiple": false,
        "showFilename": true,
        "text": "Upload",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "TextBox483": {
      "custom": {
        "text": "Demo Image"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload1": {
      "custom": {
        "multiple": false,
        "showFilename": true,
        "text": "Upload",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "TextBox484": {
      "custom": {
        "text": "Tags"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input11": {
      "custom": {
        "value": "",
        "placeholder": "open-source, ocr, ml"
      },
      "callbacks": {}
    },
    "TextBox492": {
      "custom": {
        "text": "*Add the tags seperated by ,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input12": {
      "custom": {
        "value": "",
        "placeholder": "https://atri-apps.github.io/"
      },
      "callbacks": {}
    },
    "TextBox485": {
      "custom": {
        "text": "Published Url"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox486": {
      "custom": {
        "text": "Github Url"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input13": {
      "custom": {
        "value": "",
        "placeholder": "https://github.com/"
      },
      "callbacks": {}
    },
    "Input14": {
      "custom": {
        "value": "",
        "placeholder": "Name....."
      },
      "callbacks": {}
    },
    "TextBox487": {
      "custom": {
        "text": "Creator Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox488": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input15": {
      "custom": {
        "value": "",
        "placeholder": "About Text...."
      },
      "callbacks": {}
    },
    "Input16": {
      "custom": {
        "value": "",
        "placeholder": "Title of the website....."
      },
      "callbacks": {}
    },
    "TextBox489": {
      "custom": {
        "text": "Title"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button8": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "custom": {
        "text": "Copyright © 2022 Pulastya, Inc."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "custom": {
        "text": "Terms of Use"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "custom": {
        "text": "Copyright © 2022 Pulastya, Inc."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "custom": {
        "text": "Terms of Use"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image31": {
      "custom": {
        "alt": "slack",
        "src": "/app-assets/slack.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image32": {
      "custom": {
        "alt": "youtube",
        "src": "/app-assets/youtube.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "custom": {
        "alt": "twitter",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image34": {
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image35": {
      "custom": {
        "alt": "github",
        "src": "/app-assets/github.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox133": {
      "custom": {
        "text": "Full-stack framework to  build Progressive Web Apps faster"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_without_bg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox119": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "custom": {
        "text": "ABOUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox120": {
      "custom": {
        "text": "Conference talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "custom": {
        "text": "RESOURCES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox121": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox122": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox123": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "custom": {
        "text": "SHOWCASE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "custom": {
        "text": "Ecommerce website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "custom": {
        "text": "Personal blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox126": {
      "custom": {
        "text": "Repo traffic history"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox127": {
      "custom": {
        "text": "Contribute"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "custom": {
        "text": "Discussions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox151": {
      "custom": {
        "text": "RESOURCES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox147": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox152": {
      "custom": {
        "text": "ABOUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox148": {
      "custom": {
        "text": "Conference talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox149": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "custom": {
        "text": "Discussions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "custom": {
        "text": "Contribute"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox150": {
      "custom": {
        "text": "SHOWCASE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "custom": {
        "text": "Repo traffic history"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "custom": {
        "text": "Personal blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "custom": {
        "text": "Ecommerce website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox154": {
      "custom": {
        "text": "Full-stack framework to  build Progressive Web Apps faster"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image36": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_without_bg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox153": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "Showcase": {
    "Flex462": {
      "callbacks": {}
    },
    "Overlay3": {
      "custom": {
        "open": true
      },
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Flex786": {
      "callbacks": {}
    },
    "Flex784": {
      "callbacks": {}
    },
    "Flex779": {
      "callbacks": {}
    },
    "Flex770": {
      "callbacks": {}
    },
    "Flex771": {
      "callbacks": {}
    },
    "Flex780": {
      "callbacks": {}
    },
    "Flex772": {
      "callbacks": {}
    },
    "Flex773": {
      "callbacks": {}
    },
    "Flex781": {
      "callbacks": {}
    },
    "Flex774": {
      "callbacks": {}
    },
    "Flex775": {
      "callbacks": {}
    },
    "Flex782": {
      "callbacks": {}
    },
    "Flex776": {
      "callbacks": {}
    },
    "Flex777": {
      "callbacks": {}
    },
    "Flex785": {
      "callbacks": {}
    },
    "Flex783": {
      "callbacks": {}
    },
    "Flex778": {
      "callbacks": {}
    },
    "Flex769": {
      "callbacks": {}
    },
    "Flex766": {
      "callbacks": {}
    },
    "Flex767": {
      "callbacks": {}
    },
    "Tag_Flex_1": {
      "callbacks": {}
    },
    "Tag_Flex_2": {
      "callbacks": {}
    },
    "Tag_Flex_3": {
      "callbacks": {}
    },
    "Flex768": {
      "callbacks": {}
    },
    "Flex764": {
      "callbacks": {}
    },
    "Flex765": {
      "callbacks": {}
    },
    "Flex463": {
      "callbacks": {}
    },
    "Flex466": {
      "callbacks": {}
    },
    "Flex467": {
      "callbacks": {}
    },
    "Filter1": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Filter2": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Filter3": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Filter4": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Filter5": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Filter6": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Filter7": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Filter8": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Filter9": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Flex468": {
      "callbacks": {}
    },
    "Flex469": {
      "callbacks": {}
    },
    "Card_1": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Flex481": {
      "callbacks": {}
    },
    "Flex482": {
      "callbacks": {}
    },
    "Flex483": {
      "callbacks": {}
    },
    "Card_Tag_1_a": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Card_Tag_1_b": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_1_c": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Flex484": {
      "callbacks": {}
    },
    "Flex485": {
      "callbacks": {}
    },
    "Flex486": {
      "callbacks": {}
    },
    "Card_2": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Flex528": {
      "callbacks": {}
    },
    "Flex525": {
      "callbacks": {}
    },
    "Flex523": {
      "callbacks": {}
    },
    "Flex524": {
      "callbacks": {}
    },
    "Flex527": {
      "callbacks": {}
    },
    "Flex657": {
      "callbacks": {}
    },
    "Card_Tag_2_c": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_2_b": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_2_a": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Card_3": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Flex535": {
      "callbacks": {}
    },
    "Flex532": {
      "callbacks": {}
    },
    "Flex534": {
      "callbacks": {}
    },
    "Flex530": {
      "callbacks": {}
    },
    "Flex531": {
      "callbacks": {}
    },
    "Flex661": {
      "callbacks": {}
    },
    "Card_Tag_3_c": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_3_b": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_3_a": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Flex646": {
      "callbacks": {}
    },
    "Card_6": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Flex640": {
      "callbacks": {}
    },
    "Flex632": {
      "callbacks": {}
    },
    "Flex625": {
      "callbacks": {}
    },
    "Flex626": {
      "callbacks": {}
    },
    "Flex633": {
      "callbacks": {}
    },
    "Flex673": {
      "callbacks": {}
    },
    "Card_Tag_6_c": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_6_b": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_6_a": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Card_5": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Flex641": {
      "callbacks": {}
    },
    "Flex635": {
      "callbacks": {}
    },
    "Flex636": {
      "callbacks": {}
    },
    "Flex627": {
      "callbacks": {}
    },
    "Flex628": {
      "callbacks": {}
    },
    "Flex669": {
      "callbacks": {}
    },
    "Card_Tag_5_c": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_5_b": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_5_a": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Card_4": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Flex642": {
      "callbacks": {}
    },
    "Flex637": {
      "callbacks": {}
    },
    "Flex629": {
      "callbacks": {}
    },
    "Flex630": {
      "callbacks": {}
    },
    "Flex639": {
      "callbacks": {}
    },
    "Flex665": {
      "callbacks": {}
    },
    "Card_Tag_4_c": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_4_b": {
      "callbacks": {},
      "styles": {
        "display": "none"
      }
    },
    "Card_Tag_4_a": {
      "callbacks": {},
      "styles": {
        "display": "flex"
      }
    },
    "Flex674": {
      "callbacks": {}
    },
    "Flex675": {
      "callbacks": {}
    },
    "Flex706": {
      "callbacks": {}
    },
    "Flex624": {
      "callbacks": {}
    },
    "Flex621": {
      "callbacks": {}
    },
    "Flex620": {
      "callbacks": {}
    },
    "Menu7": {
      "custom": {
        "open": false,
        "iconHeight": 24,
        "iconWidth": 36,
        "alignRight": true,
        "src": "/app-assets/menu_new.svg",
        "gap": ""
      },
      "callbacks": {}
    },
    "Flex618": {
      "callbacks": {}
    },
    "Flex619": {
      "callbacks": {}
    },
    "Flex623": {
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "Flex647": {
      "callbacks": {}
    },
    "Flex705": {
      "callbacks": {}
    },
    "Flex702": {
      "callbacks": {}
    },
    "Flex703": {
      "callbacks": {}
    },
    "Flex699": {
      "callbacks": {}
    },
    "Flex692": {
      "callbacks": {}
    },
    "Flex704": {
      "callbacks": {}
    },
    "Flex700": {
      "callbacks": {}
    },
    "Flex693": {
      "callbacks": {}
    },
    "Flex687": {
      "callbacks": {}
    },
    "Flex686": {
      "callbacks": {}
    },
    "Flex685": {
      "callbacks": {}
    },
    "Flex694": {
      "callbacks": {}
    },
    "Flex701": {
      "callbacks": {}
    },
    "Flex695": {
      "callbacks": {}
    },
    "Flex688": {
      "callbacks": {}
    },
    "Flex696": {
      "callbacks": {}
    },
    "Flex689": {
      "callbacks": {}
    },
    "Flex697": {
      "callbacks": {}
    },
    "Flex690": {
      "callbacks": {}
    },
    "Flex698": {
      "callbacks": {}
    },
    "Flex691": {
      "callbacks": {}
    },
    "TextBox361": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox362": {
      "custom": {
        "text": "Explore the websites built using Atri framework"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button116": {
      "custom": {
        "text": "Add your site"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button235": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox499": {
      "custom": {
        "text": "Title"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input19": {
      "custom": {
        "value": "",
        "placeholder": "Title of the website....."
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input20": {
      "custom": {
        "value": "",
        "placeholder": "About Text...."
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox500": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox501": {
      "custom": {
        "text": "Creator Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input21": {
      "custom": {
        "value": "",
        "placeholder": "Name....."
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input22": {
      "custom": {
        "value": "",
        "placeholder": "https://github.com/"
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox502": {
      "custom": {
        "text": "Github Url"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox503": {
      "custom": {
        "text": "Published Url"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input23": {
      "custom": {
        "value": "",
        "placeholder": "https://atri-apps.github.io/"
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox504": {
      "custom": {
        "text": "*Add the tags seperated by ,"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input24": {
      "custom": {
        "value": "",
        "placeholder": "open-source, ocr, ml"
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox505": {
      "custom": {
        "text": "Tags"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload3": {
      "custom": {
        "multiple": false,
        "showFilename": true,
        "text": "Upload",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "TextBox506": {
      "custom": {
        "text": "Demo Image"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload4": {
      "custom": {
        "multiple": false,
        "showFilename": true,
        "text": "Upload",
        "disabled": false
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "self": true,
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "TextBox507": {
      "custom": {
        "text": "Creator's Image"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image319": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/cross-svgrepo-com%20(1).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image318": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Screen%20Shot%202022-11-06%20at%202.45%201.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox497": {
      "custom": {
        "text": "Title of the website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox498": {
      "custom": {
        "text": "Personal blog with minimalist design. It includes four pages - landing page, blog, talks and about page."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Tag_1": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Tag_2": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Tag_3": {
      "custom": {
        "text": ""
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image315": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/git.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image316": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image317": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/user.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox496": {
      "custom": {
        "text": "Creator Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox363": {
      "custom": {
        "text": "FILTERS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox364": {
      "custom": {
        "text": "10 results"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Filter_Btn_1": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Filter_Btn_2": {
      "custom": {
        "text": "ocr"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Filter_Btn_3": {
      "custom": {
        "text": "machine-learning"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Filter_Btn_4": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Filter_Btn_5": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Filter_Btn_6": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Filter_Btn_7": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Filter_Btn_8": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Filter_Btn_9": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Image_1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image-6-compressed.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Title_1": {
      "custom": {
        "text": "Restaurante X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Text_1": {
      "custom": {
        "text": "Full Stack Website for your Restaurant"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_1_a_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_1_b_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_1_c_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Github_1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/git.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Deploy_1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Image_1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Name_1": {
      "custom": {
        "text": "Sanskar Gupta"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Image_2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image-4-compressed.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Name_2": {
      "custom": {
        "text": "Darshita Chaturvedi"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Image_2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Deploy_2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Github_2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/git.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Text_2": {
      "custom": {
        "text": "Personal blog with minimalist design."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Title_2": {
      "custom": {
        "text": "Personal Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_2_c_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_2_b_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_2_a_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Image_3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image-1-compressed.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Title_3": {
      "custom": {
        "text": "E-commerce Website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Text_3": {
      "custom": {
        "text": "Full Stack Ecommerce Website with dynamic product's and pagination support."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Github_3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/git.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Deploy_3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Image_3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Name_3": {
      "custom": {
        "text": "Sanskar Gupta"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_3_c_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_3_b_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_3_a_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Image_6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image-5-compressed.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Name_6": {
      "custom": {
        "text": "Darshita Chaturvedi"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Image_6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Deploy_6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Github_6": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/git.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Text_6": {
      "custom": {
        "text": "This is a skeleton repositery for Software Developers or Machine Learning Engineers who want to put a nice portfolio on the web and showcase their projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Title_6": {
      "custom": {
        "text": "Portfolio Website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_6_c_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_6_b_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_6_a_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Image_5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/image-2-compressed.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Title_5": {
      "custom": {
        "text": "Codely X"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Text_5": {
      "custom": {
        "text": "This is a Ed-Tech website with awesome design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Github_5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/git.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Deploy_5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Image_5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Name_5": {
      "custom": {
        "text": "Sanskar Gupta"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_5_c_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_5_b_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_5_a_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Image_4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/sports_website.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Name_4": {
      "custom": {
        "text": "Dibas Borborah"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Creator_Image_4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/christopher-campbell-rDEOVtE7vOs-unsplash.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Deploy_4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/Vector.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Github_4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/git.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Text_4": {
      "custom": {
        "text": "This is a sports website with awesome design"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Title_4": {
      "custom": {
        "text": "Sports Website"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_4_c_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_4_b_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Card_Tag_4_a_Text": {
      "custom": {
        "text": "open-source"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image303": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aiga_left_arrow_bg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image304": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/aiga_right_arrow_bg.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox474": {
      "custom": {
        "text": "1 of 2"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox453": {
      "custom": {
        "text": "Contribution 1-6"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image278": {
      "custom": {
        "alt": "github",
        "src": "/app-assets/github_darkmode.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox430": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Apps",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox431": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Button200": {
      "custom": {
        "text": "Get Started"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/category/getting-started",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox438": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image279": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_without_bg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox448": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox449": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox450": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox451": {
      "custom": {
        "text": "Showcase"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Showcase"
            }
          }
        ]
      }
    },
    "Image300": {
      "custom": {
        "alt": "made with atri",
        "src": "/app-assets/made_with_atri_2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox472": {
      "custom": {
        "text": "Copyright © 2022 Pulastya, Inc."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox466": {
      "custom": {
        "text": "Terms of Use"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox467": {
      "custom": {
        "text": "Privacy Policy"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox456": {
      "custom": {
        "text": "Full stack web development framework to build Progressive Web Apps faster"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image295": {
      "custom": {
        "alt": "github",
        "src": "/app-assets/github%20star%20button.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox455": {
      "custom": {
        "text": "Atri Labs"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image294": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logo_without_bg.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image296": {
      "custom": {
        "alt": "slack",
        "src": "/app-assets/slack.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://join.slack.com/t/atricommunity/shared_invite/zt-1e756m1at-bZBxngvw7KWWO0riI4pc0w",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image297": {
      "custom": {
        "alt": "youtube",
        "src": "/app-assets/youtube.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.youtube.com/channel/UC1uR2Q5x_8olWS_Y4PdK1Bw",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image298": {
      "custom": {
        "alt": "twitter",
        "src": "/app-assets/twitter.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://twitter.com/atrilabs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "Image299": {
      "custom": {
        "alt": "linkedin",
        "src": "/app-assets/linkedin.png"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://www.linkedin.com/company/atri-labs",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox468": {
      "custom": {
        "text": "ABOUT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox457": {
      "custom": {
        "text": "Conference talks"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/conferences",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox469": {
      "custom": {
        "text": "RESOURCES"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox458": {
      "custom": {
        "text": "Docs"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox459": {
      "custom": {
        "text": "Tutorials"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/tutorials/bkg_swapper",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox460": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://docs.atrilabs.com/blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox470": {
      "custom": {
        "text": "SHOWCASE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox461": {
      "custom": {
        "text": "Ecommerce website"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Apps/full_stack_ecommerce_website",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox462": {
      "custom": {
        "text": "Personal blog"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Apps/personal_blog",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox463": {
      "custom": {
        "text": "Repo traffic history"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Apps/traffic-history",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox471": {
      "custom": {
        "text": "OPEN SOURCE"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox464": {
      "custom": {
        "text": "Contribute"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine#how-to-contribute",
              "target": "_blank"
            }
          }
        ]
      }
    },
    "TextBox465": {
      "custom": {
        "text": "Discussions"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "external",
              "url": "https://github.com/Atri-Labs/atrilabs-engine/discussions",
              "target": "_blank"
            }
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
