	<?php 

	$surveys = array(
		array(100,22,18,98,20),
		array(9,32,23,40,78),
		array(15,22,78,34,20),
		array(15,99,78,32,20),
		array(15,100,69,32,20),
		array(15,2,18,50,20),
		array(49,22,18,1,20),
		array(15,22,88,38,20),
	);

	?>
<div class="l-slider slider-4 t-row-double">
	<?php foreach ( $surveys as $item ) : ?>

	<section class="review-item">

		<h3 class="l-tac norm-title t-line-height t-row-half review-item-title">
			באיזו מידה היה קשה להתקבל ללימודים?
		</h3>

		<div class="t-box-w svg-tip t-shadow-small">
			
			<div 
			
				data-columns="<?php echo implode( ',', $item ); ?>"
				data-x="שביעות רצון נמוכה,שביעות רצון גבוהה"
				class="columns-standard"></div>

		</div>

	</section>
	<?php endforeach; ?>
</div>
