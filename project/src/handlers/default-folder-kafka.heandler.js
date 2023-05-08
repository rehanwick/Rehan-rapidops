
const {Kafka} = require('kafkajs') ; 
const {creatFolderUsecase } = require('../use-case/folder-usecase') ; 
const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092', 'kafka2:9092']
})




const kafkaCreatFolder = async (obj) => {
    const producer = kafka.producer(); 
    const consumer = kafka.consumer({ groupId: 'test-group' })
    // Producing
    await producer.connect()
    await producer.send({
      topic: 'test-topic',
      messages: [
        { value: obj },
      ],
    })


   // Consuming
   await consumer.connect()
   await consumer.subscribe({ topic: 'test-topic'  })
    let id ; 
   await consumer.run({
     eachMessage: async ({ topic, partition, message }) => {
       console.log({
         partition,
         offset: message.offset,
         value: message.value.toString(),
       })
       console.log(message.value.toString()) ; 
       id = message.value.toString() ; 
       const arr = ["inbox", "sent", "Archived", "Outbox", "Trash"];
          for (let folderName of arr) {
            await creatFolderUsecase({ id , name:folderName });
          }
     },
   })
}


// run('hi').catch(console.error) 


module.exports = kafkaCreatFolder 

