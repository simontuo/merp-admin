<template>
    <div class="app-container">
        <m-card type="search">
            <search-form
                slot="body"
                :searchFunction="searchFunction"
                :query="query"
                labelWidthHidden="100px"
            >
                <template slot="queryItem">
                    <el-form-item label="名称">
                        <el-input v-model="query.name" placeholder="名称"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人">
                        <el-input v-model="query.contacts" placeholder="联系人"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="query.phone" placeholder="联系电话"></el-input>
                    </el-form-item>
                    <el-form-item label="联系地址">
                        <el-input v-model="query.adress" placeholder="联系地址"></el-input>
                    </el-form-item>
                    <el-form-item label="创建人">
                        <el-input v-model="query.creator" placeholder="创建人"></el-input>
                    </el-form-item>
                </template>
                <template slot="hiddenQueryItem">
                    <el-form-item label="活动性质：">
                        <el-checkbox-group v-model="query.types">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="活动性质：">
                        <el-checkbox-group v-model="query.types">
                            <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                            <el-checkbox label="地推活动" name="type"></el-checkbox>
                            <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                            <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </template>
            </search-form>
        </m-card>
        <m-card type="table" class="mt-2">
            <div slot="body">
                <table-operate-bar title="前台权限数据">
                    <template slot="functionButton">
                        <el-button size="small" @click="create">新增</el-button>
                        <el-button size="small" type="danger" @click="deleteRow">删除</el-button>
                    </template>
                </table-operate-bar>
                <table-selected-bar />
                <m-table class="mt-1" ref="table">
                    <template slot="columns">
                        <el-table-column align="center" type="selection" width="55"></el-table-column>
                        <el-table-column align="center" label="ID" width="55">
                            <template slot-scope="scope">{{ scope.$index }}</template>
                        </el-table-column>
                        <el-table-column label="名称" width="200" align="center">
                            <template slot-scope="scope">{{ scope.row.name }}</template>
                        </el-table-column>
                        <el-table-column label="标签" width="200" align="center">
                            <template slot-scope="scope">{{ scope.row.label }}</template>
                        </el-table-column>
                        <el-table-column label="描述" align="center">
                            <template slot-scope="scope">{{ scope.row.desc }}</template>
                        </el-table-column>
                        <el-table-column align="center" prop="created_at" label="创建时间" width="200">
                            <template slot-scope="scope">
                                <i class="el-icon-time" />
                                <span>{{ scope.row.created_at }}</span>
                            </template>
                        </el-table-column>
                        <el-table-column fixed="right" label="操作" width="100" align="center">
                            <template slot-scope="scope">
                                <el-button type="text" size="small" @click="edit(scope.row.id)">查看</el-button>
                            </template>
                        </el-table-column>
                    </template>
                </m-table>
                <pagination />
            </div>
        </m-card>
        <create-drawer ref="createDrawer"></create-drawer>
        <edit-drawer ref="editDrawer"></edit-drawer>
    </div>
</template>

<script>
import Pagination from "@/components/Pagination";
import TableOperateBar from "@/components/TableOperateBar";
import TableSelectedBar from "@/components/TableSelectedBar";
import MTable from "@/components/MTable";
import SearchForm from "@/components/SearchForm";
import MCard from "@/components/MCard";
import { permissionPageList } from "@/api/permission";
import CreateDrawer from "./components/CreateDrawer";
import EditDrawer from "./components/EditDrawer";

export default {
    components: {
        Pagination,
        TableOperateBar,
        TableSelectedBar,
        MTable,
        SearchForm,
        MCard,
        CreateDrawer,
        EditDrawer
    },
    data() {
        return {
            query: {}
        };
    },
    computed: {
        searchFunction() {
            return permissionPageList;
        },
        selectedIds() {
            return this.$refs.table.selectedIds();
        }
    },
    methods: {
        create() {
            this.$refs.createDrawer.show("权限新增");
        },
        edit(id) {
            this.$refs.editDrawer.id = id;
            this.$refs.editDrawer.show("权限详情");
        },
        deleteRow() {}
    }
};
</script>

<style lang="scss" scoped>
</style>

