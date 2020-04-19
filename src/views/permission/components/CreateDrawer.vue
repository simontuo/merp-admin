<template>
    <m-drawer ref="drawer">
        <template slot="content">
            <m-drawer-body v-loading="loading">
                <div class="mt-2" slot="body">
                    <el-form
                        ref="form"
                        :model="form"
                        label-width="80px"
                        size="small"
                        label-position="left"
                    >
                        <el-form-item label="名称" required>
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="标签" required>
                            <el-input v-model="form.label"></el-input>
                        </el-form-item>
                        <el-form-item label="描述" required>
                            <el-input type="textarea" v-model="form.desc"></el-input>
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
import { permissionStore } from "@/api/permission";

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
                label: "",
                desc: ""
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
            permissionStore(this.form)
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