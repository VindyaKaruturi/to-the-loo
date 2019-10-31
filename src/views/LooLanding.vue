<template>
   <div class="landing">
      <!-- Spinner component -->
      <div v-if="!loadContent" class="d-flex justify-content-center mt-3">
         <azj-spinner></azj-spinner>
      </div>
      <div v-if="loadContent">
         <!-- Error Message component -->
         <div v-if="errorMessage">
            <div class="heading">
               {{constants.landing.MAIN_TEXT}}
            </div>
            <azj-error-component :message="constants.ERROR_MESSAGE"></azj-error-component>
         </div>
         <div v-else>
            <!-- Menu component -->
            <div class="menu mr-2">
               <azj-menu ref="sidemenu" :userList="usersList"
                  @selectedUser="selectAmenities"></azj-menu>
            </div>
               <div class="heading"
                  v-on:click = "resetUserSelection()">{{constants.landing.MAIN_TEXT}}
               </div>
               <div>
                  <div class="row d-flex d-flex-row">
                     <div class="col-3 col"
                        @click="selectAmenities(item)"
                        v-for="item in usersList" v-bind:key="item.titleName">
                        <div class="d-flex justify-content-center">
                           <div class="img">
                              <img v-if="item.titleName === 'Mens'"
                              src = '@/assets/Mens_icon.png'
                              width="90"
                              height="90"/>
                              <img v-if="item.titleName === 'Ladies'"
                              src = '@/assets/Ladies_icon.png'
                              width="90"
                              height="90"/>
                              <img v-if="item.titleName === 'Accessible'"
                              src = '@/assets/Accessible_icon.png'
                              width="90"
                              height="90"/>
                              <img v-if="item.titleName === 'Parents'"
                              src = '@/assets/Parents_icon.png'
                              width="90"
                              height="90"/>
                           </div>
                           <div class="title-div">
                              <div class="title-border"
                                 :class="item.isActive ? 'title-border-isActive' : ''">
                                 <p class="title"
                                    :class="item.isActive ? 'title-isActive' : ''">
                                    {{item.titleName}}
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="mt-1 pt-2">{{constants.landing.MESSAGE}}</div>
               <!-- Button Component -->
               <azj-button :buttonText="constants.landing.BUTTON_TEXT"
                  :isDisabled = "!isActive" :btnClick="showWay">
               </azj-button>
               <div class="amenities" :class="isActive ? 'background-img' : ''">
                  <div class="amenities-text pt-2">{{amenitiesLabel}}</div>
                  <div class="amenities-div"
                  v-for= "(amenity,index) in groupedLooList" :key="index">
                     <Amenities :showUpdate="isActive" :amenityDetails="amenity"></Amenities>
                  </div>
               </div>
         </div>
      </div>
   </div>
</template>
<script lang="ts" src="@/controllers/LooLanding.ts"></script>
<style scoped lang="scss">
   @import '@/styles/LooLanding.scss';
</style>
