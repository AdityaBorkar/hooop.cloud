import { randomInt } from 'crypto'

export default function generateOTP() {
  // Options:
  const OTP_LENGTH = 6
  const ALLOWED_CHARS = '0123456789'
  // ? OTP Does not start with 0

  // Generate:
  let otp = ''
  while (otp.length < OTP_LENGTH) {
    const index = randomInt(0, ALLOWED_CHARS.length)
    if (otp.length === 0 && ALLOWED_CHARS[index] === '0') continue
    otp += ALLOWED_CHARS[index]
  }
  return otp
}
