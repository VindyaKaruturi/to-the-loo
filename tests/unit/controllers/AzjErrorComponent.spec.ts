import { expect } from 'chai';
import {
  shallowMount,
} from '@vue/test-utils';
import AzjErrorComponent from '@/components/AzjErrorComponent.vue';

describe('AzjErrorComponent.vue', () => {
  it('tests whether Error component rendering proper error message', () => {
    const wrapper = shallowMount(AzjErrorComponent, ({
      propsData: {
        message: 'Oops..Something went wrong. Please try again after sometime.',
      },
    }));
    expect(wrapper.html()).to.contain('Oops..Something went wrong. Please try again after sometime.');
  });
});
