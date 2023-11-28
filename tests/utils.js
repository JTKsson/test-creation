export const isUnique = () => new Set(array).size === array.length

export const hexcolorRegex = /^#?[a-f0-9]{6}$/i

export const mockColor = { hex: '#4C98FB', name: 'blue' }

export const mockHex = '#000000'

export const colors = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Green', hex: '#008000' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Cyan', hex: '#00FFFF' },
  { name: 'Magenta', hex: '#FF00FF' },
  { name: 'Lime', hex: '#00FF00' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'Navy', hex: '#000080' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Olive', hex: '#808000' }
];