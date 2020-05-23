<template>
    <div>
        <m-card type="search">
            <search-form ref="searchForm" slot="body" :searchFunction="searchFunction">
                <template slot="queryItem">
                    <el-form-item label="名称">
                        <select-remote :remoteFunction="userRemoteList" ref="name"></select-remote>
                    </el-form-item>
                    <el-form-item label="创建时间">
                        <date ref="createdAt"></date>
                    </el-form-item>
                    <el-form-item label="手机">
                        <s-input ref="phone" placeholder="联系人"></s-input>
                    </el-form-item>
                </template>
            </search-form>
        </m-card>
        <el-row :gutter="20">
            <el-col :span="6">
                <m-card type="table" class="mt-2">
                    <departmemt-tree slot="body"></departmemt-tree>
                </m-card>
            </el-col>
            <el-col :span="18">
                <m-card type="table" class="mt-2">
                    <div slot="body">
                        <table-operate-bar title="用户数据"></table-operate-bar>
                        <m-table class="mt-1" ref="table">
                            <template slot="columns">
                                <el-table-column align="center" type="selection" width="55"></el-table-column>
                                <el-table-column align="center" label="#" width="55">
                                    <template slot-scope="scope">{{ scope.$index + 1 }}</template>
                                </el-table-column>
                                <el-table-column label="名称" width="110">
                                    <template slot-scope="scope">{{ scope.row.userName }}</template>
                                </el-table-column>
                                <el-table-column label="手机" width="200" align="center">
                                    <template slot-scope="scope">
                                        <span>{{ scope.row.phone }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column label="邮箱" align="center" show-overflow-tooltip>
                                    <template slot-scope="scope">{{ scope.row.email }}</template>
                                </el-table-column>
                                <el-table-column
                                    class-name="status-col"
                                    label="状态"
                                    width="110"
                                    align="center"
                                >
                                    <template slot-scope="scope">
                                        <el-tag v-if="scope.row.status === 1" type="warning">禁用</el-tag>
                                        <el-tag v-else type="success">正常</el-tag>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    align="center"
                                    prop="created_at"
                                    label="创建于"
                                    width="200"
                                    show-overflow-tooltip
                                >
                                    <template slot-scope="scope">
                                        <i class="el-icon-time" />
                                        <span>{{ scope.row.createTime }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column
                                    fixed="right"
                                    label="操作"
                                    width="100"
                                    align="center"
                                >
                                    <template slot-scope="scope">
                                        <el-button
                                            type="text"
                                            size="small"
                                            @click="showProfile('用户详情', scope.row.id)"
                                        >查看</el-button>
                                    </template>
                                </el-table-column>
                            </template>
                        </m-table>
                        <pagination />
                    </div>
                </m-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import TableOperateBar from "@/components/TableOperateBar";
import TableSelectedBar from "@/components/TableSelectedBar";
import MTable from "@/components/MTable";
import SearchForm from "@/components/SearchForm";
import MCard from "@/components/MCard";
import DepartmemtTree from "./components/DeaprtmemtTree";
import { userPageList, userRemoteList } from "@/api/user";
import { SelectRemote, SInput, Date } from "@/components/SearchItem";

export default {
    components: {
        Pagination,
        TableOperateBar,
        MTable,
        SearchForm,
        MCard,
        DepartmemtTree,
        SelectRemote,
        SInput,
        Date
    },
    data() {
        return {};
    },
    computed: {
        searchFunction() {
            return userPageList;
        },
        selectedIds() {
            return this.$refs.table.selectedIds();
        },
        userRemoteList() {
            return userRemoteList;
        }
    },
    methods: {}
};
</script>

<style lang="scss" scoped>
</style>

