export async function acceso({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'Carmen' && password === '1212') {
        resolve()
      } else {
        reject()
      }
    }, 2000)
  })
}
