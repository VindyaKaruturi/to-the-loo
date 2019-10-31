import { expect } from 'chai';
import LandingService from '@/helpers/LandingService';
import { LooListModel } from '@/models/LooListModel';


describe('Landing Service', () => {
  it('tests the grouping logic', () => {
    const LooList: Array<LooListModel> = [
      {
        id: 1,
        level: 'Level1',
        levelName: 'The Blue Room',
        gender: 'Ladies',
        location: 'East end, opposite Target',
        isAvailable: 'Y',
      },
      {
        id: 2,
        level: 'Level1',
        levelName: 'The Blue Room',
        gender: 'Mens',
        location: 'East end, opposite Target',
        isAvailable: 'Y',
      },
    ];
    const response = LandingService.groupLooData(LooList);
    const expectedResponse = [{
      level: 'Level1',
      levelName: 'The Blue Room',
      isAvailable: true,
      location: [
        {
          location: 'East end, opposite Target',
          isAvailable: 'Y',
          locationList: LooList,
        },
      ],
    }];
    expect(response).to.deep.equal(expectedResponse);
  });
});
