<template>
	<div class="container">
		<h1 class="title text-center mt-2">CubeNuxt there</h1>
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
::selection {
	background-color: #c88d39;
}

.container {
	max-width: 1024px;
	margin: 0 auto;
	padding: 0 2rem;
}

@media screen and (max-width: 450px) {
	.title {
		font-size: 2rem;
		font-family: monospace;
		color: #fbe0bb;
	}
}
</style>
