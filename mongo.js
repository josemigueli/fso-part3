const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Give the password as argument')
    process.exit(1)
}

const password = process.argv[2]
const theName = process.argv[3]
const theNumber = process.argv[4]

const url = `mongodb+srv://migueldejesusxi:${password}@cluster0.pk8ipkf.mongodb.net/phonebookApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: theName,
    number: theNumber
})

if (process.argv.length === 3) {
    Person.find({}).then(result => {
        console.log('Phonebook:')
        result.forEach(p => {
            console.log(`${p.name} ${p.number}`)
        })
        mongoose.connection.close()
    })
    return
}

person.save().then(() => {
    console.log(`Added ${theName} number ${theNumber} to Phonebook`)
    mongoose.connection.close()
})