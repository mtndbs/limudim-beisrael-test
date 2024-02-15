<div class="t-part t-striped m-forum-pull">

	<div class="t-grid">

		<?php if ( is ('mosad' ) ) : ?>
		<h2 class="l-tac t-part-title">
			מתוך פורום המסלול האקדמי המכללה למנהל
		</h2>
		<?php endif; ?>

		<?php if ( is('forum') || is('mosad') ) : ?>
		
		<section class="t-row2 forum-forms-h">
			
			<header class="l-flex forum-forms-top">

				<ul class="norm-ul w-auto l-flex l-nowrap forums-forms-tabs">

					<li class="l-column foums-form-tab-cell">

						<button class="l-fg1-h0 t-btn froums-form-tab forums-tab-newMessage" data-tab-content="ask_experts" data-icon="plus-white">
							הוספת הודעה חדשה
						</button>

						<div class="inactive-pad"></div>

					</li>

					<li class="l-column foums-form-tab-cell">

						<button class="l-fg1-h0 t-btn froums-form-tab forums-tab-servcie" data-tab-content="try_our_services" data-icon="v-white">
							שירות אישי
						</button>

						<div class="inactive-pad"></div>

					</li>

					<li class="is-hidden--desktop forms-form-tab-cell l-column toggle-forum-header-h">
						
						<button class="l-center w100 l-fg1 toggle-forum-header t-bg-c2" aria-label="הצג חיפוש">
							<i class="svgIcon icon-search"></i>
						</button>
						
						<div class="inactive-pad"></div>

					</li>

				</ul>

				<div class="l-fg1-w0 l-flex f-jl is-hidden--mobile forums-form-search-h">

					<form class="l-oh l-flex t-bg-white forums-form-search">

						<button type="button" class="is-hidden--desktop l-rela close-forum-search" aria-label="סגור חיפוש"></button>

						<input 
							type="search"
							class="l-fg1-w0 fw-light c-greyt norm-field h100 forums-form-search-field"
							placeholder="חיפוש בפורום"
						>
						<div class="bg-c2 l-rela top-search-submit">
							<i class="l-abs-center svgIcon icon-search"></i>
							<input type="submit" class="l-spread--btn" aria-label="שלח" value="">

						</div>

						
					</form>

					<div class="inactive-pad is-hidden--desktop"></div>

				</div>

			</header>

			<section id="ask_experts" class="t-bg forums-form-h ask-experts" style="display:none" aria-hidden="true">

				<header class="t-row2">
					<h3 class="norm-title fs-large ask-experts-title">
						שאל את המומחים וקבל מענה ללא חיוב
					</h3>
				</header>

				<?php include ('c-form-ask-experts.php'); ?>

			</section>

			<section id="try_our_services" class="forums-form-h form-service-h" style="display:none" aria-hidden="true">

				<header class="t-row2">
					
					<h3 class="norm-title fs-large ask-experts-title">
						חינם! איתור לימודים בהתאמה אישית, רוצה לנסות?
					</h3>

				</header>

				<form class="l-flex t-boxes-small form-service">
					
					<div class="form-service-cell fsc-short">

						<input type="text" placeholder="שם מלא" aria-label="שם מלא" class="norm-field t-box-w fs-small w100h100 form-service-field">
						
					</div>

					<div class="form-service-cell fsc-short">

						<input type="text" placeholder="שם מלא" aria-label="שם מלא" class="norm-field t-box-w fs-small w100h100 form-service-field">
						
					</div>

					<div class="form-service-cell fsc-short">

						<input type="text" placeholder="שם מלא" aria-label="שם מלא" class="norm-field t-box-w fs-small w100h100 form-service-field">
						
					</div>

					<div class="l-fg1-w0 form-service-cell">

						<input type="text" placeholder="שם מלא" aria-label="שם מלא" class="norm-field t-box-w fs-small w100h100 form-service-field">
						
					</div>

					<div class="l-rela form-service-cell">
						
						<label class="t-checkbox form-strip-checkbox">
							<input checked type="checkbox" name="approve terms">
							<span>
								אני מסכים/ה לתנאי השימוש ומדיניות הפרטיות
							</span>
						</label>

						<label class="l-rela t-btn submit-hold">
							<strong class="l-center fs-large t-arr-left">
								שלח
							</strong>
							<input type="submit" class="l-spread t-submit" aria-label="שלח">
						</label>

					</div>

				</form>
				
			</section>

		</section>


		<?php else : ?>
		
		<h2 class="l-tac t-part-title">
			שאלות הגולשים על תואר שני במנהל עסקים
		</h2>

		<?php endif; ?>
		
		<div class="forum-list">

			<?php
			foreach ( forum() as $item ) : 

				include ( 'loop-forum-item.php' );

			endforeach;
			?>
		
		</div>

		<div class="t-row"></div>

		<?php include ( 'templates/c-pagination.php' ); ?>

	</div>
	
</div>

<div id="comments_popup" style="display:none" aria-hidden="true"></div>