<template>
	<div class="cube-wrap">
		<cube></cube>

		<div class="info">
			<a class="btn" href="https://github.com/yuriiholskiy" target="_blank" rel="noopener">
				Github
			</a>
			<p class="mt-1">
				You can stop the cube rotation by clicking around cube. 
				To start rotate again click one more time.
			</p>
			<p class="mt-1 hide-mobile">
				On the other hand, You can rotate cube using arrow on keyboard.
			</p>
			<p class="mt-1 hide-mobile">
				Created by Yurii Golskyi. &copy; {{ new Date().getFullYear() }}
			</p>
		</div>
	</div>
</template>

<script>
import Cube from '~/components/Cube';
export default {
	components: {
		Cube
	},
	transition: {
		name: 'fade',
		mode: 'out-in'
	}
}
</script>

<style>
.cube-wrap {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	perspective: 800px;
}
.info {
	margin-top: 10rem;
	margin-bottom: 10rem;
}
</style>