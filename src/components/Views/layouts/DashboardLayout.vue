<template>
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <sidebar-layout></sidebar-layout>
        <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
            <top-layout></top-layout>
            <div class="main-content flex flex-col flex-grow p-4">
                <h1 class="font-bold text-2xl text-gray-700">{{this.$route.meta.title || 'Test'}}</h1>
                <dashboard-content>

                </dashboard-content>
            </div>
            <footer-layout></footer-layout>
        </main>
    </div>
</template>

<script>
import Content from "./Content";
import SidebarLayout from "./SidebarLayout";
import TopLayout from "./TopLayout";
import FooterLayout from "./FooterLayout";

export default {
    name: "DashboardLayout",
    components: {
        DashboardContent: Content,
        SidebarLayout: SidebarLayout,
        TopLayout: TopLayout,
        FooterLayout: FooterLayout,
    }
}
</script>

<style>

</style>

