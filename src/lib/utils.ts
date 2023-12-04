export const countWords = (text: string) => {
  const words = text.trim().split(/\s+/)
  const wordsCount = words.filter(word => word !== '').length
  return wordsCount
}

export const countCharatares = (text: string) => {
  const characters = text.trim().length
  return characters
}
