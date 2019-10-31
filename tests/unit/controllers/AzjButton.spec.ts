import { expect } from 'chai';
import {
  shallowMount,
} from '@vue/test-utils';
import AzjButton from '@/components/AzjButton.vue';

describe('AzjButton.vue', () => {
  it('tests whether button rendered properly', () => {
    const wrapper = shallowMount(AzjButton, ({
      propsData: {
        buttonText: 'click here',
        isDisabled: true,
        btnClick: () => console.log('hello'),
      },
    }));
    expect(wrapper.find('.button.button').text()).to.equal('click here');
  });
});
