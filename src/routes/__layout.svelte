<style lang="scss">
$bgColor1: #dfffe9;
$bgColor2: #0af5d1;
$bgColor3: #003d87;
$bgColor4: #958fcf;
$bgColor5: #a266eb;
$bgColor6: #c62368;
$bgColor7: #fa7268;

$bgHeight: 100vh;

.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-x: hidden;

	.bg-piece {
		position: absolute;
		height: $bgHeight;
		width: 100%;
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		z-index: -1;

		@for $i from 1 through 4 {
			&:nth-of-type(#{$i}) {
				top: ($i - 1) * $bgHeight;
				background-image: url('./bg-#{$i}.svg');
			}
		}
	}
}
:root {
	/* width */
	&::-webkit-scrollbar {
		width: 0.6rem;
	}

	/* Track */
	&::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	/* Handle */
	&::-webkit-scrollbar-thumb {
		background: #888;
	}

	/* Handle on hover */
	&::-webkit-scrollbar-thumb:hover {
		background: #777;
	}
}
</style>

<script>
import '../tailwind.css';
import Titlebar from '../components/titlebar.svelte';
</script>

<div class="wrapper">
	<div class="bg-piece"></div>
	<div class="bg-piece"></div>
	<div class="bg-piece"></div>
	<div class="bg-piece"></div>
	<Titlebar />
	<slot />
</div>
