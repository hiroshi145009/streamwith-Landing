import { createClient } from '@supabase/supabase-js'

// Supabase 설정 - 환경변수에서 가져오기
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'

export const supabase = createClient(supabaseUrl, supabaseKey)

// 예약 데이터 타입
export interface ReservationData {
  id?: number
  email: string
  phone: string
  created_at?: string
}

// 예약 저장 함수
export const saveReservation = async (data: Omit<ReservationData, 'id' | 'created_at'>) => {
  const { data: result, error } = await supabase
    .from('reservations')
    .insert([data])
    .select()

  if (error) {
    throw new Error(`예약 저장 실패: ${error.message}`)
  }

  return result[0]
}

// 모든 예약 조회 함수
export const getReservations = async () => {
  const { data, error } = await supabase
    .from('reservations')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(`예약 조회 실패: ${error.message}`)
  }

  return data
}

// 모든 예약 삭제 함수 (관리자용)
export const clearAllReservations = async () => {
  const { error } = await supabase
    .from('reservations')
    .delete()
    .gte('id', 0) // 모든 행 삭제

  if (error) {
    throw new Error(`데이터 삭제 실패: ${error.message}`)
  }

  return true
}
