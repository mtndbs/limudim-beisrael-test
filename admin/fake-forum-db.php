<?php 
mb_internal_encoding("UTF-8");

$id = $_GET['id'];
include ('fake-data.php');
$forum = forum();
function forum_html($i){
	global $forum;

	 
	ob_start();
	?>

		<header class="l-flex t-row-half t-box-pad popup-comment-top">

			<div class="l-flex f-c l-fg1">

				<i class="t-bullet-wide l-center forum-item-icon">
					<?= mb_substr ( $forum[$i]['user_name'], 0 , 1); ?>

				</i>

				<h2 class="norm-title popup-comment-title">
					<?= $forum[$i]['user_name']; ?>

				</h2>

			</div>

			<div class="t-sep"></div>

			<time class="fs-small l-center">
				6 ביולי 2017
			</time>

		</header>
		
		<div class="t-text t-row-half popup-comment-content">
			<?= $forum[$i]['desc']; ?>
		</div>

		<ul class="norm-ul forum-comments-list t-row">

			<?php 
			
			$comments = $forum[$i]['comments'];

			foreach( $comments as  $comment) {
				//include ( dirname(__DIR__).'/templates/loop-comment-sub.php' ); 
				?>
				<li class="l-flex f-t t-row-half forum-comment">

					<div class="l-shrink l-flex t-bullet f-c forum-comment-meta">

						<i class="t-bullet-wide l-center forum-item-icon" aria-hidden="true">
							<?= mb_substr ( $comment['user_name'], 0 , 1); ?>

						</i>

						<div class="l-fg1">

							<strong class="forum-user t-line-height l-block comment-user">
								<?= $comment['user_name']; ?>

							</strong>

							<time class="fs-small c-greyt">
								<?= $comment['date']; ?>

							</time>

						</div>
						
					</div>

					<div class="l-fg1 svg-tip-right t-box-w forum-comment-desc">
						<?= $comment['desc']; ?>

					</div>

				</li>
				
				<?php 
			}

			?>

		</ul>
	<?php
	$output = ob_get_clean();
	return $output;
}
$json = array ();

$c = 0; foreach( $forum as $item ){

	$json[] = forum_html($c);

	$c++;
}

//var_dump($json);

if ( isset($id) && $id !== '' ){

	echo $json[$id];

}