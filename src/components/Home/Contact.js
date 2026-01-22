import React, { useEffect, Suspense } from "react"
import 'emoji-slider';

const Contact = () => {
    const isSSR = typeof window === "undefined"

    const loadEmojiSlider = () => {
        const slider = document?.querySelector('emoji-slider');
        slider.value = 0.9;
        document?.removeEventListener('scroll', loadEmojiSlider);
    }

    useEffect(() => {
        const label = document?.querySelector('#percentage-label');
        const slider = document?.querySelector('emoji-slider');
        slider?.addEventListener('change', () => {
          label.innerHTML = Math.round(slider.value * 100) + '%';
        });
    
        const rangeSlider = document?.querySelector('#rangeSlider');
        rangeSlider?.addEventListener('change', () => {
          const v = rangeSlider.value;
          console.log(rangeSlider.value);
          let moods = ["😡","😠","😦","😩","🙁","😐","🙂","😊","😄","😃","😍"];
			
			if (v === 0) {
				rangeSlider.emoji = "🤬";
			} else {
                rangeSlider.emoji = moods[(Math.floor(v * 10))];
            }
        });

        document?.addEventListener('scroll', loadEmojiSlider)
    }, [document, window])
  return (
    <div id="contact-wrap">
        <div className="contact-intro" data-aos="fade-up">
            <p className="contact-kicker"><span>03.</span> Let's work together</p>
            <h3>Tell me about the product you want to build</h3>
            <p className="contact-description">
                Share a quick overview of your idea, expected timeline, budget range, and any must-have features.
                I respond to every message within two business days with next steps.
            </p>
        </div>
        <form action="" className="form" data-aos="fade-up" data-aos-delay="150">
            <p className="field required half">
                <input className="text-input" id="name" name="name" placeholder="Fullname" required type="text"/>
            </p>
            <p className="field required half two">
                <input className="text-input" id="email" name="email" placeholder="Email Address" required type="email"/>
            </p>
            <p className="field">
                <textarea className="textarea" cols="50" id="message" name="message" placeholder="Message" required rows="4"></textarea>
            </p>
            
            <div id="contact-emoji-slider">
                <span>Rate my portfolio: <span id="percentage-label">90%</span></span>
                <emoji-slider emoji="😃" id="rangeSlider" value="0.9" cssOverride={`
                    #barLine {
                        height: 10px !important
                    }

                    #cursor.emoji {
                        font-size: 34px !important
                    }

                    #valueBar, #barLine {
                        border-radius: 50px
                    }
                `}></emoji-slider>
            </div>

            <p className="field">
                <input className="button" type="submit" value="Send message"/>
            </p>
        </form>
    </div>

  )
}

export default Contact