// ** Third Party Components
import PropTypes from 'prop-types'
import classnames from 'classnames'

// ** Reactstrap Imports
import { Card, CardBody } from 'reactstrap'

const StatsHorizontal = ({
  img,
  color,
  stats,
  renderStats,
  statTitle,
  className,
  statsMargin,
}) => {
  return (
    <Card>
      <CardBody className={className}>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <p className='card-text'>{statTitle}</p>

            {renderStats ? (
              renderStats
            ) : (
              <h2
                className={classnames('fw-bolder', {
                  'mb-0': !statsMargin,
                  [statsMargin]: statsMargin,
                })}
              >
                {stats}
              </h2>
            )}
          </div>
          <div
            className={`avatar avatar-stats align-self-start p-50 m-0 ${
              color ? `bg-light-${color}` : 'bg-light-primary'
            }`}
          >
            <div style={{ width: '120px', height: '120px' }}>
              <img src={img} alt='' className='w-100 h-100' />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default StatsHorizontal

// ** PropTypes
StatsHorizontal.propTypes = {
  stats: PropTypes.string,
  renderStats: PropTypes.any,
  className: PropTypes.string,
  img: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  statTitle: PropTypes.string.isRequired,
  statsMargin: PropTypes.oneOf([
    'mb-0',
    'mb-25',
    'mb-50',
    'mb-75',
    'mb-1',
    'mb-2',
    'mb-3',
    'mb-4',
    'mb-5',
  ]),
}
