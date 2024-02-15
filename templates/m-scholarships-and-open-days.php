<div class="t-part t-striped m-more-programs" data-menutitle="מלגות וימים פתוחים">

	<div class="t-grid">

		<div class="l-flex programs-table">

			<div class="l-fg1-w0 programs-table-cell schoOpenDays-cell">

				<h2 class="t-part-title schoOpenDays-title" data-icon="drop-b">
					מלגות
				</h2>

				<ul class="norm-ul c-c3 t-columns-layout--2 schoOpenDays-list">

					<?php foreach( scholarships_open_days() as $item ) : ?>
					
					<li class="l-flex f-t t-row-small more-programs-item">

						<i class="svgIcon icon-b-arr t-bullet"></i>

						<div class="l-fg1">

							<a href="#" class="norm-a t-hover fs-medium fw-medium more-programs-link">
								<?php echo $item['title']; ?>
							</a>
							<time class="l-block fs-small c-greyt">
								09.04.2017
							</time>

						</div>

					</li>

					<?php endforeach; ?>

				</ul>

			</div>

			<div class="t-sep is-hidden--mobile"></div>

			<div class="l-fg1-w0 programs-table-cell schoOpenDays-cell">
				
				<h2 class="t-part-title schoOpenDays-title" data-icon="drop-b">
					ימים פתוחים
				</h2>

				<ul class="norm-ul c-c3 t-columns-layout--2 schoOpenDays-list">

					<?php foreach( scholarships_open_days() as $item ) : ?>
					
					<li class="l-flex f-t t-row-small more-programs-item">

						<i class="svgIcon icon-b-arr t-bullet"></i>

						<div class="l-fg1">

							<a href="#" class="norm-a t-hover fs-medium fw-medium more-programs-link">
								<?php echo $item['title']; ?>
							</a>
							<time class="l-block fs-small c-greyt">
								09.04.2017
							</time>

						</div>

					</li>

					<?php endforeach; ?>

				</ul>

			</div>

		</div>

	</div>

</div>