export const useWindow = (): Window | undefined => {
  return typeof window !== 'undefined' ? window : undefined
}
