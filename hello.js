const { createCanvas } = require('plutoprint')

book = createBook({size:'a3'})
book.loadUrl('https://en.wikipedia.org/wiki/Main_Page')
book.writeToPdf('hello.pdf')
