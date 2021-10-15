import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import 'bootstrap/dist/css/bootstrap.min.css'

function ContactForm() {
    const [state, handleSubmit] = useForm("mdoyvnne");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
          <div className="margin">
            <h1  className="charlesgalerie fs-1 "> Contactez moi</h1>
          <p id="text">Utilisez ce formulaire pour me contacter par e-mail, pour poser une question, faire une suggestion, une remarque ou une critique.
                De même si vous rencontrez une erreur, une omission, une imprécision, ou même une faute d'orthographe, signalez la moi, je pourrais ainsi, grâce à vous, améliorer le site.
                , n'hésitez surtout pas à vous exprimer...</p>
          </div>
            <div>
        <label htmlFor="email" class="form-label">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email" 
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        </div>
        <div className="espace form-group">
        <label htmlFor="text" > 
        <span className="align-top">Votre message</span> </label>
        <textarea
          id="message"
          name="message"
          rows="3"
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        </div>
        <div className="espace">
        <button type="submit" className="btn btn-secondary " disabled={state.submitting}>
          Submit
        </button>
        </div>
      </form>
    );
  }

export default function Contact() {
    return (
        <div className="background text-center ">
          <ContactForm/>
        </div>
    )
}
