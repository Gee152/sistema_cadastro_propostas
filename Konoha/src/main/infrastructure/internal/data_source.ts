import * as pg from 'pg'
import { DataSource } from 'typeorm'
import 'dotenv/config'
import 'reflect-metadata'
import { loadFilesOnDirectory } from './filesystem/util'
import path from 'path'
import { PORT } from '../../delivery/rest/config/cmd'

pg.types.setTypeParser(pg.types.builtins.TIMESTAMP, (stringValue: string) => new Date(`${stringValue}z`))

class DataSourceBuild {
  static readonly PATH_FILES = path.join(__dirname, 'model/*.{ts,js}')
  static readonly PATH_DIR = path.join(__dirname, 'model')

  static async resolveEntities() {
    if (process.platform === 'win32') {
      return await loadFilesOnDirectory(this.PATH_DIR)
    } else {
      return [this.PATH_FILES]
    }
  }

  static async builderDataSource(): Promise<DataSource> {
    return new DataSource({
      type: "postgres",
      port: PORT,
      username: process.env.DB_USER_NAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      entities: await this.resolveEntities(),
    })
  }
}

let dataSource: DataSource | undefined

async function getDataSource(): Promise<DataSource> {
  if (!dataSource) {
    dataSource = await DataSourceBuild.builderDataSource()
    await dataSource.initialize()
  }
  return dataSource
}

export {
  getDataSource
}
