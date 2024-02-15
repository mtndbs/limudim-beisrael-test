<div class="is-hidden--desktop t-grid header-internal-mobile-content in-scholarships"></div>

<section class="t-part m-sholarships">

	<div class="t-grid">

		<header class="l-flex t-row f-c scholarships-top">
			
			<div class="l-fg1 t-bullet-wide t-box-style scholarships-search-h">

				<form class="l-rela l-flex fw-light scholarships-search">

					<input class="norm-field t-bg-white l-fg1-w0 top-search-field" type="search" placeholder="חיפוש מלגה" value="" aria-label="חיפוש מלגה">

					<button class="t-bg-c2 l-rela top-search-submit" value="" aria-label="לחץ לחיפוש">
						<i class="l-abs-center svgIcon icon-search"></i>
					</button>

				</form>

			</div>
			
			<ul class="l-nowrap t-line-height c-c3 norm-ul scholarships-top-links">

				<li class="l-flex f-c scholarships-top-item">
					<button class="scholarships-top-link-s add-new-scholarship">
						
						הוספת מלגה חדשה

					</button>
				</li>
				<li class="l-flex f-c scholarships-top-item">
					<a href="#" class="scholarships-top-link-s">
						פורום מלגות
					</a>
				</li>
				<li class="l-flex f-c scholarships-top-item">
					<a href="#" class="scholarships-top-link-s">
						הצטרפו לדף שלנו בפייסבוק
					</a>
				</li>

			</ul>

		</header>

		<div class="l-flex t-boxes-half scholarships-table"> 

			<aside class="scholarships-sidebar">

				<header class="t-row-half">

					<h2 class="fs-large fw-medium c-c3 scholarships-table-title mobile-toggle-filter" data-icon="filter" data-popup="scholarships-filter" data-popuptitle="מלגות לפי תחומים">
						מלגות לפי תחומים
					</h2>

				</header>

				<nav id="scholarships-filter" class="scholarships-filter">

					<ul id="scholarships-links" class="norm-ul fw-medium c-c3 l-oh scholarships-links">

						<?php $c=0;foreach ( scholarships_list() as $item ) : ?>

						<li class="scholarships-links-item">

							<a href="#" class="l-block scholarships-link-s<?php if ( $c===0) echo ' is-active'; ?>" data-icon="b-arr">
								<?= $item; ?>

							</a>

						</li>

						<?php $c++;endforeach; ?>

						<li class="scholarships-links-item">
							<a href="#" class="l-block scholarships-link-s scholarships-link--all-categories" data-icon="drop-b">
								לכל הקטגוריות
							</a>
						</li>

					</ul>
				</nav>

			</aside>

			<section class="l-fg1 scholarships">

				<header class="l-flex t-row-half f-c scholarships-content-top">
					
					<h2 class="norm-title fw-medium l-fg1 fs-large c-c3 scholarships-table-title">
						רשימת מלגות
					</h2>

					<div class="t-bullet-wide"></div>

					<div class="l-nowrap fs-small">
						1082 מלגות בלוח
					</div>

				</header>
				
				<?php foreach ( scholarships() as $item ): ?>

				<section class="t-row-small t-shadow-small forum-item scholarships-item">

					<header class="l-flex t-box-pad-half f-c scholarships-item-top">

						<h3 class="l-fg1 norm-title t-bullet fw-medium scholarships-item-title">
							<a role="button" class="t-hover l-block toggle-scholarship-content">
								<?= $item['title']; ?>
							</a>
						</h3>

						<a role="button" class="l-shrink t-bullet-wide c-c3 norm-a fw-medium btn-scholarship-apply toggle-scholarship-content-btn">
							הגישו מועמדות
						</a>
						
						<div class="is-hidden--mobile l-center scholarships-sideCell">
							<button class="t-hover btn-print-scholarship" aria-label="הדפס מלגה">
								<i class="svgIcon icon-print-grey"></i>
							</button>
						</div>

					</header>

					<div class="scholarships-content" aria-hidden="true" style="display:none;">
						
						<div class="l-flex t-box-pad-half scholarships-desc-table">

							<article calss="l-fg1 t-text scholarships-desc">
								<?= $item['desc']; ?>
							</article>

							<aside class="scholarships-sideCell l-tac scholarships-share">
								
								<?php include ('templates/c-shares.php'); ?>

							</aside>

						</div>

						<section class="t-box-pad-half w100 form-strip-yellow-formHold">

							<header class="t-row-half">
								<h3 class="norm-title fs-medium fw-medium c-c3">
									טופס בקשה למלגת 600+ של אוניברסיט ת חיפה
								</h3>
							</header>

							<form class="l-flex f-w  t-boxes-small scholarships-form">

								<div class="w33 scholarships-form-cell">
									<input type="text" class="t-field scholarships-form-field" placeholder="שם מלא">
								</div>

								<div class="w33 scholarships-form-cell">
									<input type="tel" class="t-field scholarships-form-field" placeholder="טלפון">
								</div>

								<div class="w33 scholarships-form-cell">
									<input type="email" class="t-field scholarships-form-field" placeholder="אימייל">
								</div>

								<div class="w100 scholarships-form-cell">
									<textarea class="t-field scholarships-form-field" placeholder="פרטי בקשה"></textarea>
								</div>

								<div class="w33 scholarships-form-cell">
									<select type="text" class="t-field scholarships-form-field">
										<option>סטטוס</option>
										<option>אפשרות</option>
									</select>
								</div>

								<div class="w33 scholarships-form-cell">
									<select type="text" class="t-field scholarships-form-field">
										<option>מוצא</option>
										<option>אפשרות</option>
									</select>
								</div>

								<div class="w33 scholarships-form-cell">
									<select type="text" class="t-field scholarships-form-field">
										<option>מבקש מלגה  על רקע</option>
										<option>אפשרות</option>
									</select>
								</div>
								
								<div class="l-flex w100 f-c scholarships-form-bottom">

									<div class="t-bullet l-fg1-w0">
										
										<label class="t-checkbox">
											<input checked type="checkbox" name="approve terms">
											<span>
												אני מסכים/ה לתנאי השימוש ומדיניות הפרטיות
											</span>
										</label>

									</div>

									<label class="l-rela t-btn ask-experts-submit">
										<strong class="l-center h100 fs-large t-arr-left">
											שלח
										</strong>
										<input type="submit" class="l-spread t-submit" aria-label="שלח">
									</label>
									
								</div>							
							</form>

						</section>

					</div>

				</section>

				<?php endforeach; ?>

				<div class="l-center t-box-w t-row-small f-c pagination-panel">
					<a href="#" class="read-more">
						קרא עוד
					</a>
				</div>

				<?php include ( 'templates/c-pagination.php' ); ?>

			</section>

		</div>

	</div>

</section>