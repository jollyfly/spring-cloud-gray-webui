import { Action, getModule, Module, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store'
import { ResponseCommands, URL } from '@/api/Api'
import GrayInstance from '@/model/GrayInstance'
import Pageable from '@/model/Pageable'
import GrayDecision from '@/model/GrayDecision'
import GrayService from '@/model/GrayService'

export interface AppState {
  grayInstancePage: Pageable<Array<GrayInstance>, GrayInstance>,
  grayDecisionPage: Pageable<Array<GrayDecision>, GrayDecision>
  grayServicePage: Pageable<Array<GrayService>, GrayService>,
  mainMenu: {activeIndex: string}
}

@Module({ dynamic: true, store, name: 'app' })
class App extends VuexModule implements AppState {
  public grayInstancePage = {
    pageNumber: 1,
    pageSize: 10,
    hasNext: false,
    data: new Array<GrayInstance>(0),
    totalCount: 0
  }

  public grayDecisionPage = {
    pageNumber: 1,
    pageSize: 10,
    hasNext: false,
    data: new Array<GrayDecision>(0),
    totalCount: 0
  }

  public grayServicePage = {
    pageNumber: 1,
    pageSize: 10,
    hasNext: false,
    data: new Array<GrayService>(0),
    totalCount: 0
  }

  public mainMenu = {
    activeIndex: 'instance'
  }

  @Action({ commit: 'SET_GRAY_INSTANCE_PAGE', rawError: true })
  public async grayInstance(params: any) {
    const pageData = await ResponseCommands.pageCommand().getResponse(params, URL.INSTANCE)
    return pageData
  }

  @Mutation
  private SET_GRAY_INSTANCE_PAGE(pageData: { totalCount: number, data: Array<GrayInstance> }) {
    this.grayInstancePage.totalCount = pageData.totalCount
    this.grayInstancePage.hasNext =
      this.grayInstancePage.pageNumber * this.grayInstancePage.pageSize >= pageData.totalCount
    this.grayInstancePage.data = pageData.data
  }

  @Action({ commit: 'SET_GRAY_DECISION_PAGE', rawError: true })
  public async grayDecision(params: any) {
    const pageData = await ResponseCommands.pageCommand().getResponse(params, URL.DECISION)
    return pageData
  }

  @Mutation
  private SET_GRAY_DECISION_PAGE(pageData: { totalCount: number, data: Array<GrayDecision> }) {
    this.grayDecisionPage.totalCount = pageData.totalCount
    this.grayDecisionPage.hasNext =
      this.grayDecisionPage.pageNumber * this.grayInstancePage.pageSize >= pageData.totalCount
    this.grayDecisionPage.data = pageData.data
  }

  @Action({ commit: 'SET_GRAY_SERVICE_PAGE', rawError: true })
  public async grayService(params: {page: Number, size: Number}) {
    const pageData = await ResponseCommands.pageCommand().getResponse(params, URL.SERVICE)
    return pageData
  }

  @Mutation
  private SET_GRAY_SERVICE_PAGE(pageData: { totalCount: number, data: Array<GrayService> }) {
    this.grayServicePage.totalCount = pageData.totalCount
    this.grayServicePage.hasNext =
      this.grayServicePage.pageNumber * this.grayInstancePage.pageSize >= pageData.totalCount
    this.grayServicePage.data = pageData.data
  }

  @Action({ commit: 'SET_MAIN_MENU', rawError: true })
  public setMainMenu(menu: {activeIndex: string}) {
    return menu
  }

  @Mutation
  private SET_MAIN_MENU(menu: {activeIndex: string}) {
    this.mainMenu.activeIndex = menu.activeIndex
  }
}

export const AppModule = getModule(App)
