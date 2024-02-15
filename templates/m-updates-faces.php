<div class="t-part t-grad m-upadates-faces">

	<div class="t-grid">

		<h2 class="l-tac t-part-title">
			עדכונים אחרונים באתר - לימודי תואר שני
		</h2>
	
		<ul class="norm-ul l-flex l-tac f-w t-boxes-half l-box-16 updates-faces-list">
			
			<?php for ( $i = 1; $i <= 18; $i++ ) : ?>
			
			<li class="box l-column updates-faces-item">
				
				<a href="assets/images/about-faces/<?= $i; ?>.jpg" data-alt="" class="lazy_load"></a>

				<div class="t-row-small l-frame updates-faces-frame">

					<noscript>
						<img src="assets/images/about-faces/<?= $i; ?>.jpg" alt=""/>
					</noscript>

				</div>

				<h3 class="norm-title fs-small updates-faces-title">
					שם איש צוות
				</h3>
				
			</li>

			<?php endfor; ?>

		</ul>

	</div>

</div>