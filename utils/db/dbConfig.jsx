//postgresql://zero2hero_owner:KBrztG0nEQp4@ep-dark-mud-a52dt6xl.us-east-2.aws.neon.tech/zero2hero?sslmode=require
import {neon} from '@neondatabase/serverless'

import {drizzle} from 'drizzle-orm/neon-http'

import * as schema from './schema'

const sql = neon(process.env.NEXT_PUBLIC_DATABASE_URL);

export const db = drizzle(sql,{schema})