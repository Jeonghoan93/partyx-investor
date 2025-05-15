import axios, { AxiosError } from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const baseURL = config.public.backendBaseUrl as string

  const authAxios = axios.create({
    baseURL,
    withCredentials: true // important to send cookies
  })

  // Axios interceptor to handle 401 gracefully
  authAxios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (
        error.response?.status === 401 &&
        error.config?.url?.endsWith('/api/user/me')
      ) {
        console.info('Unauthenticated request to /api/user/me (401).')
        return Promise.resolve({ data: null }) // return empty user data gracefully
      }

      // Re-throw unexpected errors
      return Promise.reject(error)
    }
  )

  nuxtApp.provide('axios', {
    auth: authAxios
  })
})
