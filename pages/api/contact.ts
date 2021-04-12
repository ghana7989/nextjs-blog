/** @format */
// @ts-nocheck
import {MongoClient} from 'mongodb'

interface Message {
	name: string
	email: string
	message: string
	id?: string
}

export default async function handler(req: Request, res: Response) {
	if (req.method === 'POST') {
		const {email, name, message} = req.body
		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			return res.status(422).json({message: 'Invalid Input'})
		}
		const newMessage: Message = {
			email,
			name,
			message,
		}
		try {
			// Opening connection to the database
			const client = await MongoClient.connect(
				process.env.MONGO_URI,
				{
					useNewUrlParser: true,
					useUnifiedTopology: true,
				},
			)
			// getting access to database in mongodb
			const db = client.db()
			try {
				const result = await db.collection('messages').insertOne(newMessage)
				if (!!result) {
					newMessage.id = result.insertedId
				}
			} catch (error) {
				res.status(500).json({message: 'Error storing message'})
				return new Error('Error inserting message')
			}
			// Closing the connection to the Database
			client.close()
		} catch (e) {
			res.status(500).json({message: 'Failed to connect to Database'})
			return new Error('Failed to connect to MongoDB')
		}
		res.status(201).json({message: 'success'})
	}
}
