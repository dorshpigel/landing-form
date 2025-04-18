import Airtable from 'airtable'
import { Message } from '../types/types'

const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID, AIRTABLE_TABLE_NAME } = process.env

if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME) {
  throw new Error('Missing Airtable environment variables')
}

const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID)

export const submitToAirtable = async (fields: Message) => {
  return new Promise((resolve, reject) => {
    base(AIRTABLE_TABLE_NAME).create([{ fields }], (err, records) => {
      if (err) {
        console.error('Airtable Error:', err)
        return reject(err)
      }
      resolve(records)
    })
  })
}
