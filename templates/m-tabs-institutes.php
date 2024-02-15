<?php
	$tabs = array(
		'nationwide' => 'כל הארץ',
		'north' => 'צפון',
		'south' => 'דרום',
		'center' => 'מרכז',
		'lowland' => 'שפלה ',
		'jerusalem' => 'ירושלים',
		'sharon' => 'שרון',
	);
?>
<div class="t-part m-institutes-tabs">

	<div class="t-grid">

		<h3 class="l-center t-part-title">
			מוסדות לימוד תואר שני מנהל עסקים
		</h3>

		<ul class="norm-ul t-grad-whiteToGrey t-row c-c3 l-tac fw-medium l-flex tabs-table tabs-institutes">

			<?php foreach ( $tabs as $tab => $title ) : ?>

			<li class="l-td-b tabs-table-item">

				<button data-id="<?=$tab; ?>" data-set="institutes" class="t-hover w100 tabs-item-link btn-navigate-institutes">
					<?= $title; ?>
				</button>

			</li>

			<?php endforeach; ?>

		</ul>

		<?php foreach ( $tabs as $tab => $title ) : ?>

		<nav id="tab_content-<?= $tab; ?>" aria-hidden="true" class="tabs-content cont-institutes">

			<ul class="norm-ul l-flex f-w t-boxes-half l-box-50 institutes-location-list">

				<?php
				for ( $i = 1; $i <= 8; $i++ ) :

					include ( 'templates/loop-inst-list.php' );

				endfor; ?>

			</ul>

			<div class="t-row"></div>

			<ul class="norm-ul l-flex c-c3 f-w t-boxes-half l-box-25">

				<?php for ( $i = 0; $i < 12; $i++ ) : ?>

				<li class="box more-institutes-item" data-icon="b-arr">
					
					<a href="#" class="t-hover norm-a">
						אוניברסיטת חיפה - תואר שני
						מנהל עסקים
					</a>						
					
				</li>

				<?php endfor; ?>

			</ul>

		</nav>

		<?php endforeach; ?>

		<div class="t-row"></div>
		
		<div class="l-tac">

			<a href="#" class="fs-small read-more norm-a l-ibm">
				כל מוסדות הלימוד - תואר שני במנהל עסקים
			</a>

		</div>

	</div>

</div>
