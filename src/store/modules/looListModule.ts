import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import { LooListModel } from '@/models/looListModel';
import FetchLooService from '@/services/fetchLooService';

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
    const LooList = await new FetchLooService().fetchNearestLoo();
    return LooList;
  }
}
