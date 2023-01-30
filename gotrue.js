import { GoTrueClient } from '@supabase/gotrue-js'

const GOTRUE_URL = 'http://localhost:9999'

const auth = new GoTrueClient({ url: GOTRUE_URL, fetch: fetch })