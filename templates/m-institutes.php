<?php
$temp = array(
	array(
		'title' => 'האתר מספק שירות ייחודי ובחינם',
	),
	array(
		'title' => 'ההצלחה שלך מתחילה כאן',
	),
	array(
		'title' => 'אתר לימודים בישראל הוקם',
	),
	array(
		'title' => 'האתר מספק שירות ייחודי ובחינם',
	),
	array(
		'title' => 'רוצה להשוות נתונים בין מוסדות',
	),
	array(
		'title' => 'רוצה להשוות נתונים בין מוסדות',
	),

);

?>

<div class="t-part m-institutes">

	<div class="t-grid">

		<div class="l-flex f-c f-w t-boxes l-box-50">

			<div class="box t-part-text">

				<h2 class="t-part-title">
					תן למוסדות הלימוד לרדוף אחריך
				</h2>

				<nav class="l-flex t-boxes institutes-list-table">

					<ul class="l-fg1 norm-ul box institutes-list">

						<?php foreach ($temp as $item) : ?>

							<li class="t-row-half whats-new-list-item" data-icon="b-arr">

								<a href="#" class="t-hover fw-regular norm-a fs-small c-c3">
									<?= $item['title']; ?>

								</a>

							</li>

						<?php endforeach; ?>

						<li>
							<a href="#" class="fs-small read-more">
								לא מצאת?

							</a>
						</li>

					</ul>

					<ul class="l-fg1 norm-ul box institutes-list">

						<?php foreach ($temp as $item) : ?>

							<li class="t-row-half whats-new-list-item" data-icon="b-arr">

								<a href="#" class="t-hover fw-regular norm-a fs-small c-c3">
									<?= $item['title']; ?>

								</a>

							</li>

						<?php endforeach; ?>

						<li>
							<a href="#" class="fs-small read-more">
								עוד מוסדות לימוד?

							</a>
						</li>


					</ul>

				</nav>

			</div>

			<div class="box t-part-media">

				<a href="assets/images/students.webp" data-alt="some alt text" class="lazy_load"></a>

				<figure class="l-frame part-video-frame">

					<noscript><img src="assets/images/students.webp" alt="some alt text" /></noscript>

				</figure>

			</div>

		</div>


	</div>

</div>