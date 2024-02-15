<?php 

	$surveys = array(
		array(
			'title' => 'קושי להתקבל ללימודים',
			'values' => array(18,100),
		),
		array(
			'title' => 'שביעות רצון כללית',
			'values' => array(38,62),
		),
		array(
			'title' => 'יחס אישי מהמרצים',
			'values' => array(38,62),
		),
		array(
			'title' => 'העברת החומר בצורה מובנת',
			'values' => array(38,62),
		),
	);

?>

<h2 class="tab-cont-title">
	סטודנטים עונים איפה יותר עדיף ללמוד - במכללה או אוניברסיטה?
</h2>


<div class="l-slider slider-4 t-row-double">

	<?php foreach ( $surveys as $item ) : ?>

	<section class="institute-item">
		
		<div 
		
			data-columns="<?php echo implode( ',', $item['values'] ); ?>"
			data-x="<?= $item['title']; ?>"
			class="columns-institute">
		
		</div>

	</section>

	<?php endforeach; ?>

</div>

<ul class="norm-ul l-center institute-legend">
	
	<li class="institute-legend-item for-column-1">
		אוניברסיטה
	</li>
	
	<li class="institute-legend-item for-column-2">
		מכללה
	</li>	

</ul>
