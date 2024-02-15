<div class="t-part t-striped m-more-programs" data-menutitle="עוד מסלולי לימוד">

	<div class="t-grid">

		<h2 class="l-tac t-part-title">
			עוד מסלולי לימוד - המסלול האקדמי המכללה למנהל
		</h2>

		<div class="l-flex programs-table">

			<div class="l-fg1-w0 programs-table-cell">

				<ul class="norm-ul c-c3 more-programs-list">

					<?php foreach( programs() as $item ) : ?>
					
					<li class="l-flex f-t t-row-small more-programs-item">

						<i class="svgIcon icon-b-arr t-bullet"></i>

						<div class="l-fg1">

							<a href="#" class="norm-a t-hover fs-medium fw-medium more-programs-link">
								<?php echo $item['title']; ?>
							</a>

							<div class="t-row-small"></div>

							<ul class="norm-ul more-programs-list-sub" style="display:none" aria-hidden="true">

								<?php foreach ( $item['list'] as $sub ) : ?>

								<li class="t-row-small">
									
									<a href="#" class="norm-a t-hover fs-small">
										<?= $sub; ?>

									</a>

								</li>

								<?php endforeach; ?>

							</ul>

						</div>

					</li>

					<?php endforeach; ?>

				</ul>

			</div>

			<div class="t-sep is-hidden--mobile"></div>

			<div class="l-fg1-w0 programs-table-cell">

				<ul class="norm-ul c-c2 more-programs-list">

					<?php foreach( programs() as $item ) : ?>
					
					<li class="l-flex f-t t-row-small more-programs-item">

						<i class="svgIcon icon-b-arr t-bullet"></i>

						<div class="l-fg1">

							<button class="norm-a t-hover fs-medium fw-medium more-programs-link">
								<?php echo $item['title']; ?>
							</button>

							<div class="t-row-small"></div>

							<ul class="norm-ul more-programs-list-sub" style="display:none" aria-hidden="true">

								<?php foreach ( $item['list'] as $sub ) : ?>

								<li class="t-row-small">
									
									<a href="#" class="norm-a t-hover fs-small">
										<?= $sub; ?>

									</a>

								</li>

								<?php endforeach; ?>

							</ul>

						</div>

					</li>

					<?php endforeach; ?>

				</ul>

			</div>

		</div>

	</div>

</div>