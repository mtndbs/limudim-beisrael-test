<section class="t-part l-rela t-striped froums-cat">
	
	<div class="t-grid">

		<header class="l-flex t-row2 forums-cat-top">

			<h2 class="l-flex f-c t-part-title">
				<?= $item['title']; ?>
			</h2>

			<div class="t-sep"></div>

			<div class="l-flex f-c l-shrink forums-cat-updated" data-icon="clock">
				
				<time class="fs-small t-line-height forums-cat-date">
					עודכן לאחרונה:
					<span>
						לפני 3 דקות
					</span>
				</time>
			</div>

		</header>

		<div class="l-flex forums-cat-table">

			<ul class="l-fg1 norm-ul l-flex f-w t-boxes-small forums-cat-list">

				<?php foreach( $item['forums'] as $forum ) : ?>

				<li class="forums-cat-item">

					<a href="#" class="c-c3 norm-a l-flex forums-cat-link">

						<span class=" l-center">
							<?= $forum['title']; ?>

						</span>
						
						<span class="t-sep" style="font-size: 30%;"></span>

						<span class="c-black fs-small l-center forums-cat-counter">
							<?= $forum['counter']; ?>

						</span>
					</a>

				</li>

				<?php endforeach; ?>

			</ul>

			<?php if ( ! empty ($item['image'])): ?>
			
			<div class="t-space"></div>

			<div class="l-shrink l-flex f-c forums-cat-image">
				<a href="assets/images/forums/<?= $item['image']; ?>" class="lazy_load" data-alt="example"></a>
				<figure>
					<noscript>
						<img src="assets/images/forums/<?= $item['image']; ?>" alt="example"/>
					</noscript>
				</figure>
			</div>

			<?php endif; ?>

		</div>

	</div>

</section>

