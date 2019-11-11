<template>
	<div class="cube-wrap">
		<cube></cube>
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
  justify-content: center;
  align-items: center;
	perspective: 800px;
}
</style>