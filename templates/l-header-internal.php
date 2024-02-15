<div class="header-internal" style="background-image:url(assets/images/bg/internal-header-category.webp)" data-bg="assets/images/bg/internal-header-category.webp">

	<?php include('templates/c-breadcrumbs.php'); ?>

	<div class="c-black t-grid header-internal-grid">

		<div class="l-flex header-internal-table">

			<div class="l-fg1-w0 l-column header-internal-text">

				<header class="l-flex t-row-half">

					<?php if (is('forum')) : ?>

						<div class="l-center l-shrink header-internal-title-logo">
							<img src="assets/images/logo-technion.png" alt="technion" />
						</div>

						<div class="t-sep" style="font-size: 50%;"></div>

					<?php endif; ?>

					<h1 class="header-internal-title">
						<?php if (is('forum')) : ?>
							פורום בית הספר
							<br>
							להנדסאים בטכניון
						<?php elseif (is('milgot')) : ?>
							מעל 1,000 מלגות שונות,
							<br>
							לא תמצא/י אחת בשבילך?
						<?php else : ?>
							תואר שני -
							<br>
							לימודים מתקדמים
						<?php endif; ?>
					</h1>

				</header>

				<div class="header-internal-desc l-fg1 t-row2 t-text">

					<?php if (is('forum')) : ?>

						<div class="l-flex t-row-half f-c forum-meta">

							<div class="l-flex f-c form-meta-main">

								<div class="t-bullet-wide norm-title">
									מנהלי הפורום:
								</div>

								<div class="t-bullet-wide l-flex f-c forum-manager">
									<img class="t-bullet" src="assets/images/forums/manager-2.jpg" alt="" />
									<span>
										אלמוג
									</span>
								</div>

								<div class="t-bullet-wide l-flex f-c forum-manager">
									<img class="t-bullet" src="assets/images/forums/manager-1.jpg" alt="" />
									<span>
										דניאלה
									</span>
								</div>

							</div>

							<div class="l-fg1 l-flex f-jl form-meta-allForums">
								<a href="#">
									לכל הפורומים
								</a>
							</div>
						</div>

					<?php endif; ?>



					<?php if (is('category')) : ?>

						<p>
							אם לא אחת מצאת עצמך בעבודה מהרהר/ת בשאלות כבדות משקל, יוצר/ת גישות שונות לפתרון בעיות ומחפש/ת מאמרים אקדמיים להעמקת הידע המקצועי שלך, את/ה עם רגל אחת בתואר השני.
						</p>

						<p>
							אנחנו הבאנו לך פרטים רבים וחשובים על תכניות לתואר שני במקצועות מגוונים, המוצעות במוסדות האקדמיים במדינת ישראל. בכתבות שלנו באפשרותך למצוא לעצמך נתיב התפתחות מקצועי, עיוני ומחקרי בתחום העיסוק שלך, או לחילופין, לגלות מסלולי הסבה בתארים מתקדמים.
						</p>

						<p>
							לא העמקנו מספיק? – באפשרותך לרשום לנו הודעה באתר, ואנו נשיב בהקדם במטרה לסייע לך לבחור את כיוון ההתפתחות שלך.
						</p>

					<?php elseif (is('course')) : ?>

						<p>
							קיבלת כבר את ציון ה – GMAT? הגיע הזמן לבדוק את תכניות התואר השני במנהל עסקים! באפשרותך לקרוא על התכניות השונות המוצעות במגוון אוניברסיטאות ומכללות בישראל. קרא/י על תכניות בשיווק, בניהול מערכות בריאות, בניהול חברות הי טק, במימון ועוד. רצית לשמוע על תכניות מיוחדות למנהלים בעלי ניסיון ולבכירים? חיפשת תכניות למשפטנים? – הפרטים נמצאים כאן בכתבות שלנו. מעבר לזה, ניתן לכתוב לנו מסר באתר עם בקשה למידע נוסף, ואנו נעשה כמיטב יכולתנו לחסוך לך את הריצות והבירורים.
						</p>

						<p>
							<a href="#">
								לחץ/י כאן ותקבל/י שירות בחינם
							</a>
							שיחסוך לך הרבה זמן, כאבי ראש וגם כסף
						</p>

						<h3>
							כל מה שצריך לדעת על תואר שני במנהל עסקים:
						</h3>

						<ul>
							<?php lis(
								'כל המידע על תואר שני במנע"ס
							חינם! הכוונה לתואר שני במנהל עסקים
							מכללות ואוניברסיטאות לתואר שני במנע"ס
							שאלות הגולשים מהפורום
							מלגות וימים פתוחים בתחום
							כל המסלולים לתואר שני במנהל עסקים'
							); ?>
						</ul>

					<?php elseif (is('forum')) : ?>


						<p>
							ברוכים הבאים לפורום בית הספר להנדסאים בטכניון.
						</p>

						<p>
							בית הספר הארצי להנדסאים הוקם בשנת 1958 ומאז ועד היום ממשיך להתפתח בהתאם לצרכי השוק המשתנים ובהתאם לדרישות המה"ט (המכון הממשלתי להכשרה בטכנולוגיה ובמדע). בית הספר נחשב לאחד ממוסדות הלימוד המובילים בישראל ברמת הישיגיו ובוגרי בית הספר משתלבים בקלות בעבודה במשק הישראלי.
						</p>

						<p>
							במסגרת בית הספר ניתן ללמוד מגוון של מגמות לימוד כגון: הנדסאי אלקטרוניקה, הנדסאי חשמל, הנדסאי אדריכלות ועיצוב פנים, הנדסאי תוכנה, הנדסאי תעשייה וניהול ועוד. בנוסף, בית הספר מציע אפשרות לתלמידים המעוניינים לשלב את לימודי ההנדסאי עם תואר B.A מטעם אוניברסיטת חיפה.
						</p>

						<p>
							כאן תוכלו להפנות שאלות ולקבל תשובות ישירות ממחלקת הרישום של בית הספר להנדסאים בטכניון בכל הקשור ללימודים, תנאי קבלה, רישום, קורסים, מרצים, תואר משולב ועוד.
						</p>

					<?php elseif (is('milgot')) : ?>

						<p>
							ברוכים הבאים, אתר לימודים בישראל הוקם בסיוע ואדיבות הסוכנות היהודית. כאן תמצאו רשימת מלגות במגוון תחומי לימוד. לחיפוש מלגה ספציפית תוכלו להשתמש במנוע החיפוש למטה. לוח המלגות באתר לימודים בישראל מרכז במיוחד עבורך מעל 1,000 מלגות שונות בשווי של למעלה מ - 200 מיליון ש"ח.
						</p>

						<p>

							לתשומת לבך,
							<br>
							באפשרותך לשלוח בקשה למלגה ישירות מהטופס הצהוב המופיע בתחתית העמוד של כל מלגה מוצעת.

						</p>

					<?php endif; ?>
				</div>

				<?php if (!is('forum') && !is('milgot')) : ?>

					<ul class="t-row norm-ul l-flex f-w header-internal-links">

						<li class="w33 header-internal-links-item">
							<span class="l-ibm">
								<a href="#" class="c-c2 intro-counter-desc">
									מוסדות לימוד
								</a>
							</span>
						</li>

						<li class="w33 header-internal-links-item">
							<span class="l-ibm">
								<a href="#" class="c-c2 intro-counter-desc">
									מלגות לימוד
								</a>
							</span>
						</li>

						<li class="w33 header-internal-links-item">
							<span class="l-ibm">
								<a href="#" class="c-c2 intro-counter-desc">
									ימים פתוחים
								</a>
							</span>
						</li>

					</ul>
				<?php endif; ?>

				<?php include('c-header-internal-bottom.php'); ?>

			</div>
			<!-- / header internal text -->

			<div class="t-space"></div>

			<div class="l-rela l-column l-oh l-shrink internal-header-image">

				<div class="l-fg1"></div>

				<?php
				$h_src = '';
				if (is('forum')) {
					$h_src = 'forum-presentor.webp';
				} else if (is('course')) {
					$h_src = 'internal-header-course.webp';
				} else if (is('milgot')) {
					$h_src = 'internal-milgot-presentor.webp';
				} else {
					$h_src = 'internal-header-presentor.webp';
				}

				?>

				<div class="internal-header-frame">

					<img src="assets/images/<?= $h_src; ?>" width="155" height="253" alt="" />

				</div>


			</div>

		</div>

	</div>

</div>