<template>
    <div class="app-container">
        <div v-if="tenant">
            <el-row :gutter="20">
                <el-col :span="6" :xs="24">
                    <info-card :info="tenant" />
                </el-col>
                <el-col :span="18" :xs="24">
                    <el-card>
                        <el-tabs v-model="activeTab">
                            <el-tab-pane label="详情信息" name="profile">
                                <profile-form :form="tenant" v-if="activeTab === 'profile'" />
                            </el-tab-pane>
                            <el-tab-pane label="数据统计" name="statistics">
                                <statistics v-if="activeTab === 'statistics'" />
                            </el-tab-pane>
                            <el-tab-pane label="用户信息" name="users">
                                <users v-if="activeTab === 'users'" />
                            </el-tab-pane>
                        </el-tabs>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import InfoCard from "./components/InfoCard";
import ProfileForm from "./components/ProfileForm";
import Statistics from "./components/Statistics/index";
import users from "./components/users/index";
import { tenantProfile } from "@/api/tenant";

export default {
    name: "Profile",
    components: {
        InfoCard,
        ProfileForm,
        Statistics,
        users
    },
    data() {
        return {
            tenant: {},
            activeTab: "profile"
        };
    },
    computed: {
        id() {
            return parseInt(this.$route.query.id);
        }
    },
    created() {
        tenantProfile({ id: this.$route.query.id }).then(response => {
            this.tenant = response.data;
        });
    }
};
</script>
