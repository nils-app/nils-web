import React from "react";

const faq = [
  {
    question: "Why would I pay random websites??",
    answer: (
      <>
        <p>
          That's probably the best question you could ask! And it's not an easy
          one to answer, given how we're used to a "free" Internet.
        </p>
        <p>
          Notice the quotes on free, they're there because (in general) there's
          no free lunch. This means that if you don't directly pay with money
          chances are you're paying with something else.
        </p>
        <p>
          A ton of website owners, blog writers, or content creators want to
          monetise their content but hate the idea of putting ads along with
          their content. On top of that,  <a
            title="27% in 2019 in the US apparently"
            href="https://www.statista.com/statistics/804008/ad-blocking-reach-usage-us/"
          >
            most users
          </a> tend to browse with an <b>ad blocker</b>, and that includes me! But I'm also a
          software developer with some websites online. And it would
          be nice if their users covered at least the cost of keeping them
          online!
        </p>
        <p>
          So instead of paying with your data, or by viewing ads, why not pay actual
          money and be in control?
        </p>
        <p></p>
        <p>
          <b>Nils</b> allows you to easily give each website you visit a little
          tip. This can go from £0.001 to whatever you want.
        </p>
        <p></p>
        <blockquote className="blockquote shadow-sm">
          <p>
            Some sites may choose to use Nil and still serve ads. I'm still unsure of whether this is something
            we should enforce with policy, or allow assuming users will have an <b>ad blocker</b>...<br />
            I'm open to hearing opinions on this.
          </p>
        </blockquote>
      </>
    )
  },
  {
    question: "How does it work?",
    answer: (
      <>
        <p>
          As a user, you charge your balance with money (£1 = 1000 Nils, most other currencies supported)
          <br />
          Then you install the Nils browser extension, and link it to your
          account.
        </p>
        <p></p>
        <p>
          Whenever you browse to a website that is registered with Nils, 1 Nil
          is automatically credited to them.
        </p>
        <p>
          You know that this has happened because the extension icon will turn
          green. This payment can easily be cancelled by clicking on the
          extension icon. Each website can only receive a tip once per day.</p>
        <p></p>
        <p>
          As a website owner, you register with Nils and claim your domains.
          <br />
          From now on, every time a user with the Nils extension visits your
          website you'll get a tip!
        </p>
        <p>
          As soon as you hit the minimum payout amount (10k Nils) you'll get
          paid :)
        </p>
      </>
    )
  },
  {
    question: "Can everyone use it?",
    answer: (
      <>
        <p><em>Short answer:</em> <b>Yes!</b></p>
        <p>
          <em>Long answer:</em> We use Stripe to process card payments, so almost <a href="https://stripe.com/docs/currencies#presentment-currencies">
            every currency
          </a> is supported.
          <br />
          For our payouts to website owners and creators we use Transferwise,
          also supporting <a href="https://transferwise.com/help/11/getting-started/2571942/what-countries-can-i-send-to">
            most countries
          </a>.
        </p>
        <p></p>
        <p>If you're in a country that's not supported, reach out to us and we'll see if there's something we can do.</p>
      </>
    )
  },
  {
    question: "Is Nils a cryptocurrency?",
    answer: (
      <>
        <p>
          <b>No.</b> At the moment Nils is just a proof of concept, trying to figure
          out whether this idea is worth doing!
        </p>
        <p>
          At some point though it may make sense to convert Nils into a
          cryptocurrency. That would give more transparency into how money
          moves, but may come with privacy concerns so we'll see.
        </p>
        <p></p>
        <p>
          The Brave browser has <a href="https://brave.com/brave-rewards/">something similar</a>,
          where they pay users in a cryptocurrency (BAT) for viewing non-tracking ads, and distribute the BATs among
          websites visited, so it just differs in how users get the money. <br/>
          It might even be worth looking into integrating with their system in the future if this works.
        </p>
        <p></p>
        <p>Feel free to get in touch if you have an opinion on this.</p>
      </>
    )
  },
  {
    question: "Any other questions?",
    answer: (
      <>
        <p>
          Just reach out directly at help@nilsapp.com if you have any questions!
        </p>
      </>
    )
  }
];

export default faq;
