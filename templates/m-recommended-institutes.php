<section class="t-part has-slider m-reco-insts">

	<div class="t-grid">

		<h3 class="l-tac t-part-title t-part-title--high">
			מוסדות לימוד מומלצים
		</h3>
		
		<div class="l-slider reco-insts-slider">
			
			<?php for ( $i = 1; $i < 13; $i++ ) : ?>

			<div class="reco-insts-item">
				
				<a href="assets/images/schools/<?= $i; ?>.jpg" data-alt="hi" class="lazy_load"></a>
				
				<a href="#" class="reco-insts-frame">
					
					<noscript><img src="assets/images/schools/<?= $i; ?>.jpg" alt="hi"/></noscript>
				</a>

			</div>

			<?php endfor; ?>

		</div>

	</div>

</section>