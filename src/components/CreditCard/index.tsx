import { creditCardMask, nameMask } from '@/utils/formatter'
import cn from '@/utils/classnames'
import './styles.scss'

type Props = {
  number?: string,
  name?: string,
  month?: string,
  year?: string,
  cvv?: string,
  focus?: string
}

function CreditCard({ number, name, month = "MM", year = "YYYY", cvv, focus }: Props) {
  const getFullClassName = (field: string) => {
    return cn([field, focus === field && 'focus'])
  }

  const isFlipped = focus === 'cvv'

  return (
    <div className="credit-card">
      <div className={cn(["card", isFlipped && "flipped"])}>
        <div className="card--front">
          <span className={getFullClassName("cc-number")} data-testid="cc-number">
            {creditCardMask(number)}
          </span>
          <div className="second-row">
            <div className={getFullClassName("cc-name")}>
              <span className="label">Card Holder</span>
              <span className="value" data-testid="cc-name">{nameMask(name)}</span>
            </div>
            <div className={getFullClassName("cc-expiry")}>
              <span className="label">Expires</span>
              <span className="value" data-testid="cc-expiry">{month.padStart(2, '0')}/{year}</span>
            </div>
          </div>
        </div>

        <div className="card--back">
          <span className={getFullClassName("cvv")} data-testid="cvv">
            {cvv}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CreditCard