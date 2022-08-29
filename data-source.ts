import { DataSource } from "typeorm"

export const MysqlDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize:true,
    migrationsRun:true,
    entities: [__dirname + '**/**/*.entity{.ts,.js}'],
    migrations:[__dirname + '**/migrations/*{.ts,.js}'],
    migrationsTableName:'migratios-typeorm',
})
