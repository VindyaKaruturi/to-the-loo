import { expect } from 'chai';
import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils';
import sinon from 'sinon';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Landing from '@/views/LooLanding.vue';
import FetchLooService from '@/services/FetchLooService';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('Landing.vue success flow', () => {
  let actions;
  let store : any;
  let looList : any[] = [];
  const listJson = {
    LooList: [{
      id: 1,
      level: 'Level1',
      gender: 'Ladies',
      levelName: 'The Blue Room',
      location: 'East end, opposite Target',
      isAvailable: 'Y',
    },
    {
      id: 2,
      level: 'Level1',
      gender: 'Mens',
      levelName: 'The Blue Room',
      location: 'East end, opposite Target',
      isAvailable: 'Y',
    },
    ],
  };
  beforeEach(() => {
    actions = {
      fetchLooList: sinon.stub().returns(listJson),
    };
    looList = listJson.LooList;
    const looListModule = {
      namespaced: true,
      state: {
        looList,
      },
      actions,
    };
    store = new Vuex.Store({
      modules: {
        looListModule,
      },
    });
  });
  it('render landing component check', () => {
    const wrapper = shallowMount(Landing, {
      store,
      localVue,
    });
    const element = {
      titleName: 'Ladies',
      isActive: false,
    };
    (wrapper.vm as any).selectAmenities(element);
    expect(wrapper.vm.$data.isActive).to.eq(true);
  });
  it('resets user selection', () => {
    const wrapper = shallowMount(Landing, {
      store,
      localVue,
    });
    (wrapper.vm as any).resetUserSelection();
    expect(wrapper.vm.$data.isActive).to.eq(false);
  });
  it('tests the fetch user list', () => {
    const wrapper = shallowMount(Landing, {
      store,
      localVue,
    });
    wrapper.vm.$data.usersList = [];
    (wrapper.vm as any).fetchUserList();
    expect(wrapper.vm.$data.usersList.length).to.eq(4);
  });
  it('tests the selectedUserAmenities function', () => {
    const wrapper = shallowMount(Landing, {
      store,
      localVue,
    });
    const element = {
      titleName: 'Ladies',
      isActive: false,
    };
    (wrapper.vm as any).selectedUserAmenities(element);
    const expectedResponse = [{
      level: 'Level1',
      levelName: 'The Blue Room',
      isAvailable: true,
      location: [
        {
          location: 'East end, opposite Target',
          isAvailable: 'Y',
          locationList: [
            {
              id: 1,
              level: 'Level1',
              gender: 'Ladies',
              levelName: 'The Blue Room',
              location: 'East end, opposite Target',
              isAvailable: 'Y',
            },
          ],
        },
      ],
    }];
    expect(wrapper.vm.$data.groupedLooList).to.deep.equal(expectedResponse);
  });
});
describe('Landing.vue error flow', () => {
  let actions;
  let store : any;
  let looList : any[] = [];
  let login;
  beforeEach(() => {
    actions = {
      fetchLooList: sinon.stub().throws('error'),
    };
    looList = [];
    const looListModule = {
      namespaced: true,
      state: {
        looList,
      },
      actions,
    };
    store = new Vuex.Store({
      modules: {
        looListModule,
      },
    });
  });
  it('tests the service failure scenario', () => {
    const wrapper = shallowMount(Landing, {
      store,
      localVue,
    });
    sinon.stub(FetchLooService, 'fetchNearestLoo').throws('error');
    expect(wrapper.vm.$data.errorMessage).to.eq('Oops..Something went wrong. Please try again after sometime.');
    (FetchLooService.fetchNearestLoo as any).restore();
  });
});
