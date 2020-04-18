<template>
    <el-form
        v-loading="loading"
        v-model="form"
        label-width="110px"
        size="small"
        label-position="left"
    >
        <el-form-item label="名称" required>
            <el-input v-model.trim="form.name" />
        </el-form-item>
        <el-form-item label="助记码" required>
            <el-input v-model.trim="form.mnemonic_code" />
        </el-form-item>
        <el-form-item label="联系人" required>
            <el-input v-model.trim="form.contact" />
        </el-form-item>
        <el-form-item label="联系电话" required>
            <el-input v-model.trim="form.contact_phone" />
        </el-form-item>
        <el-form-item label="联系地址" required>
            <el-input v-model.trim="form.contact_address" />
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
                <el-option v-for="item in users" :key="item.id" :label="item.name" :value="item.id">
                    <span style="float: left">{{ item.name }}</span>
                    <span style="float: right; color: #8492a6; font-size: 13px">{{ item.phone }}</span>
                </el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="合约开始日期" required>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.contract_start_at"></el-date-picker>
        </el-form-item>
        <el-form-item label="合约结束日期" required>
            <el-date-picker type="date" placeholder="选择日期" v-model="form.contract_end_at"></el-date-picker>
        </el-form-item>
        <el-form-item label="启用" required>
            <el-switch v-model="form.enable"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submit" :disabled="loading">更新</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { tenantUpdate } from "@/api/tenant";
import { userList } from "@/api/user";

export default {
    props: {
        form: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            loading: false,
            users: []
        };
    },
    mounted() {
        userList().then(response => {
            this.users = response.data.items;
        });
    },
    methods: {
        submit() {
            this.loading = true;
            tenantUpdate(this.form)
                .then(response => {
                    this.$message.success(response.message);
                })
                .finally(() => {
                    this.loading = false;
                });
        }
    }
};
</script>
