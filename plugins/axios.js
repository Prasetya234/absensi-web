import { removeAllStorage } from "~/utils/auth"

export default function ({ $axios }) {
    $axios.onError((error) => {
      if (error.response.status === 401) {
        removeAllStorage()
        window.location.reload()
      }
    })
  }