import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import { LooListModel } from '@/models/LooListModel';
import FetchLooService from '@/services/FetchLooService';

@Module({
  namespaced: true,
})
export default class UserModule extends VuexModule {
  private looList!: Array<LooListModel>;

  @Mutation
  setLooList(list: Array<LooListModel>) {
    this.looList = list;
  }

  @Action({ commit: 'setLooList' })
  async fetchLooList(): Promise<Array<LooListModel>> {
    try {
      const LooList = await FetchLooService.fetchNearestLoo();
      return LooList;
    } catch (err) {
      throw err;
    }
  }
}
