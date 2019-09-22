import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCoins,
    faCreditCard,
    faAt,
    faColumns,
    faCog,
    faArrowUp,
    faArrowDown,
    faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

/**
 * All icons that will be used in this app need to be preloaded here
 */

export default () => {
  library.add(faCoins, faCreditCard, faAt, faColumns, faCog, faArrowDown, faArrowUp, faSignOutAlt);
};
