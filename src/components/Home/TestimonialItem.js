import React from 'react'

const TestimonialItem = () => {
    return (
        <div className="testimonial-item">
            <div className="text">
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laborum quia possimus cumque obcaecati qui, error velit? Accusamus nemo debitis doloribus iste odio nesciunt voluptas repudiandae minima commodi? Quae, aliquid.""
            </div>

            <div className="details">
                <div className="pp">
                    <img src="/static/images/shipuztov.jpg" alt="" />
                </div>

                <div className="textual">
                    <div className="name">Yakov Shitrit</div>
                    <div className="job">CEO of Shipuztov Inc.</div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialItem
