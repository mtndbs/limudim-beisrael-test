<div class="header-institute">

	<?php include ( 'templates/c-breadcrumbs.php' ); ?>	

	<div class="t-grid">

		<div class="l-flex header-institute-table">

			<div class="l-column f-jc header-institute-text">
				
				<div class="l-flex t-row header-institute-text-top">

					<h1 class="header-internal-title l-fg1">
						ללמוד במסלול האקדמי
						המכללה למנהל
					</h1>

					<div class="t-space is-hidden--mobile"></div>
					<div class="t-sep is-hidden--desktop"></div>

					<img class="l-shrink header-institute-logo" src="assets/images/logo-michlala-leminhal.jpg" alt=""/>

				</div>

				<div class="t-box-pad t-row w100 svg-tip tip-equilateral form-strip-yellow-formHold header-institute-form-h">

					<h2 class="c-c3 header-institute-form-title">
						שירות אישי - צור קשר
					</h2>

					<form class="header-institute-form">

						<div class="l-flex t-boxes-small header-institute-form-table">

							<div class="w33">

								<input 
									type="text"
									name="full_name"
									class="t-field"
									aria-label="שם מלא"
									placeholder="שם מלא"
								/>
								
							</div>

							<div class="w33">

								<input 
									type="text"
									name="phone"
									class="t-field"
									aria-label="טלפון"
									placeholder="טלפון"
								/>
								
							</div>

							<div class="w33">

								<input 
									type="text"
									name="email"
									class="t-field"
									aria-label="אימייל"
									placeholder="אימייל"
								/>
								
							</div>

						</div>

						<div class="t-row-half"></div>

						<div class="l-flex f-c header-institute-form-bottom">
							
							<div class="l-fg1 t-bullet">

								<label class="t-checkbox">
									<input checked type="checkbox" name="approve terms"/>
									<span>
										אני מסכים/ה לתנאי השימוש ומדיניות הפרטיות
									</span>
								</label>

							</div>

							<label class="l-rela t-btn submit-hold">
								<strong class="h100 l-center fs-large t-arr-left">
									שלח
								</strong>
								<input 
									type="submit"
									class="l-spread t-submit"
									aria-label="שלח"
								/>
							</label>

						</div>
										
					</form>

				</div>

				<?php include ( 'templates/c-share-plugins.php' ); ?>

			</div>

			<div id="header_institute_slider_border" class="t-space"></div>

			<div class="l-shrink header-institute-slider-cell">

				<div class="header-institute-slider">
					
					<?php for ( $i = 1; $i < 5; $i++ ) : ?>

					<figure class="header-institute-item" <?php if ( $i === 1 ) echo 'style="background-image:url(assets/images/inst/'. $i . '.jpg);"'; ?>>
						<?php if ( $i !== 1 ) : ?>
						<img class="l-obscure" data-lazy="assets/images/inst/<?= $i; ?>.jpg" alt=""/>
						<?php endif; ?>

						<figcaption class="fs-small header-institute-caption">
							המכללה האקדמית צפת
						</figcaption>

					</figure>
					
					<?php endfor; ?>

				</div>

			</div>

		</div>

	</div>

</div>

<?php include ('c-sections-menu.php'); ?>