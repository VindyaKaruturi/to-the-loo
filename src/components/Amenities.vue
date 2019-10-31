<template>
    <div class="amenities-component">
        <div class="mainDiv" :class="amenityDetails.isAvailable ? '' : 'error-background'">
            <div class="level pt-2">
                {{ amenityDetails.level }}
                <span class="levelName" v-if="showUpdate">
                    _ {{ amenityDetails.levelName | capitalize }}
                </span>
            </div>
            <div class="row py-1"
             v-for="(eachAmenity,index) in amenityDetails.location"
             :key="index"
             :class="amenityDetails.isAvailable && eachAmenity.isAvailable === 'N'
             ? 'error-background' : ''"
            >
              <div class="col-5 amenity-align px-1">
                    <div v-for="(item,index) in eachAmenity.locationList" :key="index">
                        <img v-if="item.gender === 'Mens'"
                         src="@/assets/Mens_icon.png"
                         height="50px" width="50px"
                        />
                        <img v-if="item.gender === 'Ladies'"
                         src="@/assets/Ladies_icon.png"
                         height="50px"
                         width="50px"
                        />
                        <img v-if="item.gender === 'Accessible'"
                         src="@/assets/Accessible_icon.png"
                         height="50px"
                         width="50px"
                        />
                        <img v-if="item.gender === 'Parents'"
                         src="@/assets/Parents_icon.png" height="50px"
                         width="50px"
                        />
                    </div>
                </div>
                <div class="col-7 coloum px-3 py-2">
                    <div class="location">{{ eachAmenity.location }}</div>
                    <div v-if="showUpdate || eachAmenity.isAvailable === 'N'" class="update-text">
                        <span v-if="eachAmenity.isAvailable === 'Y'">
                {{ constants.amenities.AVAILABLE_TEXT }}
              </span>
                        <span v-else class="error-msg-color">
                {{ constants.amenities.UNAVAILABLE_TEXT }}
              </span>
                    </div>
                    <div v-if="showUpdate && eachAmenity.isAvailable === 'Y'"
                     class="separator mt-1">
                    </div>
                </div>
            </div>
            <button v-if="showUpdate" class="btn-see-amenity mb-2">
                {{ constants.amenities.SEE_AMENITIES }}
            </button>
        </div>
    </div>
</template>

<script lang="ts" src="@/controllers/Amenities.ts"></script>

<style lang="scss">
    @import "@/styles/Amenities.scss";
</style>
