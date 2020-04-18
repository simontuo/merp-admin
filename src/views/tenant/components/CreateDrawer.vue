<template>
    <m-drawer ref="drawer">
        <template slot="content">
            <m-drawer-body v-loading="loading">
                <div class="mt-2" slot="body">
                    <el-form
                        ref="form"
                        :model="form"
                        label-width="110px"
                        size="small"
                        label-position="left"
                    >
                        <el-form-item label="名称" required>
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="联系人" required>
                            <el-input v-model="form.contact"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话" required>
                            <el-input v-model="form.contact_phone"></el-input>
                        </el-form-item>
                        <el-form-item label="联系地址" required>
                            <el-input type="textarea" v-model="form.contact_address"></el-input>
                        </el-form-item>
                        <el-form-item label="规模" required>
                            <el-input-number
                                v-model="form.size"
                                controls-position="right"
                                :min="1"
                                class="drawer-form-item-width"
                            ></el-input-number>
                        </el-form-item>
                        <el-form-item label="管理员用户" required>
                            <el-select
                                v-model="form.mamger_user_id"
                                placeholder="请选择"
                                class="drawer-form-item-width"
                                filterable
                            >
                                <el-option
                                    v-for="item in users"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id"
                                >
                                    <span style="float: left">{{ item.name }}</span>
                                    <span
                                        style="float: right; color: #8492a6; font-size: 13px"
                                    >{{ item.phone }}</span>
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="合约开始日期" required>
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.contract_start_at"
                            ></el-date-picker>
                        </el-form-item>
                        <el-form-item label="合约结束日期" required>
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.contract_end_at"
                            ></el-date-picker>
                        </el-form-item>
                        <el-form-item label="启用" required>
                            <el-switch v-model="form.enable"></el-switch>
                        </el-form-item>
                    </el-form>
                </div>
            </m-drawer-body>
            <m-drawer-footer>
                <template slot="operate-button">
                    <el-button size="small">重置</el-button>
                    <el-button size="small" type="primary" @click="submit" :disabled="loading">保存</el-button>
                </template>
            </m-drawer-footer>
        </template>
    </m-drawer>
</template>

<script>
import MDrawer from "@/components/MDrawer";
import MDrawerFooter from "@/components/MDrawer/components/MDrawerFooter";
import MDrawerBody from "@/components/MDrawer/components/MDrawerBody";
import { tenantStore } from "@/api/tenant";
import { userList } from "@/api/user";

export default {
    components: {
        MDrawer,
        MDrawerFooter,
        MDrawerBody
    },
    data() {
        return {
            loading: false,
            users: [],
            form: {
                name: "",
                contact: "",
                contact_phone: "",
                contact_address: "",
                size: "",
                mamger_user_id: "",
                contract_start_at: "",
                contract_end_at: "",
                enable: false
            }
        };
    },
    methods: {
        show(title) {
            this.$refs.drawer.title = title;
            userList().then(response => {
                this.users = response.data.items;
            });
            this.$refs.drawer.show();
        },
        submit() {
            this.loading = true;
            tenantStore(this.form)
                .then(response => {
                    this.$message.success(response.message);
                    this.$refs.drawer.close();
                    bus.$emit("search");
                })
                .finally(() => {
                    this.loading = false;
                });
        }
    }
};
</script>

<style lang="scss" scoped>
</style>