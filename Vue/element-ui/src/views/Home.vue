<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <a href="#">选课系统</a>
                <el-dropdown>
                    <span class="el-dropdown-link">
                        <!-- 欢迎 {{ $route.params.user }} -->
                        <!-- 欢迎 {{ $route.query.user }} -->
                        <!-- 欢迎 {{ $route.params.user }} -->
                        欢迎 {{ $route.hash.slice(1) }}
                        <el-icon class="el-icon--right">
                            <arrow-down />
                        </el-icon>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>修改密码</el-dropdown-item>
                            <el-dropdown-item>个人详情</el-dropdown-item>
                            <el-dropdown-item>无畏契约</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>Main</el-main>
            </el-container>
        </el-container>
    </div>
</template>
  

<script>
export default {

}
</script>

<style lang="less" scoped>
.common-layout {
    width: 100vw;
    height: 100vh;

    .el-container {
        height: 100vh;

        .el-header {
            background-color: rgb(52, 44, 129);
            height: 80px;
            line-height: 80px;
            font-size: 30px;
            display: flex;
            justify-content: space-between;
        }

        .el-dropdown-link {
            cursor: pointer;
            color: var(--el-color-primary);
            display: flex;
            align-items: center;
            font-size: 24px;
        }
    }
}
</style>