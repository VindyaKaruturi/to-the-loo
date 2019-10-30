<template>
    <div class="azjButton">
      <button class="button"
        :class="isDisabled ? '' : 'button-Active'"
        :disabled="isDisabled"
        v-on:click="btnClick">
        {{buttonText}}
      </button>
    </div>
</template>

<script lang="ts" src="@/controllers/azjButton.ts"></script>

<style lang="scss">
    @import '@/styles/azjbutton.scss';
</style>
