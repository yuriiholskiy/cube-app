<template>
	<div>
		<h2>
			page 1
		</h2>
		<nuxt-link :to="{name: 'index'}">home</nuxt-link>
	</div>
</template>

<script>
export default {
	transition: {
		name: 'zoomOutUp',
		mode: 'out-in'
	}
}
</script>

<style></style>