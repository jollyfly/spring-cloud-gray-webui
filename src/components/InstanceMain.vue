<template>
  <section>
    <el-autocomplete
      v-model="serviceId"
      class="inline-input"
      :fetch-suggestions="querySearchCache"
      placeholder="请输入serviceId"
    />
    <el-button
      type="primary"
      icon="el-icon-search"
      @click="pageGrayInstance"
    >
      搜索
    </el-button>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="instanceId"
        label="服务实例id"
        width="180"
      />
      <el-table-column
        prop="serviceId"
        label="服务id"
        width="180"
      />
      <el-table-column
        prop="host"
        label="host"
      />
      <el-table-column
        prop="port"
        label="端口"
      />
      <el-table-column
        prop="instanceStatus"
        label="服务实例状态"
      />
      <el-table-column
        label="灰度状态"
      >
        <template slot-scope="scope">
          <el-switch
            v-model="tableData[scope.$index].grayStatus"
            active-color="#13ce66"
            inactive-color="#ddd"
            active-value="OPEN"
            inactive-value="CLOSE"
          />
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >
            编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="totalCount"
      @current-change="changePage"
    />
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import localforge from 'localforage'

  @Component({
    props: {
      serviceId: {
        type: String,
        default: ''
      }
    }
  })
export default class InstanceMain extends Vue {
    @Prop({ default: '' })
    private serviceId!: String

    get tableData() {
      return AppModule.grayInstancePage.data
    }

    get totalCount() {
      return AppModule.grayInstancePage.totalCount
    }

    created() {
      console.log(this.serviceId)
      this.pageGrayInstance()
    }

    private handleEdit(index: Number, row: any) {
      console.log(row)
    }

    private pageGrayInstance() {
      AppModule.grayInstance({
        serviceId: this.serviceId,
        page: 0,
        size: '10'
      }).then(() => {
        localforge.getItem<Array<{ value: String }>>('search_instance_cache')
          .then((serviceIds: Array<{ value: String }>) => {
            serviceIds = serviceIds || new Array<{ value: String }>(0)
            if (!serviceIds.find(it => it.value === this.serviceId)) {
              serviceIds.push({ value: this.serviceId })
            }
            localforge.setItem('search_instance_cache', serviceIds)
          })
      })
    }

    private querySearchCache(queryString: String, cb: Function) {
      localforge.getItem<Array<{ value: String }>>('search_instance_cache')
        .then((serviceIds: Array<{ value: String }>) => {
          serviceIds = serviceIds || new Array<{ value: String }>(0)
          const results = queryString ? serviceIds.filter(this.createStateFilter(queryString)) : serviceIds
          cb(results)
        })
    }

    private createStateFilter(queryString: String) {
      return (it: { value: String }) => {
        return (it.value.toLowerCase().indexOf(queryString.toLowerCase()) >= 0)
      }
    }

    private changePage(index: number) {
      AppModule.grayInstance({
        serviceId: this.serviceId,
        page: index - 1,
        size: '10'
      }).then(() => {
        console.log('--------')
      })
    }
}

</script>

<style lang="stylus" scoped>

</style>
