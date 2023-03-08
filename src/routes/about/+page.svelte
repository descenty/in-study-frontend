<script lang="ts">
	import { fade } from 'svelte/transition';
	import Irina from '$lib/images/photo.jpg';
	import WhatsAppIcon from '~icons/logos/whatsapp-icon';
	import ViberOutline from '~icons/basil/viber-outline';
	import favicon from '$lib/images/favicon.png';

	const phone = '79155769698';
</script>

<svelte:head>
	<title>Обо мне</title>
</svelte:head>

<section transition:fade>
	<div class="photo-div">
		<h1>ИРИНА ПЕТРОВНА РЫЖОВА</h1>
		<div class="info-div">
			<ul>
				<li>врач-стоматолог, врач интегративной медицины</li>
				<li>доктор медицинских наук, профессор</li>
				<li>член-корреспондент РАЕ</li>
				<li>Эксперт Международной ассоциации геронтологии и гериатрии по ароматерапии</li>
				<li>Основатель аромашколы “AromiMir” и автор курсов по ароматерапии</li>
				<li>Лауреат Премии “Успешная мама” в номинации ”Ароматерапевт года 2022”</li>
			</ul>
			<img src={Irina} alt="Ирина Петровна Рыжова" />
		</div>
		<h3>Обо мне</h3>
		<p>
			Занимаюсь любимым делом и продолжаю вдохновляться от результатов. Своей миссией считаю важным
			передать свой опыт и знания, собранные за десятки лет практики для большего количества людей,
			делая их здоровее и счастливее.
		</p>
		<h3>Опыт работы</h3>
		<p>
			Тысячи довольных пациентов, множество успешных учеников. Написано свыше двухсот научных трудов
			и научно-популярных статей, запатентовано более тринадцати изобретений.
		</p>
		<h3>Области профессиональных интересов</h3>
		<p>
			Комплексная реабилитация стоматологических больных;
			<br />
			разработка отечественных материалов для практической стоматологии;
			<br />
			антивозрастная интегративная медицина, ароматерапия, аромапсихология, аромакосметология, рефлексотерапия.
		</p>
		<h3>Мои контакты</h3>
		<a href={`tel:+${phone}`}
			><span>+7 (915) 576-96-98</span><WhatsAppIcon /> <ViberOutline color="#7C519E" /></a
		>
		<!-- <img class="green-div" src={favicon} alt="favicon" /> -->
		<div class="green-circle" />
	</div>
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		align-self: center;
		width: 800px;
		gap: 1.5em;
		h1 {
			font-size: 2em;
			z-index: 1;
		}
		b {
			font-size: 1.1em;
		}
		.photo-div {
			position: relative;
			overflow: hidden;
			display: flex;
			flex-direction: column;
			gap: 1.4em;
			box-shadow: 1px 1px 16px rgba(0, 0, 0, 0.1);
			padding: 2em;
			padding-inline: 2.5em;
			border-radius: 20px;
			background: white;
			h1 {
				text-indent: 0.5em;
			}
			p {
				letter-spacing: 1px;
				font-size: 1.1em;
			}
			.info-div {
				display: flex;
				justify-content: space-between;
				gap: 1em;
				ul {
					width: 300px;
					margin-left: 2em;
					display: flex;
					flex-direction: column;
					gap: 1em;
					letter-spacing: 1px;
					font-size: 1.02em;
					color: rgb(39, 39, 39);
				}
				img {
					width: 350px;
					object-fit: cover;
					border-radius: 16px;
					z-index: 1;
					box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.314);
				}
			}
		}
		/* > div {
			display: flex;
			flex-direction: column;
			gap: 0.5em;
		} */
		a {
			.icon {
				font-size: 2em;
			}
			display: flex;
			gap: 0.5em;
			align-items: center;
			font-size: 1.8em;
			span {
				font-size: 20px;
				font-style: italic;
			}
		}
	}
	a {
		font-size: 1.1em;
	}
	@media (max-width: 800px) {
		section {
			width: 100%;
			h1 {
				text-indent: 0px !important;
				font-size: 2em;
			}
			div {
				flex-direction: column;
				align-items: center;
				img {
					order: -1;
				}
				ul {
					width: 100%;
				}
				img {
					width: 75%;
				}
			}
		}
	}
	.green-div {
		position: absolute;
		width: 500px;
		height: 200px;
		background: #6dbd7b;
		right: -200px;
		bottom: -120px;
		transform: rotate(-20deg);
	}
	.green-circle {
		position: absolute;
		border-radius: 50%;
		width: 130px;
		height: 130px;
		background: #6dbd7b;
		right: 300px;
		top: 70px;
	}
</style>
