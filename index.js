import DOMHandler from "./scripts/dom-handler.js"
import { HomePage } from "./scripts/pages/homepage.js"

function init() {
  DOMHandler.load(HomePage);
}

init()