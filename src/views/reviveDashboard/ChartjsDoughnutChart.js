// ** Third Party Components
import { Doughnut } from 'react-chartjs-2'
import { Monitor, ArrowDown, ArrowUp } from 'react-feather'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Badge } from 'reactstrap'

const ChartjsRadarChart = ({
  title,
  dataset1,
  dataset2,
  tooltipShadow,
  color2,
  color1,
  primary,
}) => {
  // ** Chart Options
  const options = {
    maintainAspectRatio: false,
    cutout: 60,
    animation: {
      resize: {
        duration: 500,
      },
    },
    plugins: {
      legend: { display: false },
      tooltips: {
        callbacks: {
          label(context) {
            console.log(context)
            let label = context.label || ''
            if (label) {
              label += 'Ronak: '
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.parsed.y)
            }
            return label
          },
        },
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: tooltipShadow,
        backgroundColor: '#fff',
        titleFontColor: '#000',
        bodyFontColor: '#000',
      },
    },
  }

  console.log('NUmmberrrrrr', dataset1.value)
  // ** Chart data
  const data = {
    datasets: [
      {
        data: [Number(dataset1.value), Number(dataset2.value)],
        backgroundColor: [color1, color2],
        borderWidth: 0,
        pointStyle: 'rectRounded',
      },
    ],
  }

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <CardTitle tag='h4'>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: '275px' }}>
          <Doughnut data={data} options={options} height={275} />
        </div>

        <div className='data-container d-flex mt-3 flex-column'>
          <div className='d-flex justify-content-between mb-1'>
            <div className='d-flex align-items-center'>
              <Badge className='ms-auto me-1' color='secondary' pill>
                {dataset1 && dataset1.name}
              </Badge>
            </div>
            <div>
              <span className='text-nowrap'>{dataset1 && dataset1.value}</span>
            </div>
          </div>
          <div className='d-flex justify-content-between mb-1'>
            <div className='d-flex align-items-center'>
              <Badge className='ms-auto me-1' color='dark' pill>
                {dataset2 && dataset2.name}
              </Badge>
            </div>
            <div>
              <span className='text-nowrap'>{dataset2 && dataset2.value}</span>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsRadarChart
