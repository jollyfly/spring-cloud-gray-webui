<template>
  <section>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="serviceId"
        label="serviceId"
        width="180"
      />
      <el-table-column
        prop="serviceName"
        label="服务名"
        width="180"
      />
      <el-table-column
        prop="instanceNumber"
        label="实例数"
      />
      <el-table-column
        prop="grayInstanceNumber"
        label="灰度实例数"
      />
      <el-table-column
        prop="describe"
        label="描述"
      />

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
            @click="jumpToInstance(scope.$index, scope.row)"
          >
            查看
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

import { Component, Vue } from 'vue-property-decorator'
import { AppModule } from '@/store/modules/app'
import GrayService from '@/model/GrayService'

@Component
export default class ServiceMain extends Vue {
  get tableData() {
    return AppModule.grayServicePage.data
  }

  get totalCount() {
    return AppModule.grayServicePage.totalCount
  }

  created() {
    AppModule.grayService({
      page: 0,
      size: 10
    })
  }

  private handleEdit() {
    console.log('handleEdit')
  }

  private handleDelete() {
    console.log('delete')
  }

  private jumpToInstance(index: Number, row: GrayService) {
    console.log(row)
    this.$router.push({ path: `/instance/${row.serviceId}` })
  }

  private changePage(index: number) {
    AppModule.grayService({
      page: index - 1,
      size: 10
    }).then(() => {
      console.log('--------')
    })
  }
}
</script>

<style scoped>

</style>
