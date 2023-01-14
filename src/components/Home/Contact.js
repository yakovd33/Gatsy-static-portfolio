import React from "react"

const Contact = () => {
  return (
    <div id="contact-wrap">
        <form action="" className="form">
            <p className="field required half">
                <input className="text-input" id="name" name="name" placeholder="Fullname" required type="text"/>
            </p>
            <p className="field required half two">
                <input className="text-input" id="email" name="email" placeholder="Email Address" required type="email"/>
            </p>
            <p className="field">
                <textarea className="textarea" cols="50" id="message" name="message" placeholder="Message" required rows="4"></textarea>
            </p>
            <p className="field">
                <input className="button" type="submit" value="Send message"/>
            </p>
        </form>
    </div>

  )
}

export default Contact