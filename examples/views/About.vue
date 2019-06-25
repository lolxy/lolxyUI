<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h-test>32323</h-test>
    <h-button></h-button>
  </div>
</template>

<script>
import Vue from 'vue'
import hTest from '../../components/hTest'
import hButton from '../../components/hButton'

export default {
  components: {
    hTest,
    hButton
  }
}
</script>
