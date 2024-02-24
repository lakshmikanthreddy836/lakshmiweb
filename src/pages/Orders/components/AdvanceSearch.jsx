import React from 'react'
import Button from '../../../common-components/Button'
import SelectOption from '../../../common-components/SelectOption';
import { FaXmark } from "react-icons/fa6";

const AdvanceSearch = () => {

     const [valuePayment, setValuePayment] = React.useState('');
     const [valueAgent, setValueAgent] = React.useState('');

     const PaymentMode = [
          { id: 1, label: 'Online', value: 'Online' },

          { id: 2, label: 'COD', value: 'COD' },

          { id: 3, label: 'Other', value: 'Other' },
     ];

     const OrderByAgent = [
          { id: 1, label: 'Anjali', value: 'Anjali' },

          { id: 2, label: 'Ashish', value: 'Ashish' },

          { id: 3, label: 'Somya', value: 'Somya' },
     ];

     const handleClickAdvSrch = () => {
          let advSrchModal = document.getElementById('AdvncOrdrSrchModal');
          console.log(advSrchModal)
          advSrchModal.style.display = "block";
     };

     const handleCloseAdvSrch = () => {
          let advSrchModal = document.getElementById('AdvncOrdrSrchModal');
          console.log(advSrchModal)
          advSrchModal.style.display = "none";
     };

     const handlePaymentMode = (event) => {
          setValuePayment(event.target.value);
     };
     const handleAgentName = (event) => {
          setValueAgent(event.target.value);
     };

     return (
          <div>
               <Button
                    id='AdvncOrderSearch'
                    label={'Adv. Search'}
                    handleClick={handleClickAdvSrch}
                    style="float-right px-3 py-3 h-5 rounded-none text-white bg-[#4f8dca] hover:bg-[#4f8dca]/100 focus:ring-2 focus:outline-none focus:ring-[#4f8dca]/60 font-medium text-center inline-flex items-center dark:focus:ring-[#4f8dca]/60">
               </Button>
               <div id='AdvncOrdrSrchModal' className='hidden fixed z-[1] overflow-auto w-full h-full bg-[rgba(0,0,0,0.4)] top-0 left-0'>
                    <div id='AdvncOrdrSrchModalContent' className='bg-[#fefefe] w-[60%] p-0 m-auto mt-2'>
                         {/* <span className="close float-right p-4 text-2xl font-semibold">&times;</span> */}
                         <Button
                         label={<FaXmark/>}
                         style='float-right text-2xl font-semibold p-4'
                         handleClick={handleCloseAdvSrch}
                         />
                         <h3 className='text-2xl font-semibold p-4'>Advance Search</h3>
                         <div className="border border-[#4848485e] flex-grow"></div>
                         <div className='px-28 py-[4rem]'>
                              <div>
                                   <label>Order Date</label>
                                   <input type='datetime-local' className='border px-1 py-1 m-[1rem] rounded' />
                                   <input type='datetime-local' className='border px-1 py-1 rounded' />
                              </div>
                              <div>
                                   <label>Delivery Date</label>
                                   <input type='datetime-local' className='border px-1 py-1 m-[1rem] rounded' />
                                   <input type='datetime-local' className='border px-1 py-1' />
                              </div>
                              <div>
                                   <label>Customer Name</label>
                                   <input type='text' className='border px-1 py-1 m-[1rem] rounded w-[74%]' />
                              </div>
                              <div>
                                   <label>Boarding Station</label>
                                   <input type='text' className='border px-1 py-1 m-[1rem] rounded w-[74%]' />
                              </div>
                              <div className='columns-2'>
                                   <label>Payment Mode</label>
                                   <SelectOption
                                        label={"Search by payment mode"}
                                        options={PaymentMode}
                                        value={valuePayment}
                                        onChange={handlePaymentMode}
                                   />
                              </div>
                              <div className='columns-2'>
                                   <label>Order By Agent</label>
                                   <SelectOption
                                        label={"Search by Agent Name"}
                                        options={OrderByAgent}
                                        value={valueAgent}
                                        onChange={handleAgentName}
                                   />
                              </div>
                         </div>
                         <div className="border border-[#4848485e] flex-grow"></div>
                         <div className='p-5 text-end'>
                              <Button
                                   label={'Search'}
                                   style='bg-[#39374f] text-white py-1 px-4 mr-2 text-sm'
                              />
                              <Button
                                   label={'Close'}
                                   style='bg-[#ff0018] text-white py-1 px-4 text-sm'
                                   handleClick={handleCloseAdvSrch}
                              />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AdvanceSearch