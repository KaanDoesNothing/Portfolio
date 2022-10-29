<template>
    <div class="bg-gray-50" :class="width ? width : 'w-60'">
        <div class="p-2 bg-gray-900 text-center">
            <label class="text-white font-mono font-bold">{{title}}</label>
        </div>
        <div>
            <div class="p-5 flex justify-center items-center">
                <slot></slot>
            </div>
        </div>
    </div>
  </template>
  
<script lang="ts">
  import {computed, defineComponent} from "vue";
  export default defineComponent({
    name: "UICard",
    props: {
      title: String,
      width: String
    },
    setup(props) {
      return {props: computed(() => props)};
    }
  });
  </script>
