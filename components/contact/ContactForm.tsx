/** @format */

import React, {FC, useCallback, useEffect, useRef, useState} from 'react'
import Notification from '../ui/Notification'
import classes from './ContactForm.module.css'

type Status = 'pending' | 'success' | 'error'

const ContactForm: FC = () => {
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')
	const [status, setStatus] = useState<Status | undefined>(undefined)
	const [error, setError] = useState(null)

	const sendMessageHandler: React.FormEventHandler<HTMLFormElement> = useCallback(
		e => {
			e.preventDefault()
			setStatus('pending')
			fetch('/api/contact', {
				method: 'POST',
				body: JSON.stringify({
					email,
					name,
					message,
				}),
				headers: {
					'Content-Type': 'application/json',
				},
				cache: 'force-cache',
			})
				.then(() => {
					setStatus('success')
					setEmail('')
					setName('')
					setMessage('')
				})
				.catch(e => {
					setStatus('error')
					setError(e)
					throw new Error(e.message)
				})
		},
		[email, name, message],
	)
	let notification = undefined

	if (status === 'pending') {
		notification = {
			status: 'pending',
			title: 'Sending message...',
			message: 'Your message is on its way!',
		}
	}

	if (status === 'success') {
		notification = {
			status: 'success',
			title: 'Success!',
			message: 'Message sent successfully!',
		}
	}

	if (status === 'error') {
		notification = {
			status: 'error',
			title: 'Error!',
			message: error,
		}
	}
	useEffect(() => {
		if (status === 'success' || status === 'error') {
			const timer = setTimeout(() => {
				setStatus(null)
				setError(null)
			}, 3000)

			return () => clearTimeout(timer)
		}
	}, [status])

	return (
		<section className={classes.contact}>
			<h1>How Can I Help You?</h1>
			<form className={classes.form} onSubmit={sendMessageHandler}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='email'>Your Email</label>
						<input
							type='email'
							id='email'
							placeholder='Enter your email address'
							required
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Your Name</label>
						<input
							type='name'
							id='name'
							placeholder='Enter your name'
							required
							value={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='message'>Your Message</label>
					<textarea
						name='message'
						id='message'
						required
						rows={5}
						value={message}
						onChange={e => setMessage(e.target.value)}></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification?.status}
					title={notification?.title}
					message={notification?.message}
				/>
			)}
		</section>
	)
}

export default ContactForm
