<template>
	<div>
		<h2>
			page 2
		</h2>
		<nuxt-link :to="{name: 'index'}">home</nuxt-link>
	</div>
</template>

<script>
export default {
	transition: {
  	name: 'zoomOutDown',
  	mode: 'out-in'
  }
}
</script>

<style></style>