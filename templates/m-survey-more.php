<div class="t-part t-striped">
	
	<div class="t-grid">

		<h2 class="t-part-title l-tac">
			עוד דברים שהסטונדטים מספרים על המסלול האקדמי המכללה למנהל
		</h2>
		
		<div class="t-row-half"></div>

		<div class="slider-4 l-tac survey-more-slider">

			<?php for ( $i = 0; $i < 10; $i++ ):?>

			<div class="survey-more-item">

				<div class="t-row-half survey-more-item-text">
					באיזו מידה תכנית הלימודים מקנה
					כלים מעשיים לעיסוק במקצוע?
				</div>				

				<div class="js-pie survey-more-item-chart">

					<table class="l-obscure">
						<tr data-color="#3e8cca">
							<td class="key">
								מקנה 
								<br/>
								במידה
								
								רבה 
							</td>
							<td class="value" style="background: #3e8cca">
								<?php $v1 = 20; echo $v1; ?>
							</td>
						</tr>
						<tr>
							<td class="key">
								מקנה במידה
								<br>
								מספקת
							</td>
							<td class="value" style="background: #b8c5cf">
								<?php $v2 = 12; echo $v2; ?>
							</td>
						</tr>
						<tr>
							<td class="key">
								מקנה במידה
								רבה מאד
							</td>
							<td class="value" style="background: #91be09">
								<?php echo (100 - $v1 - $v2); ?>
							</td>
						</tr>
					</table>

				</div>

			</div>
			
			<?php endfor; ?>

		</div>

	</div>

</div>