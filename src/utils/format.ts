// import {datjs} from 'dayjs'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// import { Dayjs } from "dayjs";
dayjs.extend(utc)

export function UTCToStr(
  utcStr: string,
  format = 'YYYY/MM/DD HH:mm:ss'
) {
  return dayjs.utc(utcStr).utcOffset(8).format(format)
}
