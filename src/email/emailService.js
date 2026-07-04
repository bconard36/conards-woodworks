/**
 * emailService.js
 * Generic EmailJS sender. Uses ONE EmailJS template (the universal
 * envelope: to_email / from_name / reply_to / subject / message) for
 * every kind of email you need. Adding a new "template" never requires
 * touching the EmailJS dashboard again — just add a builder function
 * in emailTemplates.js and call sendTemplatedEmail() with it.
 */

import emailjs from '@emailjs/browser';


const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Sends a single email using the universal EmailJS template.
 * @param {Object} params - must include to_email, from_name, reply_to, subject, message
 * @returns {Promise}
 */
export const sendTemplatedEmail = (params) => {
    return emailjs.send(serviceID, templateID, params, {
        publicKey: publicKey
    });
};

/**
 * Sends multiple emails in sequence (e.g. a notification + an auto-reply).
 * Stops and rejects on first failure.
 * @param {Array<Object>} paramsList - array of param objects, one per email
 * @returns {Promise}
 */
export const sendTemplatedEmails = async (paramsList) => {
    for (const params of paramsList) {
        await sendTemplatedEmail(params);
    }
};