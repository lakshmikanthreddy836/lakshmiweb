// import * as React from 'react'

import Button from "../../../common-components/Button"

const ImportTrain = () => {
     return (
          <div>
               <div>
                    <h5 className="text-2xl p-3 font-bold">Import Train</h5>
               </div>
               <div className="border rounded mt-4 p-3 ml-4 w-[95%]">

                    <div>
                         <p>Select CSV File*</p>
                    </div>
                    <div className="columns-2">
                         <div>
                              <input type="file" name="csv" className="border p-2" />
                         </div>
                         <div>
                              <Button
                                   label={'Upload'}
                                   style={'bg-[#34334a] mr-1 py-1 px-4 text-white'}
                              />
                         </div>
                    </div>
               </div>
          </div>

     )
}

export default ImportTrain