import hyRequest from '..'

export const loginRequest = (data: any) => {
  return hyRequest.post({
    url: '/login',
    data
  })
}
