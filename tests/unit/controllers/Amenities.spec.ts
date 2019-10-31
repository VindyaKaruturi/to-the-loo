import { expect } from 'chai';
import {
  shallowMount,
} from '@vue/test-utils';
import Amenities from '@/components/Amenities.vue';
import { groupedLooList } from '@/models/LooListModel';

describe('Amenities.vue', () => {
  const amenityDetails : groupedLooList = {
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
  };
  it('tests whether props rendering properly', () => {
    const wrapper = shallowMount(Amenities, ({
      propsData: {
        amenityDetails,
      },
    }));
    expect(wrapper.html()).to.contain('East end, opposite Target');
  });
  it('tests whether updates are shown properly', () => {
    const showUpdate = true;
    const wrapper = shallowMount(Amenities, ({
      propsData: {
        amenityDetails,
        showUpdate,
      },
    }));
    expect(wrapper.html()).to.contain('Stalls available- *Live Update');
  });
});
