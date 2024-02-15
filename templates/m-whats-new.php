<?php 
	$temp = array (
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
	);
	$temp_titles = array(
		array (
			'title' => 'חדשות ועדכונים',
			'link' => 'לכל החדשות והעדכונים',
		),
		array (
			'title' => 'עכשיו בפורום',
			'link' => 'לפורום המלא',
		),
		array (
			'title' => 'מלגות חדשות',
			'link' => 'לכל המלגות',
		),
		array (
			'title' => 'ימים פתוחים',
			'link' => 'לכל הימים הפתוחים',
		),
	);
?>

<section class="t-part t-striped whats-new">

	<div class="t-grid">

		<h2 class="l-tac t-part-title">
			<?php if ( is ('index') ) : ?>
			מה חדש בלימודים?
			<?php elseif ( is ( 'category' ) ) : ?>
			עדכונים אחרונים באתר - לימודי תואר שני
			<?php elseif ( is ( 'forums' ) ) : ?>
			עדכונים אחרונים באתר - מלגות
			<?php endif; ?>
		</h2>

		<div class="l-oh">

			<div class="l-flex f-w t-boxes l-box-25 whats-new-table">

				<?php foreach ( $temp_titles as $t_item ) : ?>

				<section class="box whats-new-item">

					<h3 class="l-rela fs-large c-c3 norm-title whats-new-title">

						<?= $t_item['title']; ?>
						
						<button class="mobile-open-whats-new-content svgIcon icon-drop-b" aria-title="הצג תוכן"></button>
					</h3>

					<div class="whats-new-content">

						<div class="t-row-half"></div>

						<ul class="norm-ul whats-new-list">

							<?php foreach ( $temp as $item ) : ?>

							<li class="t-row-half whats-new-list-item" data-icon="b-arr">

								<a href="#" class="fs-small c-c3">
									<?= $item['title']; ?>
									
								</a>

								<div class="fs-smallest whats-new-date">
									09.05.2017
								</div>
									
							</li>

							<?php endforeach; ?>

						</ul>

						<div class="t-row-half"></div>

						<a href="#" class="fs-small read-more">
							<?= $t_item['link']; ?>

						</a>

					</div>

				</section>

				<?php endforeach; ?>

			</div>

		</div>

	</div>

</section>