<h2 class="tab-cont-title">
	מה סטודנטים מספרים עלינו?
</h2>

<template id="opinion_placeholder" hidden>
	<div class="slick-slide-loading">
		<div class="loading-ring"></div>
		<p>בטעינה..</p>
	</div>
</template>

<div class="l-slider tips-list m-tab-opinion"
     data-ajax-url="admin/ajax-opinions.php"
     data-ajax-function="slick_ajax_callback"
     data-ajax-placeholder="#opinion_placeholder"
     data-ajax-total-items="7"
>

	<?php for ( $i = 0; $i < 2; $i++ ) include ( dirname(__FILE__) . '/loop-opinion.php' ); ?>

</div>
