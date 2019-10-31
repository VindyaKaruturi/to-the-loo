<template>
    <div class="azj-button">
      <button class="button"
        :class="isDisabled ? '' : 'button-Active'"
        :disabled="isDisabled"
        v-on:click="btnClick">
        {{buttonText}}
      </button>
    </div>
</template>

<script lang="ts" src="@/controllers/AzjButton.ts"></script>

<style lang="scss">
    @import '@/styles/Azjbutton.scss';
</style>
