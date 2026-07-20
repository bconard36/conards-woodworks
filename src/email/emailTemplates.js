/**
 * emailTemplates.js
 * Registry of email "templates" — each is just a plain JS function that
 * returns a params object for sendTemplatedEmail(). To add a new template,
 * add a new function here. No EmailJS dashboard changes ever needed.
 */

// import DarkLogo from '/assets/dark_logo.svg'; // Revisit logo in auto reply once deployed via vercel for https sgv file path 



export const contactNotification = ({ firstName, lastName, email, phoneNum, interest, interestLabel, otherInterest, message }) => ({
    to_email: 'conardswoodworks@gmail.com',
    to_name: 'Jon',
    from_name: `${firstName} ${lastName}`,
    reply_to: email,
    subject: `New ${interest} Inquiry from ${firstName} ${lastName}`,
    message:
`Name: ${firstName} ${lastName}
Email Address: ${email}
Phone Number: ${phoneNum}
Area of Interest: ${interestLabel}
Other Area Interest (if applicable): ${otherInterest}
Message: ${message}`
});

export const contactAutoReply = ({ firstName, email }) => ({
    to_email: email,
    to_name: firstName,
    from_name: 'Jon Conard',
    reply_to: 'conardswoodworks@gmail.com',
    subject: 'Thanks for reaching out!',
    message:
`Hi ${firstName},

Thank you for visiting Conard's Woodworks and taking the time to reach out! 
I've received your inquiry and will get back to you personally once I review it.
In the meantime, feel free to browse the gallery for more examples of my work.

Kind regards,

Jon Conard
Owner | Conard's Woodworks`
});
