import * as dotenv from 'dotenv'
import * as fs from 'fs'
import path from 'path'

export interface EnvData {
  // application
  APP_ENV: string
  APP_DEBUG: boolean
  AUTH_HOST:string
  AUTH_PORT:number


  // database
  AUTH_DB_TYPE: 'mongodb' | 'mariadb'
  AUTH_DB_HOST?: string
  AUTH_DB_URL?: string
  AUTH_DB_NAME: string
  AUTH_DB_PORT?: number
  AUTH_DB_USER: string
  AUTH_DB_PASSWORD: string
  AUTH_DB_SYNCHRONIZE: boolean
}

export class EnvService {
  private vars: EnvData

  constructor () {
    const environment = process.env.NODE_ENV || 'development'

    console.log('environment', process.env.NODE_ENV);
    const data: any = dotenv.parse(
      fs.readFileSync(`.env`)
      // const envPaths = path.join(__dirname, '.env');
      // fs.readFileSync(envPaths)
    )


    data.APP_ENV = environment
    data.APP_DEBUG = data.APP_DEBUG === 'true' ? true : false
    data.AUTH_DB_PORT = parseInt(data.AUTH_DB_PORT)
    data.AUTH_SYNCHRONIZE = data.AUTH_DB_SYNCHRONIZE === 'true' ? true : false

    this.vars = data as EnvData
  }

  read (): EnvData {
    return this.vars
  }

  isDev (): boolean {
    return (this.vars.APP_ENV === 'development')
  }

  isProd (): boolean {
    return (this.vars.APP_ENV === 'production')
  }
}
