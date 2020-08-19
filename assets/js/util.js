export default {
  /* eslint-disable no-console */
  listToRows: (list, numCols) => {
    const rows = []
    let rowIndex = 0
    let colIndex = 0

    list.forEach((item) => {
      if (!rows[rowIndex]) {
        rows[rowIndex] = []
      }
      rows[rowIndex].push(item)
      colIndex++
      if (colIndex >= numCols) {
        colIndex = 0
        rowIndex++
      }
    })

    return rows
  },
  validateEmail: (em) => {
    const result = {
      valid: null,
      message: 'Please enter a valid email address'
    }
    if (!em) {
      return result // User hasn't entered anything yet.
    }

    if (!em.includes('@')) {
      result.valid = false
      result.message = 'An email address must contain an @'
      return result
    }
    const username = em.substring(0, em.indexOf('@'))
    if (username.length < 2) {
      result.valid = false
      result.message = 'Username must be at least 2 characters'
      return result
    }
    const dom = em.substring(em.indexOf('@') + 1, em.length)
    // console.log('dom', dom)
    if (dom.substring(0, dom.indexOf('.')).length < 2) {
      result.valid = false
      result.message = 'Please include a domain name'
      return result
    }
    if (!dom.includes('.')) {
      result.valid = false
      result.message = 'Please include a top-level domain'
      return result
    }

    switch (dom.substring(0, dom.indexOf('.'))) {
      case '':
        break
      case 'gmil':
      case 'gmal':
      case 'gmai':
      case 'gnail':
      case 'gmsil':
      case 'gmailmail':
      case 'hotmai':
      case 'hotmil':
        result.valid = false
        result.message = 'Invalid domain'
        return result
    }

    const ext = dom.substring(dom.indexOf('.') + 1, dom.length)
    // console.log('ext', ext)
    if (ext.length < 2) {
      result.valid = false
      result.message = 'Top-level domain must by at least 2 characters'
      return result
    }

    switch (ext) {
      case 'con':
      case 'comn':
      case 'conm':
        result.valid = false
        result.message = 'Invalid top level domain'
        return result
    }

    if (em.includes(' ')) {
      result.valid = false
      result.message = 'Spaces are not allowed in an email addresses'
      return result
    }

    result.valid = true
    return result
  },
  imageCDN: (asset, width, height) => {
    if (asset.substring(0, 4) === 'http') return asset

    const resolvedAsset = asset.replace(/~\/content/i, process.env.cdn)
    let assetHeight = ''
    if (height) {
      assetHeight = '&height=' + height
    }
    let assetWidth = ''
    if (width) {
      assetWidth = '&width=' + width
    }
    return `${resolvedAsset}?auto=format${assetHeight}${assetWidth}`
  },
  loadingImageCDN: (asset, width, height) => {
    if (asset.substring(0, 4) === 'http') return asset

    const resolvedAsset = asset.replace(/~\/content/i, process.env.cdn)
    let assetHeight = ''
    if (height) {
      assetHeight = '&height=' + height
    }
    let assetWidth = ''
    if (width) {
      assetWidth = '&width=' + width
    }
    // &txt=Please%20Enbel%20JavaScript&txt-size=62&txt-color=FFF&txt-align=middle,center&txt-font=Futura%20Condensed%20Medium
    return `${resolvedAsset}?auto=format&blur=200&px=16${assetHeight}${assetWidth}`
  },
  resolveCDN: (asset, width, height) => {
    const resolvedAsset = asset.replace(/~\/content/gi, process.env.cdn)
    return `${resolvedAsset}`
  },
  loadingImage: () =>
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
}
