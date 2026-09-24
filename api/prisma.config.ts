import { defineConfig } from "prisma/config";
import { loadEnvFile } from "process";

process.loadEnvFile(".env");

export default defineConfig({
    schema: "prisma/schema.prisma",
    migrations: {
        path: "prisma/migrations"
    },
    datasource: {
        url: process.env.DATABASE_URL
    }
});