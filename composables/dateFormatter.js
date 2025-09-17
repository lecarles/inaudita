import { ref } from 'vue'
export const useDateFormatter = (date) => {
  const dateInstance = new Date(date)
  const year =  ref(dateInstance.getFullYear())
  const month = ref(dateInstance.getMonth()+1)
  const fullMonth = ref({
    ca: dateInstance.toLocaleString('ca', { month: 'long' }),
    es: dateInstance.toLocaleString('es', { month: 'long' })
  })
  const day = ref(dateInstance.getDate())
  const time = ref(`${dateInstance.getHours().toString().padStart(2, '0')}:${dateInstance.getMinutes().toString().padStart(2, '0')}`)

  return { year, month, day, time, fullMonth }
}