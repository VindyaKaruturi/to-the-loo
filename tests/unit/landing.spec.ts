import { expect } from 'chai';
import {
  shallowMount,
  createLocalVue,
} from '@vue/test-utils';
import sinon from 'sinon';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Landing from '@/views/landing.vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('Landing.vue', () => {
  let actions;
  let store : any;
  let looList : any[] = [];
  let login;
  const listJson = {
    LooList: [{
      id: 1,
      level: 'Level1',
      gender: 'Ladies',
      levelName: 'The Blue Room',
      location: 'East end, opposite Target',
      isAvailable: true,
    },
    {
      id: 2,
      level: 'Level1',
      gender: 'Mens',
      levelName: 'The Blue Room',
      location: 'East end, opposite Target',
      isAvailable: true,
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
});
