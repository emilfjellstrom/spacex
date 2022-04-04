import { formatLocalDateTime } from "../format-date";


describe('formatLocalDateTime', () => {
    it('should return UTC timezone', () => {
      const result = formatLocalDateTime("2020-11-21T09:17:00.000Z")
      expect(result).toBe("November 21, 2020, 9:17:00 AM UTC")
    })

    it('should return GMT-8 timezone', () => {
      const result = formatLocalDateTime("2020-11-21T09:17:00-08:00")
      expect(result).toBe("November 21, 2020, 9:17:00 AM GMT-8")
    })
})