<footer class="site-bottom">

	<div class="t-grid">

		<div class="site-bottom-part">

			<?php if (!is('home')) : ?>

				<nav class="fs-small bottom-site-menu home-bottom-menu">

					<ul>
						<li>
							<a href="#">English</a>
						</li>
						<li>
							<a href="#">פורום לימודים</a>
						</li>
						<li>
							<a href="#">ימים פתוחים</a>
						</li>
						<li>
							<a href="#">תנאי קבלה</a>
						</li>
						<li>
							<a href="#">תנאי שימוש</a>
						</li>
						<li>
							<a href="#">מפת האתר</a>
						</li>
						<li>
							<a href="#">מגזין לימודים</a>
						</li>
						<li>
							<a href="#">צור קשר</a>
						</li>
					</ul>

				</nav>

			<?php else : ?>

				<ul class="norm-ul l-table internal-bottom-menu">

					<li>

						<a href="#">
							רגע לפני
						</a>

						<ul>

							<?php lis(
								'בחירת לימודים
								תנאי קבלה
								שכר לימוד
								אוניברסיטה
								מכללות
								ימים פתוחים
								מלגות
								פורום לימודים'
							); ?>

						</ul>

					</li>

					<li>

						<span>
							מחפש ללמוד
						</span>

						<ul>

							<?php lis(
								'תואר ראשון
								תואר שני
								הכנה לבגרות
								מכינות
								הנדסאים
								לימודי תעודה
								קורסים
								לימודי ערב'
							); ?>
						</ul>

					</li>

					<li>

						<span>
							תארים מבוקשים
						</span>

						<ul>
							<?php lis(
								'משפטים
									כלכלה
									תקשורת
									חשבונאות
									הנדסה
									אדריכלות
									פסיכולוגיה
									מנהל עסקים
									מדעי ההתנהגות
									חינוך והוראה
									מדעי המחשב
									מדעי המדינה
									עיצוב פנים'
							); ?>

						</ul>

					</li>

					<li>

						<span>
							לימודי תעודה
						</span>

						<ul>
							<?php
							lis(
								'נדל"ן
									שפות
									חינוך
									תכנות
									מזכירות
									טכנאות
									הנדסאים
									שוק ההון
									יופי וטיפוח
									פיננסים וניהול
									לימודי ביטוח
									לימודי פרסום
									רפואה משלימה
									לימודי מחשבים'
							);
							?>

						</ul>

					</li>

					<li>

						<span>
							פורום לימודים
						</span>

						<ul>

							<?php
							lis(
								'פורום מנהל עסקים
								פורום משפטים
								פורום תקשורת
								פורום כלכלה
								פורום חינוך
								פורום הנדסה
								פורום פסיכולוגיה'
							); ?>
						</ul>

					</li>

					<li>

						<span>
							כלים ושירותים
						</span>

						<ul>

							<?php lis(
								'שירות אישי חינם
								חישוב ממוצע בגרות
								תקנון האתר
								לסטודנטים
								צור קשר'
							); ?>

						</ul>

					</li>

				</ul>


			<?php endif; ?>

		</div><!-- /part -->

		<div class="site-bottom-part">

			<div class="t-row-half">
				<img src="assets/images/svg/footer-logo.svg" width="278" height="69" alt="לוגו תחתון" loading="lazy">
			</div>

			<div class="l-center social-links">

				<a href="#" class="svgIcon icon-gp social-link-item" aria-label="גוגל פלוס"></a>

				<a href="#" class="svgIcon icon-yt social-link-item" aria-label="יוטוב"></a>

				<a href="#" class="svgIcon icon-fb social-link-item" aria-label="פייסבוק"></a>

				<div class="fb-like social-link-item" data-href="https://www.universities-colleges.org.il" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="true">
				</div>

			</div>

		</div><!-- /part -->

		<div class="site-bottom-part">

			<div class="t-row-half">
				<img src="assets/images/svg/ja-logo.svg" width="216" height="54" alt="בתודה לסוכנות היהודית לארץ ישראל" loading="lazy">
			</div>

			<div class="t-row-half">
				<img src="assets/icons/traffico-logo.png" width="112" height="25" alt="טרפיקו" loading="lazy">
			</div>

			<div class="credit">
				כל הזכויות שמורות ללימודים בישראל 2017
			</div>


		</div><!-- /part -->

	</div><!-- /grid -->

</footer>

<div class="footer-btns footer-btns-mobile">
	<button class="btn-scrollup t-bg-c2 svgIcon icon-arr-up footer-btn footer-btn--scroll_top" aria-label="גלילה לראש העמוד"></button>
</div>

<div class="footer-btns footer-btns-desktop">
	<button class="btn-scrollup t-bg-c1 svgIcon icon-arr-up footer-btn footer-btn--scroll_top" aria-label="גלילה לראש העמוד"></button>
</div>

<!-- Social floating buttons -->
<?php include('c-social.php'); ?>

<div class="is-hidden">

	<div id="mobile_form_free_service">

		<i class="svgIcon icon-heart"></i>

		<div class="l-tac l-rela c-c2 t-line-height free_service-top">

			אנחנו באמת אוהבים לעזור, 90% מהגולשים שלנו
			<br>
			מרוצים מהשירות,
			<strong>
				תנסה גם
			</strong>

			<span class="icon-arr-hold">
				<i class="l-icon icon-g-arr"></i>
			</span>

		</div>

		<div class="free_service-form">

			<div class="form-strip-text">

				<h2 class="norm-title c-c2 form-strip-title">
					שירות אישי
					<strong>
						חינם!
					</strong>
				</h2>

				<p class="norm-p form-strip-desc">
					ניציגנו עומדים לשירותכם
				</p>

			</div>

			<?php include('templates/c-side-form.php'); ?>

		</div>

	</div>

</div>

</div><!-- /wrapper body -->
</div><!-- /wrapper -->

<div id="fb-root"></div>
<script defer async>
	(function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) return;
		js = d.createElement(s);
		js.id = id;
		js.src = 'https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v3.0&appId=231657866982104&autoLogAppEvents=1';
		js.setAttribute('defer', '');
		js.setAttribute('async', '');
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
</script>

<script src="https://apis.google.com/js/platform.js" async defer></script>

<script src="public/js/main.min.js?ver=<?= $ver; ?>" defer></script>


</body>


</html>