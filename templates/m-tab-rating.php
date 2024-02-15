<?php 

$temp = array( 
	array (
		'val'=> 4.6,
		'title' => 'המרכז ללימודים אקדמיים',
	),
	array (
		'val'=> 4.5,
		'title' => 'המרכז הבינתחומי בהרצליה',
	),
	array (
		'val'=> 3.4,
		'title' => 'מכללת תל חי',
	),
	array (
		'val'=> 2.8,
		'title' => 'האוניברסיטה הפתוחה',
	),

);

?>

<h2 class="tab-cont-title">
	מי המוסדות המובילים לתואר שני?
</h2>

<ul class="norm-ul t-row l-tac l-flex f-w l-box-25 institutes-charts-list">

	<?php foreach ( $temp as $item ) : ?>

	<li class="box institutes-charts-item">

		<div class="l-rela t-row-half institutes-charts-item-h">

			<div class="js-doughnutChart piechart-theme-c1" data-percent="<?= $item['val'] * 10; ?>"></div>

			<div class="l-column l-center l-spread fs-light">

				<div class="l-rela t-line-height institutes-chart-value">
					<?= $item['val']; ?>

				</div>

				<div class="fs-small institutes-chart-desc">
					768 מדרגים
				</div>

			</div>

		</div>

		<h3 class="norm-title institutes-charts-title">
			<?= $item['title']; ?>

		</h3>
	</li>

	<?php endforeach; ?>

	<li><!-- empty for mobile slider --></li>

</ul>

<table class="t-row tab-rating-table">

	<thead class="fs-small fw-light">
		<tr>
			<th scope="col">
				מוסד לימודים
			</th>
			<th scope="col">
				ציון ממוצע
			</th>
			<th scope="col">
				מספר מדרגים
			</th>
		</tr>
	</thead>

	<tbody>
		<tr>
			<td scope="row">
				המרכז האקדמי שערי מדע ומשפט
			</td>
			<td>
				2.1
			</td>
			<td>
				114
			</td>
		</tr>
		<tr>
			<td scope="row">
				האוניברסיטה העברית בירושלים
			</td>
			<td>
				2.1
			</td>
			<td>
				114
			</td>
		</tr>
		<tr>
			<td scope="row">
				המרכז האקדמי למשפט ולעסקים
			</td>
			<td>
				2.1
			</td>
			<td>
				114
			</td>
		</tr>
	</tbody>

</table>

<div class="l-tac">
	<a href="#" class="c-c2 intro-counter-desc">
		לדירוג המלא לחץ כאן
	</a>
</div>
