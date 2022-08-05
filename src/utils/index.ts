import { TTempalatePropsValues } from '@/store/slices/templatesSlice'

let uniqueId = 1

export const getUniqueId = () => uniqueId++

export const getIdsToRemove = (id: number, byId: { [key: number]: TTempalatePropsValues }) => {
  let output: number[] = [id]
  const template = byId[id]
  if ('inner' in template) {
    for (let i = 0; i < template.inner.length; i++) {
      const currId = template.inner[i]
      output = output.concat(getIdsToRemove(currId, byId))
    }
  }
  return output
}

export const convertSvgToBase64 = (svg: SVGSVGElement) => {
  const xml = new XMLSerializer().serializeToString(svg)
  const svg64 = btoa(xml) // for utf8: btoa(unescape(encodeURIComponent(xml)))
  const b64start = 'data:image/svg+xml;base64,'
  const image64 = b64start + svg64
  return image64
}
