import { defineStore } from 'pinia'

export const useMinutesStore = defineStore('minutes', {
  state: () =>
    ({
      minutes: localStorage.getItem('minutes') ? JSON.parse(localStorage.getItem('minutes')!) : [],
      inputValue: localStorage.getItem('minutes')
        ? (JSON.parse(localStorage.getItem('minutes')!) as number[]).join(' ')
        : ''
    } as {
      minutes: number[]
      inputValue: string
    }),
  actions: {
    addMinutes(newValues: string) {
      const isNumber = /^(?=.*\d)[\d ]+$/.test(newValues)

      if (isNumber) {
        this.minutes = newValues
          .trim()
          .split(' ')
          .map((item) => +item)
        this.inputValue = newValues
        localStorage.setItem('minutes', JSON.stringify(this.minutes))
      } else if (newValues === '') {
        this.minutes = []
        this.inputValue = newValues
        localStorage.setItem('minutes', JSON.stringify(this.minutes))
      }
    },
    removeMinute(index: number) {
      this.minutes.splice(index, 1)
      this.inputValue = this.minutes.join(' ')
      localStorage.setItem('minutes', JSON.stringify(this.minutes))
    }
  },
  getters: {
    totalTime(): { hours: number; minutes: string } {
      const totalMinutes = this.minutes.reduce((a, b) => a + b, 0)

      const hours = Math.floor(totalMinutes / 60)
      const minutes = totalMinutes % 60

      return { hours, minutes: String(minutes).padStart(2, '0') }
    }
  }
})
