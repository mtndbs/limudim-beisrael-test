<h2 class="tab-cont-title">
	מגוון טיפים שסטודנטים לתואר שני כתבו במיוחד בשבילכם
</h2>

<template id="tip_placeholder" hidden>
	<div class="slick-slide-loading">
		<div class="loading-ring"></div>
		<p>בטעינה..</p>
	</div>
</template>

<div class="l-slider tips-list m-tab-opinion"
     data-ajax-url="admin/ajax-tips.php"
     data-ajax-function="slick_ajax_callback"
     data-ajax-placeholder="#opinion_placeholder"
     data-ajax-total-items="7"
>

	<?php
	for ( $i = 0; $i < 2; $i++ ) {
		$src = 'assets/images/tip.jpg';
		if ( $i === 1 ){
			$src = 'assets/images/tip.jpg';
		}

		include dirname(__FILE__) . '/loop-tip.php';
	}
	?>

</div>

<div class="t-row"></div>

<div class="l-tac">
	<a href="#" class="c-c2 intro-counter-desc">
		לטיפים נוספים לחץ כאן
	</a>
</div>
