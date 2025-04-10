interface Message {
  category: string;
  date: string;
  title: string;
  content: string;
}

const Messages = () => {
  const messages: Message[] = [
    {
      category: "CATEGORY",
      date: "12 Jun 2019",
      title: "Bitters hashtag waistcoat fashion axe chia unicorn",
      content:
        "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole...",
    },
    {
      category: "CATEGORY",
      date: "12 Jun 2019",
      title: "Meditation bushwick direct trade taxidermy shaman",
      content:
        "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole...",
    },
    {
      category: "CATEGORY",
      date: "12 Jun 2019",
      title: "Woke master cleanse drinking vinegar salvia",
      content:
        "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole...",
    },
  ];

  return (
    <section className="messages-container">
      <div className="messages-inner">
        <div className="messages-divider">
          {messages.map((message, index) => (
            <div key={index} className="message-item">
              <div className="message-meta">
                <span className="message-category">{message.category}</span>
                <span className="message-date">{message.date}</span>
              </div>

              <div className="message-content">
                <h2 className="message-title">{message.title}</h2>
                <p className="message-text">{message.content}</p>
                <a href="#" className="message-link">
                  Learn More
                  <svg
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Messages;
