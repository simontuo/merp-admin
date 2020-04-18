<template>
    <m-drawer ref="drawer">
        <template slot="content">
            <m-drawer-body v-loading="loading">
                <div class="mt-2" slot="body">
                    <el-form
                        ref="form"
                        :model="form"
                        label-width="100px"
                        size="small"
                        label-position="left"
                    >
                        <el-form-item label="名称">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="联系人">
                            <el-input v-model="form.contact"></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话">
                            <el-input v-model="form.contact_phone"></el-input>
                        </el-form-item>
                        <el-form-item label="联系地址">
                            <el-input type="textarea" v-model="form.contact_address"></el-input>
                        </el-form-item>
                        <el-form-item label="规模">
                            <el-input-number
                                v-model="form.size"
                                controls-position="right"
                                :min="1"
                                class="drawer-form-item-width"
                            ></el-input-number>
                        </el-form-item>
                        <el-form-item label="管理员用户">
                            <el-select
                                v-model="form.mamger_user_id"
                                placeholder="请选择"
                                class="drawer-form-item-width"
                                filterable
                            >
                                <el-option
                                    v-for="item in cities"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                    <span style="float: left">{{ item.label }}</span>
                                    <span
                                        style="float: right; color: #8492a6; font-size: 13px"
                                    >{{ item.value }}</span>
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="合约开始日期">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.contract_start_at"
                            ></el-date-picker>
                        </el-form-item>
                        <el-form-item label="合约结束日期">
                            <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.contract_end_at"
                            ></el-date-picker>
                        </el-form-item>
                        <el-form-item label="启用">
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

export default {
    components: {
        MDrawer,
        MDrawerFooter,
        MDrawerBody
    },
    data() {
        return {
            loading: false,
            cities: [
                {
                    value: "Beijing",
                    label: "北京"
                },
                {
                    value: "Shanghai",
                    label: "上海"
                },
                {
                    value: "Nanjing",
                    label: "南京"
                },
                {
                    value: "Chengdu",
                    label: "成都"
                },
                {
                    value: "Shenzhen",
                    label: "深圳"
                },
                {
                    value: "Guangzhou",
                    label: "广州"
                }
            ],
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