<template>
    <div>
        <div class="sidenav"
        :class="showNavContent ? 'show-content' : 'hide-content'">
        <div class="img" @click="showHideNavBar">
          <img src="@/assets/Group.png"/>
        </div>
        <div>
          <div class="title">{{constants.landing.MAIN_TEXT}}</div>
        </div>
            <div class="background mt-3">
              <div class="amenities-text ml-4 pt-3">{{constants.amenities.AMENITIES_PROVIDED}}</div>
                <div v-for = "item in userList" :key="item.titleName">
                <div class="d-flex d-flex-row ml-4" @click="userSelected(item)">
                 <div class="mt-3">
                    <img
                    v-if="item.titleName === 'Mens'"
                    src="@/assets/Mens_icon.png"
                    height="64px"
                    width="64px"
                  />
                  <img
                    v-if="item.titleName === 'Ladies'"
                    src="@/assets/Ladies_icon.png"
                    height="64px"
                    width="64px"
                  />
                  <img
                    v-if="item.titleName === 'Accessible'"
                    src="@/assets/Accessible_icon.png"
                    height="64px"
                    width="64px"
                  />
                  <img
                    v-if="item.titleName === 'Parents'"
                    src="@/assets/Parents_icon.png"
                    height="64px"
                    width="64px"
                  />
               </div>
               <div class="content ml-1">{{item.titleName}} toilets</div>
                </div>
            </div>
            <div class="d-flex d-flex-row mt-5 ml-4 pb-3" @click="showHideNavBar">
              <img
                src="@/assets/Contact.png"
                height="64px"
                width="64px"
              />
              <div class="content ml-1">{{constants.CONTACT_US}}</div>
            </div>
            </div>
        </div>
        <span class="menu" @click="showHideNavBar">&#9776;</span>
    </div>
</template>

<script lang="ts" src="@/controllers/AzjMenu.ts"></script>

<style lang="scss">
    @import '@/styles/AzjMenu.scss';
</style>
