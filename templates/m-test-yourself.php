<?php
	$test_qs = array(
		'אני טוב בדיבור מול קהל',
		'בעל יכולת שכנוע',
		'אסרטיבי ובעל יכולת קבלת החלטות',
		'בעל כושר התבטאות ברמה גבוהה בעל פה ובכתב',
	);
?>

<div class="t-part t-grad-whiteToGrey m-test-yourself">

	<div class="t-grid">

		<h2 class="l-tac t-part-title">
			בחן את עצמך - האם מתאים לך ללמוד משפטים?
		</h2>
		
		<form class="test-yourself-form">

			<ul class="norm-ul l-tac l-flex f-w l-box-25 t-boxes-half test-yourself-list">

				<?php $c=0; foreach ( $test_qs as $item ) : ?>

				<li class="box test-yourself-item">

					<div class="l-column h100 test-yourself-item-in">

						<h3 class="norm-title w100 l-fg1-w0 l-center test-yourself-title" aria-hidden="true">

							<?= $item; ?>

						</h3>

						<fieldset class="w100 test-yourself-radiosSet">

							<legend class="l-obscure">(מ: 1 - כלל לא מסכים, עד 5 - מסכים מאד)</legend>

							<div class="l-center t-row-small test-yourself-radiosSet-table">

								<?php for ( $i = 1; $i <=5; $i++ ) : ?>

								<label class="test-yourself-option">
									
									<input class="l-obscure test-yourself-radio" type="radio" name="test_yourself_option_<?= $c; ?>"/>

									<span class="test-yourself-option-title">
										<?= $i; ?>

									</span>
									
									<i class="t-hover svgIcon icon-v-white test-yourself-radio-mock"></i>

								</label>

								<?php endfor; ?>
								
							</div>

							<div class="fs-smallest test-yourself-explain" aria-hidden="true">
								(מ: 1 - כלל לא מסכים, עד 5 - מסכים מאד)
							</div>

						</fieldset>

					</div>

				</li>

				<?php $c++; endforeach; ?>

			</ul>
			
			<div class="t-row-half"></div>

			<div class="l-flex f-c test-yourself-form-bottom">

				<div class="l-fg1 fs-small">
					עלייך לדרג את האמירות הנ”ל בסולם של אחד עד חמש.
					<br/>
					כאשר 1 מדורג כנמוך ביותר (האמירה לא מאפיינת אותך) ו - 5 כגבוה ביותר (מאוד מאפיינת אותך).
				</div>

				<div class="t-space"></div>

				<label class="l-rela t-btn test-yourself-submit">
					<strong class="h100 l-center fs-large t-arr-left">
						המשך
					</strong>
					<input type="submit" class="l-spread t-submit" aria-label="שלח">
				</label>

			</div>

		</form>

	</div>

</div>