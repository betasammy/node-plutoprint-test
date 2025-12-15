const { createBook, plutobookBuildInfo } = require('plutoprint')

console.log(process.env.HOMEBREW_PREFIX);

book = createBook({size:'a3'})
book.loadUrl('https://en.wikipedia.org/wiki/Main_Page')
book.writeToPdf('hello.pdf')

console.log(plutobookBuildInfo)
