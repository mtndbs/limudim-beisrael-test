<div class="t-part t-striped acceptance-calc">

	<div class="t-grid">

		<div class="l-flex acceptance-calc-table">

			<section class="w50 box acceptance-calc-calculator">

				<h2 class="t-part-title">
					מחשבון תנאי קבלה תתקבל או לא?
				</h2>

				<div class="t-part-desc">
					כותרת מניעה לפעולה לשימוש במחשבון תנאי קבלה
				</div>

				<form class="l-flex f-w t-boxes-small acceptance-calc-form">

					<div class="w33">
						<select class="t-field">
							<option>אני רוצה ללמוד</option>
							<option>הנדסה</option>
							<option>מחשבים</option>
							<option>פסיכולוגיה</option>
							<option>גיאוגרפיה</option>
						</select>
					</div>

					<div class="w33">
						<input type="text" class="t-field" placeholder="ציון פסיכומטרי"/>
					</div>
					
					<div class="w33">
						<input type="text" class="t-field" placeholder="ממוצע בגרויות"/>
					</div>

					<div class="w100">
						<input type="text"
						       class="t-field"
						       placeholder="יש להקליד תחום לימודים"
						       data-autocomplete='{"serviceUrl": "./admin/ajax-autocomplete.php"}'
						/>
					</div>
					
					<div class="t-row-half"></div>

					<div class="w100">
						<label class="l-rela t-btn submit-hold">
							<span class="h100 l-center fs-large t-arr-left">
								חשב תוצאות
							</span>
							<input type="submit" class="l-spread t-submit" aria-label="שלח">
						</label>
					</div>
					
				</form>

			</section>

			<div class="acceptance-calc-sep">

				<i class="svgIcon icon-form-sep"></i>
				<i class="svgIcon icon-form-sep-mobile"></i>
				
			</div>

			<section class="w50 box acceptance-calc-charts">

				<h2 class="t-part-title">
					איך אתה ביחס לאחרים?
				</h2>

				<div class="t-part-desc">
					גולשים ניסו להתקבל עם הנתונים הבאים:
				</div>

				<div class="l-flex f-c acceptance-calc-chart-row">
					
					<div class="l-fg1-w0 acceptance-calc-chart">
						
						<table class="l-obscure js-column-chart">

							<thead>
								<tr>
									<th scope="col">
										תחום לימודים
									</th>
									<th scope="col" data-max="800">
										ציון מינימום בפסיכומטרי
									</th>
									<th scope="col" data-max="100">
										ממוצע בגרויות מינימלי
									</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td scope="row">
										לימודי כלכלה
									</td>
									<td>
										481
									</td>
									<td>
										95
									</td>
								</tr>
								<tr>
									<td scope="row">
										לימודי
										<br>
										הנדסת תעשיה וניהול
									</td>
									<td>
										581
									</td>
									<td>
										85
									</td>
								</tr>
								<tr>
									<td scope="row">
										לימודי
										<br>
										מנהל עסקים
									</td>
									<td>
										420
									</td>
									<td>
										85
									</td>
								</tr>

							</tbody>

						</table>
						
					</div>

				</div>	
				

			</section>

		</div>

	</div>

</div>
