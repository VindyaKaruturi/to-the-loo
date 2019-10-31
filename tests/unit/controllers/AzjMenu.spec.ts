import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import AzjMenu from '@/components/AzjMenu.vue';
import { UserModel } from '@/models/UserModel';

describe('AzjMenu.vue', () => {
  it('tests whether user list rendered properly', () => {
    const userList: Array<UserModel> = [
      {
        titleName: 'Ladies',
        isActive: false,
      },
      {
        titleName: 'Mens',
        isActive: false,
      },
      {
        titleName: 'Accessible',
        isActive: false,
      },
    ];
    const wrapper = shallowMount(AzjMenu, {
      propsData: {
        userList,
      },
    });
    expect(wrapper.html()).to.contain('Ladies toilets');
  });
  it('tests showHideNavBar function', () => {
    const wrapper = shallowMount(AzjMenu);
    wrapper.vm.$data.showNavContent = true;
    (wrapper.vm as any).showHideNavBar();
    expect(wrapper.vm.$data.showNavContent).to.eq(false);
  });
  it('tests the selected user function', () => {
    const wrapper = shallowMount(AzjMenu);
    const element: UserModel = {
      titleName: 'Ladies',
      isActive: false,
    };
    (wrapper.vm as any).userSelected(element);
    expect(wrapper.vm.$data.showNavContent).to.eq(false);
  });
});
