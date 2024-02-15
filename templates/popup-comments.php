<div class="l-flex popup-comments-table h100">

	<aside class="l-shrink l-column t-bg popup-comments-cell popup-comments-sidebar">

		<h2 class="c-c3 popup-comments-title">
			מתוך פורום
			לימודי הנדסה
		</h2>

		<nav class="l-fg1 t-row-half popup-comments-links">

			<ul class="fs-small c-c3 norm-ul popup-comments-links">

				<?php $c = 0; foreach ( forum() as $item ): ?>
				<li class="popup-comments-item">

					<a href="#" data-get="<?= $c; ?>" class="norm-a t-hover l-flex f-c l-height-set popup-comments-link">
						<?= $item['subject']; ?>
					
					</a>

				</li>
				<?php $c++; endforeach; ?>

			</ul>

		</nav>

		<footer class="l-flex">

			<a href="#" class="read-more">
				לפורום המלא
			</a>

		</footer>

	</aside>

	<main class="l-fg1-w0 l-column popup-comments-cell t-box-pad popup-comments-main">

		<header class="l-flex t-row-half f-c popup-comments-top">

			<h2 class="norm-title l-fg1 t-bullet forum_question_title">
				דרך ציטוטים של המילה מתוך הספרות הקלאסית?
			</h2>

			<button class="c-c2 fs-small" data-icon="full-screen">
				להצגה במסך מלא
			</button>

		</header>

		<article class="t-box l-fg1-h0 popup-comment-body">

			<div class="ajax-comment-load">

				<header class="l-flex t-row-half t-box-pad popup-comment-top">

					<div class="l-flex f-c l-fg1">

						<i class="t-bullet-wide l-center forum-item-icon">
							מ
						</i>

						<h2 class="norm-title popup-comment-title">
							ליאת
						</h2>

					</div>

					<div class="t-sep"></div>

					<time class="fs-small l-center">
						6 ביולי 2017
					</time>

				</header>
				
				<div class="t-text t-row-half popup-comment-content">
					<p>
						במסגרת היחידה למעורבות חברתית בדיקנט הסטודנטים של האוניברסיטה העברית מתקיימת תכנית למעגלי שיח לסטודנטיות, בהן עוסקים בסוגיות כגון זכויות חברתיות וזכויות אדם. תנאים לקבלת המלגה: מלגה זו מיועדת לסטודנטיות באוניברסיטה, במסגרת היחידה למעורבות חברתית בדיקנט הסטודנטים של האוניברסיטה העברית מתקיימת תכנית למעגלי שיח לסטודנטיות, בהן עוסקים בסוגיות כגון זכויות חברתיות וזכויות אדם.
					</p>
					<p>
						במסגרת היחידה למעורבות חברתית בדיקנט הסטודנטים של האוניברסיטה העברית מתקיימת תכנית למעגלי שיח לסטודנטיות, בהן עוסקים בסוגיות כגון זכויות חברתיות וזכויות אדם. תנאים לקבלת המלגה: מלגה זו מיועדת לסטודנטיות באוניברסיטה, במסגרת היחידה למעורבות חברתית בדיקנט הסטודנטים של האוניברסיטה העברית מתקיימת תכנית למעגלי שיח לסטודנטיות, בהן עוסקים בסוגיות כגון זכויות חברתיות וזכויות אדם.
					</p>
					<p>
						במסגרת היחידה למעורבות חברתית בדיקנט הסטודנטים של האוניברסיטה העברית מתקיימת תכנית למעגלי שיח לסטודנטיות, בהן עוסקים בסוגיות כגון זכויות חברתיות וזכויות אדם. תנאים לקבלת המלגה: מלגה זו מיועדת לסטודנטיות באוניברסיטה, במסגרת היחידה למעורבות חברתית בדיקנט הסטודנטים של האוניברסיטה העברית מתקיימת תכנית למעגלי שיח לסטודנטיות, בהן עוסקים בסוגיות כגון זכויות חברתיות וזכויות אדם.
					</p>
					<p>
						במסגרת היחידה למעורבות חברתית בדיקנט הסטודנטים של האוניברסיטה העברית מתקיימת תכנית למעגלי שיח לסטודנטיות, בהן עוסקים בסוגיות כגון זכויות חברתיות וזכויות אדם. תנאים לקבלת המלגה: מלגה זו מיועדת לסטודנטיות באוניברסיטה, במסגרת היחידה למעורבות חברתית בדיקנט הסטודנטים של האוניברסיטה העברית מתקיימת תכנית למעגלי שיח לסטודנטיות, בהן עוסקים בסוגיות כגון זכויות חברתיות וזכויות אדם.
					</p>
				</div>

				<ul class="norm-ul forum-comments-list t-row">

					<?php 
					
					$comment = forum()[0]['comments'];
					
					for($i = 0; $i < 2; $i++) {
						$comment = forum()[0]['comments'][$i];
						include ( 'templates/loop-comment-sub.php' ); 
					}

					?>

				</ul>

			</div>

		</article>

	</main>

</div>