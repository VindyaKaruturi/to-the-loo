
import { LooListModel } from '@/models/LooListModel';
import AxiosInstance from './AxiosInstance';


class FetchLooService {
  private looList : Array<LooListModel> = [];

  /**
   * Fetches complete loolist irrespective of gender.
   */
  public async fetchNearestLoo() : Promise<Array<LooListModel>> {
    try {
      const response = await AxiosInstance.instance.get('loolist.json');
      this.looList = response.data.LooList;
    } catch (err) {
      throw (err);
    }
    return this.looList;
  }
}
export default new FetchLooService();
