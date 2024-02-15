<?php
	$tabs = array(
		'opinion' => 'חוות דעת',
		'review' => 'סקירה כללית',
		'rating' => 'דירוג מוסדות',
		'institutePrefer' => 'מכללה או אוניברסיטה',
		'tips' => 'טיפים מסטודנטים',
	);
?>

<div class="t-bg-c3 m-tabs">

	<div class="l-tac t-grid">

		<div class="box t-part m-tabs-top">

			<h2 class="c-white t-part-title">
				חוות דעת של סטודנטים תואר שני
			</h2>

			<div class="l-flex f-c f-jc f-w opinions-ratings">

				<h4 class="norm-title fs-btn t-bullet">
					<strong>
						התקבלו 1252 דירוגים
					</strong>
					<span>
						בציון ממוצע 4.1 מתוך 5
					</span>
				</h4>

				<div class="ratings-counter" data-stars="5"></div>

			</div>

		</div>

		<ul class="norm-ul l-tac fw-medium l-flex tabs-opinions tabs-table">

			<?php
			$isFirstTab = true;
			foreach ( $tabs as $tab => $title ) : ?>

			<li class="l-td-b tabs-table-item">

				<button data-id="<?=$tab; ?>"
				        data-set="opinions"
				        class="fs-btn w100 l-block tabs-item-link"
				        <?= ! $isFirstTab ? 'data-ajax-url="admin/example/tab-'.$tab.'.php"' : ''; ?>
				        <?= ! $isFirstTab ? 'data-ajax-function="tab_ajax_callback_'.$tab.'"' : ''; ?>
				>
					<?= $title; ?>
				</button>

			</li>

				<?php
				$isFirstTab = false;
			endforeach;
			?>

		</ul>

	</div>

</div>

<div class="t-part tabs-content-set">

	<div class="t-grid">

		<?php
		$isFirstTab = true;
		foreach ( $tabs as $tab => $title ) : ?>

		<div id="tab_content-<?= $tab; ?>" aria-hidden="true" class="tabs-content cont-opinions">

			<?php
			if ( $isFirstTab ) {
				include ( 'templates/m-tab-' . $tab . '.php' );
			} else {
				include ( 'templates/m-tab-loader.php' );
			}

			$isFirstTab = false;
			?>

		</div>

		<?php endforeach; ?>

	</div>

</div>
