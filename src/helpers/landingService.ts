import { groupBy } from '@/utility/genericUtility';
import { groupedByLocation, groupedLooList, LooListModel } from '@/models/looListModel';

class LandingService {
  /**
   * group the loolist based on the gender, Level and location
   * @param loolist
   */
  public groupLooData(loolist : Array<LooListModel>) : Array<groupedLooList> {
    const groupByLevel = groupBy(loolist, 'level');
    const groupedData : Array<groupedLooList> = [];
    let groupedObj: groupedLooList;
    Object.keys(groupByLevel).forEach((ele) => {
      const { levelName } = groupByLevel[ele][0];
      const groupByLocation = groupBy(groupByLevel[ele], 'location');
      const checkLocationAvailable = this.checkLocationAvailability(groupByLocation);
      const levelAvailability = this.checkLevelAvailability(checkLocationAvailable);
      groupedObj = {
        level: ele,
        isAvailable: levelAvailability,
        levelName,
        location: checkLocationAvailable,
      };
      groupedData.push(groupedObj);
    });
    return groupedData;
  }

  /**
   * Checks whether the loo at particular location is available
   * or not
   * @param groupByLocation
   */
  public checkLocationAvailability(groupByLocation: any) {
    let groupByLocationobj: groupedByLocation;
    const groupByLocationList: Array<groupedByLocation> = [];
    Object.keys(groupByLocation).forEach((location) => {
      groupByLocationobj = {
        location,
        isAvailable: groupByLocation[location][0].isAvailable,
        locationList: groupByLocation[location],
      };
      groupByLocationList.push(groupByLocationobj);
    });
    return groupByLocationList;
  }

  /**
   * Checks whether all the toilets in a level are available or not
   * @param locationList
   */
  public checkLevelAvailability(locationList : Array<groupedByLocation>) : boolean {
    let available : boolean = true;
    const unAvailableLocation = locationList
      .filter(eachlocation => eachlocation.isAvailable === 'N');
    if (unAvailableLocation.length === locationList.length) {
      available = false;
    }
    return available;
  }
}

export default new LandingService();
