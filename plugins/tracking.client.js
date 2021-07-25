import {
  event
} from '@/tracking.js'

export default ({ app }, inject) => {
  inject('event', event)
}
