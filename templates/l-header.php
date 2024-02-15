<?php $ver = 3; ?>
<!DOCTYPE html>
<html dir="rtl" lang="he-IL" prefix="og: http://ogp.me/ns#">
<head>

	<meta charset="UTF-8" />
	<title>לימודים בישראל</title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="format-detection" content="telephone=no" />
	<meta id="viewport" name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />

  <link rel="preload" href="public/css/assets/fonts/Heebo/Heebo-Light.woff" as="font" type="font/woff" crossorigin>
  <link rel="preload" href="public/css/assets/fonts/Heebo/Heebo-Medium.woff" as="font" type="font/woff" crossorigin>
  <link rel="preload" href="public/css/assets/fonts/Heebo/Heebo-Regular.woff" as="font" type="font/woff" crossorigin>
  <link rel="preload" href="public/css/assets/fonts/Heebo/Heebo-Thin.woff" as="font" type="font/woff" crossorigin>

	<style>
		.secondary-header{position:fixed;top:0;left:0;z-index:99999;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;font-size:16px;background:#fff;-webkit-transition:-webkit-transform .4s;transition:-webkit-transform .4s;-o-transition:transform .4s;transition:transform .4s;transition:transform .4s,-webkit-transform .4s}.secondary-header.visible{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}@media (max-width:1280px){.secondary-header{font-size:14px}}@media (max-width:1100px){.secondary-header{font-size:12px}}@media (max-width:1000px){.secondary-header{display:none}}.secondary-header__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.75em 0}.secondary-header__logo{border-left:1px solid rgba(9,53,88,.2);width:11em;padding:0 1.25em}.secondary-header__logo img{display:block;width:100%;height:auto}.secondary-header__menu{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;padding:0;list-style:none}.secondary-header__menu-item{position:relative;padding:.25em .75em}.secondary-header__menu-item:not(:last-child){border-left:1px solid rgba(9,53,88,.2)}.secondary-header__menu-item>a{display:block;text-decoration:none;font-size:1em;line-height:1;color:#093558}.secondary-header__menu-item .secondary-header__submenu{top:100%;right:-1px}.secondary-header__menu-item:hover>a{color:#8dbb07}.secondary-header__menu-item:hover>.secondary-header__submenu{display:block}.secondary-header__menu-item.is-active>a{color:#8dbb07}.secondary-header__submenu{position:absolute;z-index:99999;display:none;width:11.11em;margin:0;padding:0;list-style:none}.secondary-header__submenu-item{position:relative;padding:.75em;background:#093558}.secondary-header__submenu-item:not(:last-child){-webkit-box-shadow:inset 0 -1px 0 #3a5d79;box-shadow:inset 0 -1px 0 #3a5d79}.secondary-header__submenu-item>a{text-decoration:none;font-size:1em;line-height:1;color:#fff}.secondary-header__submenu-item .secondary-header__submenu{top:0;right:100%}.secondary-header__submenu-item:hover{background:-webkit-gradient(linear,left top,left bottom,from(#8ebc07),to(#afd706));background:-o-linear-gradient(#8ebc07,#afd706);background:linear-gradient(#8ebc07,#afd706);-webkit-box-shadow:inset 0 -3px 0 rgba(0,0,0,.2);box-shadow:inset 0 -3px 0 rgba(0,0,0,.2)}.secondary-header__submenu-item:hover>.secondary-header__submenu{display:block}.secondary-header__submenu-item.is-active{background:-webkit-gradient(linear,left top,left bottom,from(#8ebc07),to(#afd706));background:-o-linear-gradient(#8ebc07,#afd706);background:linear-gradient(#8ebc07,#afd706);-webkit-box-shadow:inset 0 -3px 0 rgba(0,0,0,.2);box-shadow:inset 0 -3px 0 rgba(0,0,0,.2)}.secondary-header__search{position:relative;margin-right:.5em;padding:0 1.25em}.secondary-header__search-button{border-radius:5px;width:2.375em;height:2.1875em;background-color:#216396;background-image:url(assets/icons/search.svg);background-position:center center;background-size:1.125em 1.125em;background-repeat:no-repeat;-webkit-box-shadow:inset 0 -3px 0 rgba(0,0,0,.2);box-shadow:inset 0 -3px 0 rgba(0,0,0,.2)}.secondary-header__search-button:hover{background-color:#093558}.secondary-header__search-form{position:absolute;top:200%;left:1.25em;display:none;border-radius:5px;padding:1em;background-color:#fff;-webkit-box-shadow:3px 3px 7px rgba(24,24,24,.35);box-shadow:3px 3px 7px rgba(24,24,24,.35)}.secondary-header__search-form.visible{display:-webkit-box;display:-ms-flexbox;display:flex}.secondary-header__search-form input{border:0;font-family:inherit;font-size:inherit}.secondary-header__search-form input[type=search]{border-width:1px 1px 1px 0;border-style:solid;border-color:#216396;border-radius:0 5px 5px 0;width:12.5em;padding:0 .75em;-o-text-overflow:ellipsis;text-overflow:ellipsis;background-color:#fff;color:#093558}.secondary-header__search-form input[type=search]::-webkit-input-placeholder{color:#093558;opacity:1}.secondary-header__search-form input[type=search]::-moz-placeholder{color:#093558;opacity:1}.secondary-header__search-form input[type=search]:-ms-input-placeholder{color:#093558;opacity:1}.secondary-header__search-form input[type=search]::-ms-input-placeholder{color:#093558;opacity:1}.secondary-header__search-form input[type=search]::placeholder{color:#093558;opacity:1}.secondary-header__search-form input[type=submit]{-ms-flex-negative:0;flex-shrink:0;border:0;border-radius:5px 0 0 5px;width:2.5em;height:2.5em;font-size:inherit;background-color:#216396;background-image:url(assets/icons/search.svg);background-position:center center;background-size:1.125em 1.125em;background-repeat:no-repeat;-webkit-box-shadow:inset 0 -3px 0 rgba(0,0,0,.2);box-shadow:inset 0 -3px 0 rgba(0,0,0,.2)}.secondary-header__search-form input[type=submit]:hover{background-color:#093558}.progress-container{width:100%;height:5px;background:#f1f3f3}.progress-bar{width:0%;height:5px;background:-webkit-gradient(linear,left top,left bottom,from(#8ebc07),to(#afd706));background:-o-linear-gradient(#8ebc07,#afd706);background:linear-gradient(#8ebc07,#afd706)}
	</style>

	<style id="firstview-styles">
		<?php echo file_get_contents( 'public/css/first-view.css' ); ?>
		.m-intro ~ * {
			opacity: 0;
		}
		.header-internal  ~ * {
			opacity: 0;
		}
	</style>

	<noscript id="deferred-styles">
		<link rel="stylesheet" href="public/css/style.css?ver=<?= $ver; ?>" type="text/css" />
	</noscript>

    <script defer async>
      var loadDeferredStyles = function() {
		 
		
		var addStylesNode = document.getElementById("deferred-styles");
		var replacement = document.createElement("div");
		replacement.innerHTML = addStylesNode.textContent;
		replacement.className = 'byjs-full-stylesheet-holder';
		document.body.appendChild(replacement);
		addStylesNode.parentElement.removeChild(addStylesNode);

		var firstviewStyles = document.getElementById('firstview-styles');

		replacement.firstElementChild.addEventListener('load',function(){
			if(firstviewStyles){ firstviewStyles.parentNode.removeChild( firstviewStyles ); }
		});
			
      };
      var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      if (raf){
		   raf(function() { window.setTimeout(loadDeferredStyles, 0); });
	  } else {
		  window.addEventListener('load',loadDeferredStyles);
	  }
    </script>
	

</head>

<body class="<?= 'template-' . template_name() ; ?>">

<div id="wrapper" class="header-componsate">

<header id="site-top">

	<!-- header top (start) -->

	<div class="t-grid-header l-flex f-c site-top-table">

		<button id="open_mobile_menu" class="site-top-item l-center mobile-interact-cell" aria-label="פתח תפריט ראשי">
			<span class="mobile-btn-look"></span>
		</button>

		<a href="/" class="site-top-item l-center top-logo">

			<img src="assets/images/svg/logo.svg" width="221" height="55" alt="לוגו"/>

		</a>

		<button id="open_mobile_search" class="site-top-item l-center mobile-interact-cell" aria-label="הצג פאנל חיפוש">
			<i class="svgIcon icon-search-mobile"></i>
		</button>

		<div class="l-fg1 l-flex f-c f-jl top-main_panel">
			
			<ul class="norm-ul l-flex is-hidden--mobile top-main_panel-menu">
				<li>
					<a href="#">מי אנחנו</a>
				</li>
				<li>
					<a href="#">פרסם אצלנו</a>
				</li>
			</ul>

			<form class="l-rela l-flex fw-light top-search">

				<input class="norm-field l-fg1-w0 top-search-field" type="search" placeholder="מה תרצו ללמוד? איפה?"/ value="">

				<div class="bg-c2 l-rela top-search-submit">
					<i class="l-abs-center svgIcon icon-search"></i>
				</div>

				<div class="fw-light is-hidden--mobile top-search-notice">
					למשל: תואר ראשון במשפטים, הקריה האקדמית אונו
				</div>

			</form>

		</div>

	</div>

	<!-- header top (end) -->

	<!-- header menu (start) -->

	<nav class="bg-c2-dark header-menu">

		<div class="t-grid-header">

			<div id="main_menu">

				<ul class="l-tac norm-ul l-table main_menu-list">

					<li class="is-active">
						<a href="#">תואר ראשון</a>
					</li>
					<li>
						<a href="#">תואר שני</a>
					</li>
					<li>
						<a href="#">לימודי תעודה</a>
						<ul>
							<li class="is-active">
								<a href="#">תואר ראשון</a>
							</li>
							<li>
								<a href="#">פסיכומטרי</a>
							</li>
							<li>
								<a href="#">הנדסאי</a>
								<ul>
									<li>
										<a href="#">תואר ראשון</a>
									</li>
									<li>
										<a href="#">פסיכומטרי</a>
									</li>
									<li>
										<a href="#">הנדסאי</a>
									</li>
									<li>
										<a href="#">מלגות</a>
									</li>
									<li>
										<a href="#">סקר סטודנטים</a>
									</li>
									<li>
										<a href="#">ייעוץ אישי</a>
									</li>
								</ul>
							</li>
							<li>
								<a href="#">מלגות</a>
							</li>
							<li>
								<a href="#">סקר סטודנטים</a>
							</li>
							<li>
								<a href="#">ייעוץ אישי</a>
							</li>
						</ul>
					</li>
					<li>
						<a href="#">בגרויות</a>
					</li>
					<li>
						<a href="#">בחירת לימודים</a>
					</li>
					<li>
						<a href="#">פסיכומטרי</a>
					</li>
					<li>
						<a href="#">הנדסאי</a>
					</li>
					<li>
						<a href="#">מלגות</a>
					</li>
					<li>
						<a href="#">סקר סטודנטים</a>
					</li>
					<li>
						<a href="#">ייעוץ אישי</a>
					</li>
					
				</ul>

			</div>

		</div>

	</nav>
	<!-- header menu (end) -->

	<button data-popup="mobile_form_free_service" id="personal_advice_for_mobile">
		<i class="svgIcon icon-heart-white"></i>
		ייעוץ
		אישי
	</button>

	<div class="progress-container">
		<div class="progress-bar"></div>
	</div>

</header>

<!-- Secondary Header (start) -->
<div id="secondary_header" class="secondary-header">
	<div class="secondary-header__wrapper">
		<a href="#" class="secondary-header__logo"><img src="assets/images/svg/logo.svg" alt="Logo"></a>

		<nav>
			<ul class="secondary-header__menu">
				<li class="secondary-header__menu-item is-active"><a href="#">תואר ראשון</a></li>
				<li class="secondary-header__menu-item"><a href="#">תואר שני</a></li>
				<li class="secondary-header__menu-item">
					<a href="#">לימודי תעודה</a>
					<ul class="secondary-header__submenu">
						<li class="secondary-header__submenu-item"><a href="#">תואר ראשון</a></li>
						<li class="secondary-header__submenu-item"><a href="#">פסיכומטרי</a></li>
						<li class="secondary-header__submenu-item">
							<a href="#">הנדסאי</a>
							<ul class="secondary-header__submenu">
								<li class="secondary-header__submenu-item"><a href="#">תואר ראשון</a></li>
								<li class="secondary-header__submenu-item"><a href="#">פסיכומטרי</a></li>
								<li class="secondary-header__submenu-item"><a href="#">הנדסאי</a></li>
								<li class="secondary-header__submenu-item"><a href="#">מלגות</a></li>
								<li class="secondary-header__submenu-item"><a href="#">סקר סטודנטים</a></li>
								<li class="secondary-header__submenu-item"><a href="#">ייעוץ אישי</a></li>
							</ul>
						</li>
						<li class="secondary-header__submenu-item"><a href="#">מלגות</a></li>
						<li class="secondary-header__submenu-item"><a href="#">סקר סטודנטים</a></li>
						<li class="secondary-header__submenu-item"><a href="#">ייעוץ אישי</a></li>
					</ul>
				</li>
				<li class="secondary-header__menu-item"><a href="#">בגרויות</a></li>
				<li class="secondary-header__menu-item"><a href="#">בחירת לימודים</a></li>
				<li class="secondary-header__menu-item"><a href="#">פסיכומטרי</a></li>
				<li class="secondary-header__menu-item"><a href="#">הנדסאי</a></li>
				<li class="secondary-header__menu-item"><a href="#">מלגות</a></li>
				<li class="secondary-header__menu-item"><a href="#">סקר סטודנטים</a></li>
				<li class="secondary-header__menu-item"><a href="#">ייעוץ אישי</a></li>
			</ul>
		</nav>

		<div class="secondary-header__search">
			<button class="secondary-header__search-button"></button>

			<form class="secondary-header__search-form">
				<input type="search" placeholder="מה תרצו ללמוד? איפה?">
				<input type="submit" value="">
			</form>
		</div>
	</div>

	<div class="progress-container">
		<div class="progress-bar js-progress-bar"></div>
	</div>
</div>
<!-- Secondary Header (end) -->

<div class="l-rela wrapper-body">
	