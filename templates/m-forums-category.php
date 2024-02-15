<?php foreach ( forums_cat_fields() as $item ) : 

	include ( 'templates/loop-forums-cat.php' );

endforeach; ?>

<section class="t-part t-striped forums-about">

	<div class="t-grid">

		<div class="l-table forums-about-table">

			<div class="l-td-m forums-about-text">
			
				<h3>
					מענה ישיר ממוסדות הלימוד נציגי
					מוסדות הלימוד לשירותך
				</h3>

				<p>
					האם תהיתם כיצד יש להגיש מועמדות
					למוסדות הלימוד או מתי נערכים ימים פתוחים?
					מתי מסתיימת ההרשמה והאם ניתן
					להגיש הרשמה באיחור? האם כדאי לשנות מקום מגורים בעקבות לימודים
					? מהם התנאים במגורים במעונות
					במוסדות הלימוד השונים? איך מקבלים מלגות ומתי מומלץ להגיש טפסים
					בעניין? תשובות לכל השאלות הללו ועוד תוכלו לקבל בפורום באתר.
				</p>

				<p> 
					כנסו לפורום לפי מוסד לימודים רלוונטי. כאן תוכלו לשאול כל שאלה 
					את נציגי מוסדות הלימוד ולברר ולקבל מענה תוך זמן קצר.				
				</p>

			</div>

			<div class="l-td-m t-space"></div>

			<div class="l-td-m">

				<a href="assets/images/forums/schools.png" data-alt="דוגמה" class="lazy_load"></a>

				<figure class="forums-about-frame">

					<noscript>
						<img src="assets/images/forums/schools.png" alt="דוגמה"/>
					</noscript>

				</figure>

			</div>

		</div>

	</div>

</section>
<div class="svg-tip-top is-hidden--desktop forums-mobileTip"></div>

<div class="t-striped"></div>

<?php foreach ( forums_cat_institutes() as $item ) : 

	include ( 'templates/loop-forums-cat.php' );
	
endforeach; ?>