import react, {useState} from 'react'

const OrderRow = ({order, index, delivered}) => {
  const [status, setStatus] = useState(order.delivered?true: false)
  return(
    <>
    <tr key={order._id}>
    <th>{index + 1}</th>
    <td>{order.customerName}</td>
    <td>{order.customer}</td>
    <td>{order.order}</td>
    <td>{order.phone}</td>
    <td>{order.address}</td>
    <td>{order.price}</td>
    <td>{order.info}</td>

    <td>{(order.price && !order.paid) && <p className='text-primary text-xl p-2'>Unpaid</p>}
        {(order.price && order.paid) && <div>
            <p><span className='text-success text-xl'>Paid</span></p>
        </div>}
    </td>
    <td>
        {(order.price && !order.paid) && <button type="checkbox" class="toggle" checked  onClick={() => {
          delivered(order._id)
          setStatus(!status)
          }} className='text-primary text-xl p-2'>
            <span>{
            status ? <h1>Delivered</h1> : <h1>Pending</h1>
        }</span>

        {/* <span onClick={() => setStatus(true)}></span>

        <span onClick={() => setStatus(false)}></span> */}
        
        </button>}
        
    </td>

</tr>
</>
  )
}

export default OrderRow