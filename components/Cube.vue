<template>
	<div class="cube" :style="cubeStyle">
		<nuxt-link :to="{name: 'page1'}" class="side front">Page 1</nuxt-link>
		<nuxt-link :to="{name: 'page2'}" class="side back">Page 2</nuxt-link>
		<nuxt-link :to="{name: 'page3'}" class="side right">Page 3</nuxt-link>
		<nuxt-link :to="{name: 'page4'}" class="side left">Page 4</nuxt-link>
		<nuxt-link :to="{name: 'page5'}" class="side top">Page 5</nuxt-link>
		<nuxt-link :to="{name: 'page6'}" class="side bottom">Page 6</nuxt-link>
	</div>
</template>

<script>
import { debounce } from '~/utils';
export default {
	props: {
		size: {
			type: [String, Number],
			default: 300
		}
	},
	data() {
		return {
			rotateX: 0,
			rotateY: 50,
			rotationVal: 10,
			rotationId: null
		}
	},
	mounted() {
		this.keyDownHandler = (event) => {
			if(event.keyCode === 37) {
				this.rotateY -= this.rotationVal;
			} else if(event.keyCode === 38) {
				this.rotateX += this.rotationVal;
			} else if(event.keyCode === 39) {
				this.rotateY += this.rotationVal;
			} else if(event.keyCode === 40) {
				this.rotateX -= this.rotationVal;
			}
		}
		document.addEventListener('keydown', this.keyDownHandler);

		this.cubeRotation(2, 200);

		this.$once('hook:destroyed', () => {
			document.removeEventListener('keydown', this.keyDownHandler);
			window.clearInterval(this.rotationId);
		});
	},
	methods: {
		cubeRotation(val = 2, timeout = 200) {
			this.rotationId = window.setInterval(() => {
				this.rotateX += val;
				this.rotateY += val;
			}, timeout);
		}
	},
	computed: {
		cubeStyle() {
			return {
				transform: `rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(50deg)`
			}
		}
	}
}
</script>

<style>
.cube {
	position: relative;
	margin-left: auto;
	margin-right: auto;
	width: var(--cube-size);
	height: var(--cube-size);
	transform-style: preserve-3d;
	transition: transform .2s linear;
}

.side {
	display: block;
	text-decoration: none;
	position: absolute;
	width: inherit;
	height: inherit;
	border: .5rem solid #fff;
	font: normal 7rem Arial;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: #fff;
	backface-visibility: hidden;
}
.side:focus {
	border: .5rem solid lightblue;
}
.front {
	background-color: rgb(150, 10, 20);
	transform: translateZ(calc(var(--cube-size) / 2));
}

.back {
	background-color: rgb(150, 50, 20);
	transform: rotateY(180deg) translateZ(calc(var(--cube-size) / 2));
}

.right {
	background-color: rgb(150, 90, 20);
	transform: rotateY(90deg) translateZ(calc(var(--cube-size) / 2));
}

.left {
	background-color: rgb(150, 130, 20);
	transform: rotateY(-90deg) translateZ(calc(var(--cube-size) / 2));
}

.top {
	background-color: rgb(150, 170, 20);
	transform: rotateX(90deg) translateZ(calc(var(--cube-size) / 2));
}

.bottom {
	background-color: rgb(150, 210, 20);
	transform: rotateX(-90deg) translateZ(calc(var(--cube-size) / 2));
}


@media screen and (max-width: 600px) {
	.side {
		font-size: 5rem;
	}
}
</style>