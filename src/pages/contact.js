import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch?</h3>

            <p>
              Pour-over chambray keffiyeh dreamcatcher fanny pack, pop-up copper
              mug umami four loko marfa. Cornhole meditation whatever fixie,
              bicycle rights raclette humblebrag.
            </p>
            <p>
              Synth af tbh, keffiyeh man bun knausgaard helvetica. Vaporware
              PBR&B shaman celiac chambray.
            </p>

            <p>
              Gochujang farm-to-table crucifix, jean shorts direct trade lomo
              single-origin coffee you probably haven't heard of them meggings
              messenger bag slow
            </p>
          </article>

          <article>
            <form action="" className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your Email</label>
                <input type="text" email="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button className="btn block">submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
