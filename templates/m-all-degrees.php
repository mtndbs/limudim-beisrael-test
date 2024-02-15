<?php 

$temp = array (
	array(
		'title' => 'לימודי משפטים',
		'icon' => 'i14'
	),
	array(
		'title' => 'חינוך והוראה',
		'icon' => 'i3'
	),
	array(
		'title' => 'לימודי רפואה',
		'icon' => 'i5'
	),
	array(
		'title' => 'קורסים',
		'icon' => 'i12'
	),
	array(
		'title' => 'לימודי שפות',
		'icon' => 'i9'
	),
	array(
		'title' => 'לימודי מחשבים',
		'icon' => 'i4'
	),
	array(
		'title' => 'לימודי אמנות',
		'icon' => 'i11'
	),
	array(
		'title' => 'לימודי חשבונאות',
		'icon' => 'i2'
	),
	array(
		'title' => 'מנהל עסקים',
		'icon' => 'i6'
	),
	array(
		'title' => 'לימודי מדעים',
		'icon' => 'i10'
	),
	array(
		'title' => 'לימודי ערב',
		'icon' => 'i8'
	),
	array(
		'title' => 'מדעי החברה',
		'icon' => 'i15'
	),
	array(
		'title' => 'רפואה משלימה',
		'icon' => 'i16'
	),
	array(
		'title' => 'לימודי תקשורת',
		'icon' => 'i13'
	),
	array(
		'title' => 'מכללות',
		'icon' => 'i7'
	),
	array(
		'title' => 'לימודי יופי',
		'icon' => 'i13'
	),

); 

$temp_category_links = array(
	array(
		'title' => 'וטרינריה',
	),
	array(
		'title' => 'הכשרת מנהלים',
	),
	array(
		'title' => 'הסבת אקדמאים להורדה',
	),
	array(
		'title' => 'תואר שני במדעי הקוגניציה',
	),
	array(
		'title' => 'תואר שני בשיווק',
	),
	array(
		'title' => 'תואר שני באופטומטריה',
	),
	array(
		'title' => 'תואר שני בביולוגיה',
	),
	array(
		'title' => 'תואר שני בלימודי ארץ ישראל',
	),
);


?>
<section class="t-part t-striped m-all-degrees">

	<div class="c-c3 t-grid">

		<h2 class="l-tac t-part-title">
			כל התארים והמסלולים
		</h2>

		<div class="l-tac l-auto t-part-desc">
			מחפש ללמוד את התואר המושלם? חושב על לימודי תעודה? 
			באתר תוכל למצוא מידע על מאות מסלולי לימודים גם בתחום המעניין אותך. 
			<br>
			הכל כאן בשבילך.
		</div>

		<nav class="t-row-double">

			<ul class="fw-medium norm-ul l-flex f-w t-boxes l-box-25 all-degrees-list">

				<?php foreach ( $temp as $item ) : ?>

				<li class="box all-degrees-item">
					
					<a href="#" class="norm-a t-hover l-flex f-c all-degrees-link">
						
						<i class="t-bullet-wide all-degrees-icon">
							<img src="assets/images/svg/<?= $item['icon']; ?>.svg" width="50" height="50" alt="" loading="lazy">
						</i>

						<div class="all-degrees-title">
							<?= $item['title']; ?>

						</div>
						
					</a>

				</li>

				<?php endforeach; ?>

			</ul>
		
		</nav>

		<?php if ( is ( 'category' ) ) : ?>

		<ul class="fw-medium norm-ul l-flex f-w t-boxes l-box-25 all-degrees-list">

			<?php foreach ( $temp_category_links as $item ) : ?>

			<li class="box all-degrees-item">
				
				<a href="#" class="norm-a t-hover l-flex f-t all-degrees-link">

					<i class="l-rela t-bullet svgIcon icon-b-arr"></i>

					<div class="all-degrees-title">
						<?= $item['title']; ?>

					</div>

				</a>

			</li>

			<?php endforeach; ?>
			
		</ul>

		<?php else : ?>
		
		<nav class="l-flex f-jc f-w all-degrees-full_list">

			<a href="#" class="read-more">
				לרשימה המלאה לתואר ראשון
			</a>

			<a href="#" class="read-more">
				לרשימה המלאה לתואר שני
			</a>

			<a href="#" class="read-more">
				לרשימה המלאה ללימודי תעודה
			</a>

		</nav>

		<?php endif; ?>
		
	</div>

</section>