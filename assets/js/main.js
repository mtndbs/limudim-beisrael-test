


import "./general/a-strict-mode.js";
import "./general/a-accessible-bundle.js";
import "./general/a-lib.js";
import "./general/a-lazyload.js";
import "./general/a-lightbox.js";
import "./general/a-popup.js";
import "./general/a-shares.js";

import "./plugins/jquery.autocomplete.min";

import "./a-smooth-anchor.js";
import "./a-chart-doughnut.js";
import "./a-chart-columns-standard.js";
import "./a-chart-column.js";
import "./a-chart-pie.js";
import "./a-decorations.js";
import "./a-sections-menu.js";
import "./a-bg.js";

import "./l-header.js";
import "./l-header-internal.js";
import "./l-header-institute.js";
import "./l-search.js";
import "./l-footer.js";
import "./m-tips.js";
import "./m-reco-insts.js";
import "./m-whats-new.js";
import "./m-content.js";
import "./m-tabs.js";
import "./m-forum.js";
import "./m-scholarships.js";
import "./m-more-programs.js";
import "./m-popup-comments.js";
import "./m-autocomplete.js";
import "./progress-bar.js";

import "./a-accessibility.js";

let btn = document.getElementById('socialTrigger')

if (btn !== undefined) {
	btn.addEventListener('click', e => e.target.parentElement.classList.toggle('visible'))
}
 
lib.run_all(new Main());

