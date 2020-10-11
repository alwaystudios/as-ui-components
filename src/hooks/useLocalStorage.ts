export const useLocalStorage = (): Storage | undefined => {
  return typeof localStorage !== 'undefined' ? localStorage : undefined
}
