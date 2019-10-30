
import { LooListModel } from '@/models/looListModel';
import axiosInstance from './axiosInstance';


export default class FetchLooService {
  private looList : Array<LooListModel> = [];

  /**
   * Fetches complete loolist irrespective of gender.
   */
  public async fetchNearestLoo() : Promise<Array<LooListModel>> {
    try {
      const response = await axiosInstance.instance.get('loolist.json');
      this.looList = response.data.LooList;
    } catch (err) {
      throw (err);
    }
    return this.looList;
  }
}
