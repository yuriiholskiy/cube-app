<template>
	<div class="container">
		<h1 class="title text-center">CubeNuxt there</h1>
		<nuxt />
	</div>
</template>

<style>
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
.title {
	font-size: 3rem;
	font-family: monospace;
	color: #fbe0bb;
}
.title::selection {
	background-color: #c88d39;
}

.container {
	max-width: 1024px;
	margin: 1rem auto;
	padding: 0 2rem;
}

</style>
