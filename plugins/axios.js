import { removeAllStorage } from "~/utils/auth"

export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 401) {
      removeAllStorage()
      redirect('/login')
    }
  })
}