// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="faq">
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(eachFaq => (
            <FaqItem details={eachFaq} key={eachFaq.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
