import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

library.add(faUserSecret);

export default ({ Vue }) => {
  Vue.component("font-awesome-icon", FontAwesomeIcon);
};
