<?php 
	$temp = array (
		array (
			'title' => 'פורומים בתחום',
			'link' => 'עוד בפורומים',
		),
		array (
			'title' => 'המסלולים המבוקשים',
			'link' => 'לכל המסלולים',
		),
	);
	$temp_titles = array(
		array (
			'title' => 'האתר מספק שירות ייחודי ובחינם',
		),
		array (
			'title' => 'ההצלחה שלך מתחילה כאן',
		),
		array (
			'title' => 'אתר לימודים בישראל הוקם',
		),
		array (
			'title' => 'האתר מספק שירות ייחודי ובחינם',
		),
		array (
			'title' => 'רוצה להשוות נתונים בין מוסדות',
		),

		array (
			'title' => 'האתר מספק שירות ייחודי',
		),
		array (
			'title' => 'ההצלחה שלך מתחילה כאן',
		),
		array (
			'title' => 'אתר לימודים בישראל הוקם',
		),
		array (
			'title' => 'האתר מספק שירות ייחודי',
		),
		array (
			'title' => 'רוצה להשוות נתונים בין מוסד',
		),
	);
?>

<section class="t-part t-striped m-category-bottom-links">

	<div class="t-grid">

		<div class="l-oh">

			<div class="l-flex f-w t-boxes l-box-50 whats-new-table">

				<?php foreach ( $temp as $t_item ) : ?>

				<section class="box whats-new-item">

					<h3 class="l-rela fs-large c-c3 norm-title whats-new-title">

						<?= $t_item['title']; ?>
						
						<button class="mobile-open-whats-new-content svgIcon icon-drop-b" aria-title="הצג תוכן"></button>
					</h3>
					
					<div class="t-row"></div>

					<div class="whats-new-content">

						<div class="t-row-half"></div>

						<ul class="norm-ul whats-new-list columns-2">

							<?php foreach ( $temp_titles as $_item ) : ?>

							<li class="t-row-half whats-new-list-item" data-icon="b-arr">

								<a href="#" class="fs-small c-c3">
									<?= $_item['title']; ?>
									
								</a>
									
							</li>

							<?php endforeach; ?>

						</ul>

						<div class="t-row-half"></div>

						<div class="columns-2">

							<div>&nbsp;</div>

							<a href="#" class="fs-small read-more">
								<?= $t_item['link']; ?>

							</a>

						</div>

					</div>

				</section>

				<?php endforeach; ?>

			</div>

		</div>

	</div>

</section>