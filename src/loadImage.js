const fs = require('fs')
const http = require('https')
const Canvas = require('canvas')
const imageType = require('image-type')
const bmp = require('bmp-js')

function getLimitDimensions(width, height, limit) {
    if (limit && width >= limit && height >= limit) {
        const ratio = width / height

        if (ratio > 1) {
            return { height: limit, width: Math.round(limit / ratio) }
        }
        return { height: Math.round(limit * ratio), width: limit }
    }
    return { width, height }
}

function parse(data, limit) {
    const { ext = '' } = imageType(data) || {}

    return new Promise((resolve, reject) => {
        if (ext === 'bmp') {
            resolve(bmp.decode(data))
        } else {
            Canvas.loadImage(data)
                .then((img) => {
                    const { width, height } = getLimitDimensions(
                        img.width,
                        img.height,
                        limit
                    )
                    const canvas = Canvas.createCanvas(width, height)
                    const ctx = canvas.getContext('2d')

                    ctx.drawImage(
                        img,
                        0,
                        0,
                        img.width,
                        img.height,
                        0,
                        0,
                        width,
                        height
                    )

                    return ctx.getImageData(0, 0, width, height)
                })
                .then(resolve)
                .catch(reject)
        }
    })
}

module.exports = (bufferData, limit = 0) => parse(bufferData, limit)
