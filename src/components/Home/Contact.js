import React from "react"

const Contact = () => {
  return (
    <div id="contact-wrap">
        <form action="" className="form">
            <p className="field required half">
                <label className="label required" for="name">Name</label>
                <input className="text-input" id="name" name="name" required type="text"/>
            </p>
            <p className="field required half two">
                <label className="label" for="email">E-mail</label>
                <input className="text-input" id="email" name="email" required type="email"/>
            </p>
            <p className="field">
                <label className="label" for="message">Message</label>
                <textarea className="textarea" cols="50" id="message" name="message" required rows="4"></textarea>
            </p>
            <p className="field">
                <input className="button" type="submit" value="Send message"/>
            </p>
        </form>
    </div>

  )
}

export default Contact